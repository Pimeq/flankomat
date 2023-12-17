<script setup lang="ts">
	definePageMeta({
		layout: "dashboard",
	});

	export interface memberData {
		id: string;
		label: string;
		suffix: string;
	}

	type ITeam = {
		teamName: string;
		teamCaptain: string;
		members: memberData[];
		image: string;
	};

	const user = useSupabaseUser();
	const {
		data: userTeams,
		pending: teamsPending,
		refresh: teamsRefresh,
	} = await useFetch<ITeam[]>("/api/fetchUserTeams", {
		params: { id: user.value?.id },
	});
</script>

<template>
	<div>
		<div class="w-2/3 m-auto px-6">
			<CreateTeamModal @submit="teamsRefresh()" />
		</div>
		<div v-for="team in userTeams" class="grid grid-cols-2 gap-5 m-3">
			<UCard>
				<div class="flex justify-between">
					<div class="flex items-center space-x-2">
						<Icon name="mdi:account-group" class="text-3xl" />
						<h1 class="text-2xl font-bold">{{ team.teamName }}</h1>
					</div>
				</div>
				<div class="flex justify-between">
					<div class="items-center space-y-2">
						<Icon name="mdi:account" class="text-3xl" />
						<div v-for="member in team.members" class="flex space-x-3">
							<UAvatar :alt="member.label" size="sm" :src="member.suffix" />
							<h1 class="text-2xl font-bold">{{ member.label }}</h1>
						</div>
					</div>
				</div>
			</UCard>
		</div>
	</div>
</template>
