<script setup lang="ts">
	const supabase = useSupabaseClient();

	const signInwithDiscord = async () => {
		await supabase.auth.signInWithOAuth({
			provider: "discord",
			options: {
				redirectTo: "http://localhost:3000/auth/confirm",
			},
		});
	};
</script>

<template>
	<div class="bg-slate-900 h-screen flex flex-col justify-center items-center">
		<div class="bg-gray-800 rounded-md p-4">
			<UButton
				@click="signInwithDiscord"
				class="bg-gray-700 rounded-lg p-2 text-white"
			>
				Login with Discord
			</UButton>
		</div>
	</div>
</template>
