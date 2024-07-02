import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const options = ref({});

export default function() {
	onMounted(async() => {
		await getOptions()
	})

	const route = useRoute();
	const router = useRouter();
	const getOptions = async() => {
		const path = route.meta.componentPath;
		const module = await import(`./../${path}.vue`);

		const breadcrumbs = [];
		route.matched.map((e) => {
			if (e.meta.title) {
				breadcrumbs.push({path: e.path, title: e.meta.title});
			}
		})

		const data = {
			title: module.default.title ? module.default.title : null,
			breadcrumbs: breadcrumbs ? breadcrumbs : []
		}
		options.value = data;
		return data;
	}

	watch(() => route.path, async() => {
		await getOptions();
	});

	return {
		getOptions,
		options
	}
}
