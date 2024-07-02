import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
		    template: { transformAssetUrls }
	    }),
		quasar()
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.js"),
			name: "UpSoftware",
			fileName: "upsoftware",
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
				exports: 'named'
			}
		},
	},
});
