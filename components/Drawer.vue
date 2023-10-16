<script setup lang="ts">
	const user = useSupabaseUser();
	const client = useSupabaseClient();
	const router = useRouter();

	const links = [
		{
			label: "Profile",
			avatar: {
				src: user.value?.user_metadata.picture,
			},
			badge: 100,
		},
		{
			label: "Home",
			icon: "i-heroicons-home",
			to: "/dashboard",
		},
		{
			label: "Events",
			icon: "i-heroicons-command-line",
			to: "/dashboard/events",
		},
		{
			label: "Trades",
			icon: "i-heroicons-chart-bar",
			to: "/dashboard/trades",
		},
	];
</script>

<template>
	<UVerticalNavigation :links="links" class="mt-3" />
</template>
