<template>
	<q-input v-bind="$attrs" outlined :error="hasError" :error-message="errorMessage" />
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
	error: [Boolean, String, Array]
});

const hasError = computed(() => props.error ? true : false);
const errorMessage = computed(() => props.error ? (typeof props.error === 'string' ? props.error : props.error[0]) : null);
</script>
