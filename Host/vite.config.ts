import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "host",
			remotes: {
				remote: "http://localhost:5001/assets/remoteEntry.js",
			},
			shared: ["react", "react-dom"],
		}),
	],
	build: {
		cssCodeSplit: false,
		minify: false,
		modulePreload: false,
		target: "esnext",
	},
});
