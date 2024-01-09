<script setup>
	const client = useSupabaseClient();
	const router = useRouter();
</script>

<template>
	<div class="flex h-full overflow-hidden">
		<NuxtLoadingIndicator />

		<div class="flex flex-col h-full w-2/12 bg-gray-800 text-gray-200 relative">
			<div class="fixed h-full">
				<Drawer />
				<div class="absolute bottom-2 mx-auto text-center cursor-pointer">
					<UButton
						size="lg"
						icon=" i-heroicons-lock-open"
						@click="
							() => {
								client.auth.signOut();
								router.push('/auth/login');
							}
						"
					>
						Log Out
					</UButton>
				</div>
			</div>
		</div>

		<slot class="flex overflow-x-hidden overflow-y-auto p-4 w-full" />
	</div>
</template>
