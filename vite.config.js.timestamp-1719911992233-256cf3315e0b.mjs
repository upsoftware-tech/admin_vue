// vite.config.js
import { defineConfig } from "file:///Volumes/Projekty/upsoftware/projects/admin_vue/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///Volumes/Projekty/upsoftware/projects/admin_vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { quasar, transformAssetUrls } from "file:///Volumes/Projekty/upsoftware/projects/admin_vue/node_modules/@quasar/vite-plugin/src/index.js";
var __vite_injected_original_dirname = "/Volumes/Projekty/upsoftware/projects/admin_vue";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.js"),
      name: "UpSoftware",
      fileName: "upsoftware"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
        exports: "named"
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/quasar.components.scss";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy9Qcm9qZWt0eS91cHNvZnR3YXJlL3Byb2plY3RzL2FkbWluX3Z1ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1ZvbHVtZXMvUHJvamVrdHkvdXBzb2Z0d2FyZS9wcm9qZWN0cy9hZG1pbl92dWUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1ZvbHVtZXMvUHJvamVrdHkvdXBzb2Z0d2FyZS9wcm9qZWN0cy9hZG1pbl92dWUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCB7IHF1YXNhciwgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSAnQHF1YXNhci92aXRlLXBsdWdpbidcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHR2dWUoe1xuXHRcdCAgICB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfVxuXHQgICAgfSksXG5cdFx0cXVhc2FyKClcblx0XSxcblx0YnVpbGQ6IHtcblx0XHRsaWI6IHtcblx0XHRcdGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXguanNcIiksXG5cdFx0XHRuYW1lOiBcIlVwU29mdHdhcmVcIixcblx0XHRcdGZpbGVOYW1lOiBcInVwc29mdHdhcmVcIixcblx0XHR9LFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGV4dGVybmFsOiBbXCJ2dWVcIl0sXG5cdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0Z2xvYmFsczoge1xuXHRcdFx0XHRcdHZ1ZTogXCJWdWVcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXhwb3J0czogJ25hbWVkJ1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRjc3M6IHtcblx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG5cdFx0XHRzY3NzOiB7XG5cdFx0XHRcdGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcInNyYy9zdHlsZXMvcXVhc2FyLmNvbXBvbmVudHMuc2Nzc1wiO2Bcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxTQUFTLG9CQUFvQjtBQUM1VixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsUUFBUSwwQkFBMEI7QUFIM0MsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLE1BQ0EsVUFBVSxFQUFFLG1CQUFtQjtBQUFBLElBQ2hDLENBQUM7QUFBQSxJQUNKLE9BQU87QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSixPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNYO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDZCxVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNSLEtBQUs7QUFBQSxRQUNOO0FBQUEsUUFDQSxTQUFTO0FBQUEsTUFDVjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSixxQkFBcUI7QUFBQSxNQUNwQixNQUFNO0FBQUEsUUFDTCxnQkFBZ0I7QUFBQSxNQUNqQjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
