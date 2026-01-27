import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
      skipDiagnostics: false,
    })],
  build: {
    lib: {
      entry: "src/entry.ts",
      name: "TvSearch",
      fileName: format => `tv-search.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["vue", "@todovue/tv-button"],
      output: {
        globals: {
          vue: "Vue"
        },
        exports: 'named'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
