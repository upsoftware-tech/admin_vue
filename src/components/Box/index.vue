<template>
	<div class="tw-p-5 tw-bg-white tw-border tw-border-neutral-200 tw-rounded-md tw-shadow-[0_3px_5px_#0000000b]">
		<div class="tw-rounded-md tw-border tw-border-slate-200/60 tw-p-5 dark:tw-border-darkmode-400">
			<div v-if="title" class="tw-flex tw-text-slate-700 tw-items-center tw-border-b tw-border-slate-200/60 tw-pb-5 tw-text-base tw-font-medium dark:tw-border-darkmode-400">
				<PhCaretDown class="tw-mr-2" size="16" weight="regular" />
				{{ title }}
			</div>
			<div :class="{'tw-mt-5': title}">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
import { PhCaretDown } from '@phosphor-icons/vue';

defineProps({
	title: {
		type: String,
		default: null
	}
})
</script>
