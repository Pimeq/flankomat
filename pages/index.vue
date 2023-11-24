<script setup lang="ts">
	const route = useRoute();
</script>

<template>
	<div class="bg-slate-900 h-full">
		<div class="navbar">
			<div class="container mx-auto">
				<div class="flex justify-between">
					<div class="flex space-x-4">
						<div class="flex items-center py-4 px-2 text-green-400">
							<svg class="h-6 w-6 mr-1" viewBox="0 0 24 24">
								<path
									d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z"
									fill="currentColor"
								/>
							</svg>
							<span class="font-bold">Flankomat</span>
						</div>
						<NuxtLink
							to="#about"
							class="py-4 px-2 text-green-400 hover:text-green-700 transition-all ease-in-out duration-3 border-b-2 border-green-400"
							>About</NuxtLink
						>
						<NuxtLink
							to="#pricing"
							class="py-4 px-2 text-green-400 hover:text-green-700 transition-all ease-in-out duration-3 border-b-2 border-green-400"
							>Pricing</NuxtLink
						>
						<NuxtLink
							to="#contactUs"
							class="py-4 px-2 text-green-400 hover:text-green-700 transition-all ease-in-out duration-3 border-b-2 border-green-400"
							>Contact Us</NuxtLink
						>
					</div>
					<div class="flex items-center space-x-4">
						<UButton to="/auth/login" class="py-2.5 px-5 mx-2">Log in</UButton>
					</div>
				</div>
			</div>
		</div>
		<LandingHero />
		<LandingAboutUs id="aboutUs" />
		<LandingPricing id="pricing" />

		<div class="footer">
			<div class="container mx-auto px-6 pt-10 pb-6">
				<div class="flex flex-wrap">
					<div class="w-full md:w-1/4 text-center md:text-left">
						<h5 class="uppercase mb-6 font-bold">Links</h5>
						<ul class="mb-4 flex space-x-3">
							<li
								class="hover:scale-125 hover:-translate-y-3 transition-all ease-in-out"
							>
								<NuxtLink
									href="#"
									class="hover:underline text-gray-200 hover:text-orange-500 transition-all ease-in-out duration-3"
								>
									<Icon name="uil:github" color="white" class="text-5xl" />
								</NuxtLink>
							</li>
							<li
								class="hover:scale-125 hover:-translate-y-3 transition-all ease-in-out"
							>
								<NuxtLink
									href="#"
									class="text-gray-200 hover:text-green-400 transition-all ease-in-out duration-3"
								>
									<Icon name="uil:discord" color="white" class="text-5xl" />
								</NuxtLink>
							</li>
							<li
								class="hover:scale-125 hover:-translate-y-3 transition-all ease-in-out"
							>
								<NuxtLink
									href="#"
									class="hover:underline text-gray-200 hover:text-green-400 transition-all ease-in-out duration-3"
								>
									<Icon
										name="i-heroicons-exclamation-triangle"
										color="white"
										class="text-5xl"
									/>
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
