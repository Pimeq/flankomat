<script setup lang="ts">
	definePageMeta({
		layout: "default",
	});

	const supabase = useSupabaseClient();

	const signInwithDiscord = async () => {
		await supabase.auth.signInWithOAuth({
			provider: "discord",
			options: {
				redirectTo: "http://flankomat.pimeq.systems/auth/confirm",
			},
		});
	};
</script>

<template>
	<div class="bg-slate-900 h-screen flex flex-col justify-center items-center">
		<UButton @click="signInwithDiscord" class="p-2 text-grey-200">
			Login with Discord
		</UButton>
	</div>
</template>
