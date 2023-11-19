<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<div class="bg-slate-900 h-screen">
		<div class="navbar">
			<div class="container mx-auto">
				<div class="flex justify-between">
					<div class="flex space-x-4">
						<NuxtLink
							href="#"
							class="flex items-center py-4 px-2 text-green-400 hover:text-green-700 transition-all ease-in-out duration-3"
						>
							<svg class="h-6 w-6 mr-1" viewBox="0 0 24 24">
								<path
									d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z"
									fill="currentColor"
								/>
							</svg>
							<span class="font-bold">Flankomat</span>
						</NuxtLink>
						<NuxtLink
							href="#"
							class="py-4 px-2 text-green-400 hover:text-green-700 transition-all ease-in-out duration-3 border-b-2 border-green-400"
							>About</NuxtLink
						>
						<NuxtLink
							href="#"
							class="py-4 px-2 text-green-400 hover:text-green-700 transition-all ease-in-out duration-3 border-b-2 border-green-400"
							>Pricing</NuxtLink
						>
						<NuxtLink
							href="#"
							class="py-4 px-2 text-green-400 hover:text-green-700 transition-all ease-in-out duration-3 border-b-2 border-green-400 font-bold"
							>Contact Us</NuxtLink
						>
					</div>
					<div class="flex items-center space-x-4">
						<UButton to="/auth/login" class="py-2.5 px-5">Log in</UButton>
					</div>
				</div>
			</div>
		</div>
		<LandingHero />
		<div class="pricing"></div>
	</div>
</template>
