<script setup lang="ts">
	import type { ITeam } from "@/types/team";

	definePageMeta({
		layout: "dashboard",
	});

	const user = useSupabaseUser();
	const {
		data: userTeams,
		pending: teamsPending,
		refresh: teamsRefresh,
	} = await useFetch<ITeam[]>("/api/team/fetchUserTeams");

	const delTeamModal = ref(false);
	const markedTeam = ref();
	const toast = useToast();
	console.log(userTeams.value);
</script>

<template>
	<div>
		<UModal v-model="delTeamModal">
			<div class="text-center">
				<UCard>
					<p class="font-mono">
						Are you sure you want to delete this team? This action
						<strong>cannot</strong> be undone.
					</p>
					<div class="flex justify-between mt-5">
						<UButton
							class="font-mono text-xl px-5"
							color="red"
							@click="
								() => {
									delTeamModal = false;
								}
							"
						>
							No
						</UButton>
						<UButton
							class="font-mono text-xl px-5"
							color="green"
							@click="
								async () => {
									delTeamModal = false;
									if (markedTeam) {
										const res = await useFetch('/api/team/deleteTeam', {
											method: 'delete',
											body: { id: markedTeam },
										}).finally(() => {
											teamsRefresh();
											toast.add({
												title: 'Team deleted',
												description: 'Team has been deleted',
												icon: 'i-heroicons-check-circle',
											});
										});
										console.log(res.data);
									} else {
										console.log('no team marked');
									}
								}
							"
						>
							Yes
						</UButton>
					</div>
				</UCard>
			</div>
		</UModal>

		<div class="w-2/3 m-auto px-6">
			<CreateTeamModal @submit="teamsRefresh()" />
		</div>

		<div v-for="team in userTeams" class="grid grid-cols-2 gap-5 m-3">
			<UCard>
				<div class="flex float-right">
					<UButton
						color="red"
						@click="
							() => {
								delTeamModal = true;
								markedTeam = team.id;
								console.log(markedTeam);
							}
						"
					>
						<Icon name="mdi:close" class="text-2xl" />
					</UButton>
				</div>
				<div class="flex justify-between pb-5">
					<h1 class="text-3xl font-bold">{{ team.teamName }}</h1>
				</div>

				<div class="flex justify-between">
					<div class="items-center space-y-2">
						<div class="flex">
							<Icon name="mdi:account" class="text-3xl" />
							<h1 class="text-2xl font-bold">Captain:</h1>
						</div>
						<div class="flex">
							<div class="flex space-x-3">
								<UAvatar
									:alt="team.teamCaptain.label"
									size="sm"
									:src="team.teamCaptain.suffix"
								/>
								<h1 class="font-mono text-2xl">{{ team.teamCaptain.label }}</h1>
							</div>
						</div>
						<div class="flex items-center space-x-2">
							<Icon name="mdi:account-group" class="text-3xl" />
							<h1 class="text-2xl font-bold">Team members</h1>
						</div>
						<div v-for="member in team.members" class="flex space-x-3">
							<UAvatar :alt="member.label" size="sm" :src="member.suffix" />
							<h1 class="text-2xl font-mono">{{ member.label }}</h1>
						</div>
					</div>

					<div>
						<h1 class="text-2xl font-bold text-right">
							Wins: <span class="text-green-400">{{ team.wins }}</span>
						</h1>
						<h1 class="text-2xl font-bold text-right">
							Losses: <span class="text-red-400">{{ team.losses }}</span>
						</h1>
					</div>
				</div>
			</UCard>
		</div>
	</div>
</template>
