<template>
	<AdminLayout>
		<usoft-form>
			<usoft-box title="Podstawowe informacje">
				<usoft-field-text admin label="Nazwa" />
			</usoft-box>
		</usoft-form>
	</AdminLayout>
</template>

<script setup>
import {UsoftForm, UsoftFieldText, UsoftBox, AdminLayout} from "./index.js";
</script>
