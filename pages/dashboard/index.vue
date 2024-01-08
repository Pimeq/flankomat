<script setup lang="ts">
	import type { ITeams, ITeam } from "@/types/team";

	definePageMeta({
		layout: "dashboard",
	});
	const user = useSupabaseUser();
	const { pending: teamsPending, data: userTeams } = useLazyFetch<ITeams>(
		"/api/team/fetchUserTeams"
	);
	const { pending: otherTeamsPending, data: otherTeams } = useLazyFetch<ITeams>(
		"/api/team/fetchOtherTeams"
	);
	watch(userTeams, (newTeams) => {
		userTeams.value = newTeams;
	});

	const columns = [
		{
			label: "Team Name",
			name: "Name",
			key: "teamName",
		},
		{
			label: "Team Members",
			name: "Members",
			key: "members",
		},
		{
			label: "Team Wins",
			name: "Wins",
			key: "wins",
		},
		{
			label: "Team Losses",
			name: "Losses",
			key: "losses",
		},
	];
</script>

<template>
	<div v-if="teamsPending">Loading...</div>
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
		<div v-else>
			<div>
				<div class="justify-items-center items-center pt-3">
					<h1 class="text-3xl font-bold">Your teams</h1>
					<UTable :rows="userTeams" :columns="columns" class="px-5">
						<template #members-data="{ row }">
							{{
								(row as ITeam).members.map((member) => member.label).join(", ")
							}}
						</template>
					</UTable>
				</div>
				<div class="justify-items-center items-center pt-3">
					<h1 class="text-3xl font-bold">Other teams</h1>
					<UTable :rows="otherTeams || []" :columns="columns" class="px-5">
						<template #members-data="{ row }">
							{{
								(row as ITeam).members.map((member) => member.label).join(", ")
							}}
						</template>
					</UTable>
				</div>
			</div>
		</div>
	</div>
</template>
