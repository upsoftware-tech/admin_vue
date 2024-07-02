import axios from 'axios'

const api = axios.create({ baseURL: 'http://127.0.0.1:8000/v1/' })

async function callApi(url, method, data, errors, clearErrors = true) {

	try {
		const request = await api({
			url: url,
			method: method,
			data: data
		});

		Object.keys(errors).forEach(key => {
			delete errors[key];
		});
		Object.assign(errors, []);

		return request;

	} catch (error) {

		if (clearErrors) {
			Object.keys(errors).forEach(key => {
				delete errors[key];
			});
		}

		if (error.response && error.response.status === 422) {
			if (errors.value) {
				errors.value = error.response.data.errors;
			}
			else {
				Object.assign(errors, error.response.data.errors);
			}
		} else {
			console.error('An error occurred:', error);
		}
		throw error;
	}
}

export { api, callApi }
