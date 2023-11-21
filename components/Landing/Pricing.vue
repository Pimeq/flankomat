<template>
	<div class="pricing mt-5 mb-4 bg-gray-800 font-mono">
		<h1
			class="text-4xl font-mono text-center p-4 my-3 bg-gradient-to-b from-green-500/25"
		>
			Pricing:
		</h1>
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
				class="py-7 border-2 border-gray-800 shadow-lg hover:shadow-green-400/30 hover:border-green-400 transition-all ease-in-out"
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
</template>
