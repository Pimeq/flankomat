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
			to: "/dashboard/profile",
			badge: 100,
		},
		{
			label: "Home",
			icon: "i-heroicons-home",
			to: "/dashboard",
		},
		{
			label: "Events",
			icon: "i-heroicons-calendar",
			to: "/dashboard/events",
		},
		{
			label: "Teams",
			icon: "i-heroicons-user-group",
			to: "/dashboard/teams",
		},
	];
</script>

<template>
	<UVerticalNavigation :links="links" class="mt-3" />
</template>
