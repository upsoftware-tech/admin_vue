<template>
	<div class="tw-block sm:tw-flex tw-group tw-mt-10 tw-flex-col tw-items-start xl:tw-flex-row">
		<label class="tw-inline-block tw-mb-2 tw-group-[.form-inline]:tw-mb-2 group-[.form-inline]:sm:tw-mb-0 group-[.form-inline]:sm:tw-mr-5 group-[.form-inline]:sm:tw-text-right tw-w-full xl:!tw-mr-10 xl:tw-w-64">
			<div class="tw-text-left">
				<div class="tw-flex tw-items-center">
					<div class="tw-font-medium">{{ label }}</div>
					<div class="tw-ml-2 tw-rounded-md tw-bg-red-200 tw-text-red-600 tw-px-2 tw-py-0.5 tw-text-xs dark:tw-bg-darkmode-300 dark:tw-text-slate-400">Wymagane</div>
				</div>
				<div class="tw-mt-3 tw-text-xs tw-leading-relaxed tw-text-slate-500">
					The image format is .jpg .jpeg .png and a minimum size of 300 x 300 pixels (For optimal images use a minimum size of 700 x 700 pixels).
				</div>
			</div>
		</label>
		<div class="tw-mt-3 tw-w-full tw-flex-1 xl:tw-mt-0">
			<q-input v-bind="$attrs" outlined class="admin__field__text" />
		</div>
	</div>
</template>

<script setup>
defineProps({
	label: {
		type: String,
		default: null
	}
})
</script>
