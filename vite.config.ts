import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log("Vite build mode:", mode); // Helps debug on Vercel

  const isDev = mode === "development";

  return {
    base: "/", // ✅ For Vercel or domain-based deploys
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      isDev ? componentTagger() : null, // ✅ Only active in dev
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
