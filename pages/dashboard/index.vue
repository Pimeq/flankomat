<script setup lang="ts">
	type ITeams = [
		{
			id: number;
			teamName: string | null;
			teamCaptain: string | null;
			members: [member: string | null];
			image: string | null;
			wins: number | null;
			losses: number | null;
		}
	];

	definePageMeta({
		layout: "dashboard",
	});
	const user = useSupabaseUser();
	const { pending: teamsPending, data: userTeams } = useLazyFetch<ITeams>(
		"/api/fetchUserTeams"
	);
	watch(userTeams, (newTeams) => {
		userTeams.value = newTeams;
	});
</script>

<template>
	<div v-if="teamsPending">loading...</div>
	<div v-else>
		<div v-if="!userTeams?.length">
			<div class="w-1/2 m-auto pt-8">
				<UAlert
					title="You don't have any teams yet!"
					description="Create a team to get started."
					icon="i-heroicons-user-group"
					color="primary"
					variant="subtle"
				/>
				<div class="text-center">
					<UButton
						class="mx-auto mt-6 w-max"
						color="primary"
						variant="solid"
						size="lg"
						label="Create a team"
						@click="() => $router.push('/dashboard/teams')"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
