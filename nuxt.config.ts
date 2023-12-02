// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxt/ui",
		"@nuxtjs/supabase",
		"nuxt-icon",
		"@hypernym/nuxt-anime",
	],
	supabase: {
		url: process.env.SUPABASE_URL,
		key: process.env.SUPABASE_KEY,
		redirectOptions: {
			login: "/auth/login",
			callback: "/auth/confirm",
			exclude: ["/"],
		},
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		layoutTransition: { name: "layout", mode: "out-in" },
	},
	anime: {
		composables: true,
	},
});
