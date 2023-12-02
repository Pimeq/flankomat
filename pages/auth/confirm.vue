<script setup lang="ts">
	const user = useSupabaseUser();
	const quote = ref("");
	const ejectMessages = [
		"It was fun.",
		"Ain't over till it's over.",
		"Until next time, then.",
		"Second star to the right.",
		"See you, space cowboy.",
		"Go get 'em, tiger. ",
		"Make it so.",
		"See you on the other side.",
		"Wait for the wheel.",
		"Do not throw your shot.",
		"Drop and burn 'em up.",
		"Exhibit no restraint.",
		"Rip and saw",
		"Code zero zero zero. Destruct. Zero.",
		"Authorization Alpha-Alpha 3-0-5.",
		"Have just the greatest day.",
		"Avenge me.",
		"Stay safe.",
		"Situation normal.",
		"PROTOCOL <3",
		"Fly, you fool.",
		"Never give up. Never surrender.",
		"In case of doubt, attack.",
		"You’re never beaten until you admit it.",
		"Wrong us, shall we not revenge?",
		"Till all are one.",
		"Nothing but the rain.",
		"Sometimes, you have to roll a hard six.",
		"And sometimes, when you fall, you fly.",
		"See you space cowboy...",
		"Just another day at the office.",
		"End of line.",
		"Fortune favors the bold.",
		"A leaf on the wind.",
		"You are who you choose to be.",
		"Always.",
		"Finish the fight.",
	];
	const rolledString =
		ejectMessages[Math.floor(Math.random() * ejectMessages.length)];
	onMounted(() => {
		useAnime({
			targets: ".title",
			opacity: [0, 1],
			easing: "easeInOutQuad",
			translateY: [-25, 0],
			duration: 500,
			//loop: true,
			autoplay: true,
			update: function (anim) {
				// Update text content during the animation
				const progress = Math.round(anim.progress);
				const curIndex = Math.floor((progress * rolledString.length) / 100);
				quote.value = rolledString.substring(0, curIndex);
			},
		});
	});

	watch(
		user,
		() => {
			if (user.value) {
				setTimeout(() => {
					return navigateTo("/dashboard");
				}, 500);
			}
		},
		{ immediate: true }
	);
</script>
<template>
	<div class="h-screen flex flex-col justify-center items-center">
		<div class="title text-3xl font-mono text-grey-200 text-center">
			{{ quote }}
		</div>
	</div>
</template>
