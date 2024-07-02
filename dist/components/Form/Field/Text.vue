<template>
	<form-field-admin-text v-if="admin" v-bind="$attrs" />
	<q-input v-else v-bind="$attrs" outlined :error="hasError" :error-message="errorMessage" />
</template>

<script setup>
import FormFieldAdminText from './Admin/Text.vue';
import {computed} from "vue";

const props = defineProps({
	admin: {
		type: Boolean,
		default: false
	},
	error: [Boolean, String, Array]
})

const hasError = computed(() => props.error ? true : false);
const errorMessage = computed(() => props.error ? (typeof props.error === 'string' ? props.error : props.error[0]) : null);
</script>
