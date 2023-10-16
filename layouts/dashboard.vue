<script setup>
	const client = useSupabaseClient();
	const router = useRouter();
</script>

<template>
	<div class="h-screen">
		<NuxtLoadingIndicator />
		<div class="w-2/12 h-screen float-left flex flex-col">
			<div class="flex flex-1 flex-col mb-auto">
				<Drawer />
			</div>
			<div class="relative mx-2 mb-5">
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

		<slot />
	</div>
</template>
