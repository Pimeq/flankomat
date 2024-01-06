<script setup lang="ts">
	import type { IEvents } from "@/types/events";

	definePageMeta({
		layout: "dashboard",
	});

	const user = useSupabaseUser();
	const date = new Date();

	const attrs = ref([
		{
			key: "today",
			highlight: true,
			dates: [new Date()],
			customData: {
				foo: "bar",
			},
		},
	]);

	const { pending: eventsPending, data: eventsData } = useLazyFetch<IEvents>(
		"/api/team/fetchOtherTeams"
	);

	//TODO:
	// - Get the events from the endpoint
	// - Display them on the calendar
	// - Add a button to add an event
	// - Add a button to delete an event
	// - Add a button to edit an event
	// - Add a button to view an event
</script>
<template>
	<div>
		<h1 class="text-3xl font-bold">Events</h1>

		{{ eventsData }}

		<ClientOnly>
			<div class="flex p-10 justify-center">
				<div class="flex w-1/2">
					<VCalendar
						v-model="date"
						:attributes="attrs"
						mode="dateTime"
						is-dark="system"
						expanded
					></VCalendar>
				</div>
			</div>
		</ClientOnly>
	</div>
</template>
