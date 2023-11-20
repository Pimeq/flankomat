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
							class="py-4 px-2 text-green-400 hover:text-green-700 transition-all ease-in-out duration-3 border-b-2 border-green-400"
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
		<div class="pricing mt-5 bg-gray-800">
			<div class="grid grid-cols-3 p-2 space-x-2">
				<UCard
					:ui="{
						divide: '',
					}"
					class="border-2 border-gray-800 shadow-lg hover:shadow-green-400/30 hover:border-green-400 transition-all ease-in-out"
				>
					<template #header>
						<h1 class="font-mono text-2xl text-center text-white p-4">
							Don't worry about the price
						</h1>
					</template>
					<div class="p-4">
						<p class="text-lg text-center">
							You don't pay anything, no really, it's free!
						</p>
					</div>
				</UCard>
				<UCard
					:ui="{
						divide: '',
					}"
					class="border-2 border-gray-800 shadow-lg hover:shadow-green-400/30 hover:border-green-400 transition-all ease-in-out"
				>
					<template #header>
						<h1 class="font-mono text-2xl text-center text-white p-4">
							Earn funky credits
						</h1>
					</template>
					<div class="p-4">
						<p class="text-lg text-center">
							Way better that crypto, no rugpulls, no scams, just funky credits
						</p>
					</div>
				</UCard>
				<UCard
					:ui="{
						divide: '',
					}"
					class="border-2 border-gray-800 shadow-lg hover:shadow-green-400/30 hover:border-green-400 transition-all ease-in-out"
				>
					<template #header>
						<h1 class="font-mono text-2xl text-center text-white p-4">
							Why do we do this?
						</h1>
					</template>
					<div class="p-4">
						<p class="text-lg text-center">Cuz I felt like it :3</p>
					</div>
				</UCard>
			</div>
		</div>
	</div>
</template>
