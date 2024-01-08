<script setup lang="ts">
	import type { Iuser } from "@/types/user";
	definePageMeta({
		layout: "dashboard",
	});
	const route = useRoute();
	const user = useSupabaseUser();
	const { pending: userPending, data: userData } = useLazyFetch<Iuser[]>(
		"/api/user/fetchCurUser",
		{
			method: "POST",
		}
	);
</script>

<template>
	<div>
		<div v-if="userPending">Loading...</div>
		<div v-else-if="!userData || !userData[0]">
			<h1>No user found</h1>
		</div>
		<div v-else class="p-3">
			<div class="flex space-x-5">
				<UAvatar :src="userData[0].avatar" />
				<h1 class="text-3xl font-bold">{{ userData[0].fullName }}</h1>
			</div>
			<p>{{ userData[0] }}</p>
		</div>
	</div>
</template>
