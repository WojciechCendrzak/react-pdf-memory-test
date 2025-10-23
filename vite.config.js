import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // make sure HMR is not affecting the memory usage
    hmr: false,
  },
});
