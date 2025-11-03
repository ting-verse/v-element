// vite.es.config.ts
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/32130/Desktop/v-element/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/32130/Desktop/v-element/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/32130/Desktop/v-element/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueMacros from "file:///C:/Users/32130/Desktop/v-element/node_modules/unplugin-vue-macros/dist/index.mjs";
import dts from "file:///C:/Users/32130/Desktop/v-element/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\32130\\Desktop\\v-element";
var __vite_injected_original_import_meta_url = "file:///C:/Users/32130/Desktop/v-element/vite.es.config.ts";
var vite_es_config_default = defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      }
    }),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      outDir: "dist/types"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "VElement",
      fileName: "v-element",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "axios"
      ],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          return chunkInfo.name;
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwzMjEzMFxcXFxEZXNrdG9wXFxcXHYtZWxlbWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMzIxMzBcXFxcRGVza3RvcFxcXFx2LWVsZW1lbnRcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzMyMTMwL0Rlc2t0b3Avdi1lbGVtZW50L3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xyXG5pbXBvcnQgVnVlTWFjcm9zIGZyb20gXCJ1bnBsdWdpbi12dWUtbWFjcm9zXCI7XHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBWdWVNYWNyb3Mudml0ZSh7XHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICB2dWU6IHZ1ZSgpLFxyXG4gICAgICAgIHZ1ZUpzeDogdnVlSnN4KCksXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIGR0cyh7XHJcbiAgICAgIHRzY29uZmlnUGF0aDogXCIuL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcclxuICAgICAgb3V0RGlyOiBcImRpc3QvdHlwZXNcIixcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IFwiZGlzdC9lc1wiLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXHJcbiAgICAgIG5hbWU6IFwiVkVsZW1lbnRcIixcclxuICAgICAgZmlsZU5hbWU6IFwidi1lbGVtZW50XCIsXHJcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICBcInZ1ZVwiLFxyXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIsXHJcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIixcclxuICAgICAgICBcIkBmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWVcIixcclxuICAgICAgICBcIkBwb3BwZXJqcy9jb3JlXCIsXHJcbiAgICAgICAgXCJheGlvc1wiLFxyXG4gICAgICBdLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGNodW5rSW5mbykgPT4ge1xyXG4gICAgICAgICAgaWYgKGNodW5rSW5mby5uYW1lID09PSBcInN0eWxlLmNzc1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImluZGV4LmNzc1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNodW5rSW5mby5uYW1lIGFzIHN0cmluZztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUyxTQUFTLGVBQWUsV0FBVztBQUNyVSxTQUFTLGVBQWU7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxTQUFTO0FBTmhCLElBQU0sbUNBQW1DO0FBQTJJLElBQU0sMkNBQTJDO0FBU3JPLElBQU8seUJBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFVBQVUsS0FBSztBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1AsS0FBSyxJQUFJO0FBQUEsUUFDVCxRQUFRLE9BQU87QUFBQSxNQUNqQjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxTQUFTLGFBQWE7QUFDbEMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU8sVUFBVTtBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
