<template>
	<main class="admin__app tw-px-5 sm:twpx-8 tw-py-5">
		<div class="tw-flex">
			<div class="tw-w-64">

			</div>
			<div class="md:tw-max-w-auto tw-min-w-0 tw-max-w-full tw-flex-1 tw-rounded-[30px] tw-bg-slate-100 tw-px-4 before:tw-block before:tw-h-px before:tw-w-full before:tw-content-[''] dark:tw-bg-darkmode-700 md:tw-px-[22px]">
				<div class="tw-relative tw-z-[51] tw-flex tw-h-[67px] tw-items-center tw-border-b tw-border-slate-200">
					<div class="tw-flex-1">
						???
					</div>
					<div>

					</div>
				</div>
				<div class="admin__app__content tw-mt-8">
					<h2 class="intro-y tw-mt-0 tw-text-lg tw-font-medium"> ??? </h2>
					<div class="tw-mt-5">
						<slot />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
