import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      config: "/src/config",
      styles: "/src/components/styles",
      ui: "/src/components/ui",
      utils: "/src/components/utils",
      views: "/src/components/views",
    },
  },
});
