<script setup lang="ts">
	import type { FormError, FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

	const isOpen = ref(false);
	const user = useSupabaseUser();
	defineShortcuts({
		escape: {
			usingInput: true,
			whenever: [isOpen],
			handler: () => {
				isOpen.value = false;
			},
		},
	});
	const state = ref({
		teamCaptain: user.value?.id,
		teamName: user.value?.user_metadata?.full_name + "'s Team",
		teamMembers: [],
	});

	const validate = (state: any): FormError[] => {
		const errors = [];
		//if (!state.email) errors.push({ path: "email", message: "Required" });
		if (!state.password) errors.push({ path: "password", message: "Required" });
		return errors;
	};
	async function submit(event: FormSubmitEvent<any>) {
		// Do something with data
		console.log(event.data);
	}

	type user = {
		id: string;
		fullName: string;
		avatar: string;
	};

	const search = async (q: any) => {
		const users = await $fetch<user[]>("/api/fetchUserList", {
			params: { q },
		});
		return users
			.map((user: user) => ({
				id: user.id,
				label: user.fullName,
				suffix: user.avatar,
			}))
			.filter(Boolean);
	};
	const selected = ref([]);
</script>
<template>
	<div>
		<UButton
			class="mx-auto mt-6 w-max"
			color="primary"
			variant="solid"
			size="lg"
			label="Create a team"
			@click="isOpen = true"
		/>

		<div>
			<UModal v-model="isOpen" prevent-close>
				<UCard
					:ui="{
						ring: '',
						base: 'overflow-show',
						divide: 'divide-y divide-gray-100 dark:divide-gray-800',
					}"
				>
					<template #header>
						<div class="flex items-center justify-between">
							<h3
								class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
							>
								Create a team!
							</h3>
							<UButton
								color="gray"
								variant="ghost"
								icon="i-heroicons-x-mark-20-solid"
								class="-my-1"
								@click="isOpen = false"
							/>
						</div>
					</template>

					<div>
						<UForm :validate="validate" :state="state" @submit="submit">
							<UFormGroup
								size="lg"
								label="Team Name"
								required
								name="teamName"
								class="py-2"
							>
								<UInput
									v-model="state.teamName"
									placeholder="funky name"
									icon="i-heroicons-user-group"
								/>
							</UFormGroup>
							<UFormGroup
								size="lg"
								label="Team Captain"
								required
								name="teamCaptain"
								class="py-2"
							>
								<UInput
									v-model="state.teamCaptain"
									disabled
									placeholder="that'd be you dummy :3"
									icon="i-heroicons-user-group"
								/>
							</UFormGroup>
							<UFormGroup label="Members" name="teamMembers" class="py-2">
								<USelectMenu
									v-model="selected"
									:searchable="search"
									placeholder="Search for a user..."
									multiple
									by="id"
								/>
							</UFormGroup>
							<div class="text-center p-2 mt-5">
								<UButton
									color="primary"
									variant="solid"
									size="lg"
									label="Create Team"
									type="submit"
								/>
							</div>
						</UForm>
					</div>
				</UCard>
			</UModal>
		</div>
	</div>
</template>
