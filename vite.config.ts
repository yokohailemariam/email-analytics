import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx } from "@crxjs/vite-plugin";
import manifestJson from "./manifest.json";
import { ManifestV3Export } from "@crxjs/vite-plugin";

const manifest = manifestJson as ManifestV3Export;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
      },
    },
  },

  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
});
