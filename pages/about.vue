<template>
	<div class="container pl-10 pt-10">
		<h1 class="text-3xl font-bold underline">
			{{ computedProperties }}
		</h1>
		<br />
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			@click="startCounting">
			Start counting</button
		><br /><br />
		Start counting {{ count }}
		<div
			class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
			<div>
				<span
					class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
					<svg
						class="h-6 w-6 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true">
						<!-- ... -->
					</svg>
				</span>
			</div>
			<h3
				class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
				Writes Upside-Down
			</h3>
			<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
				The Zero Gravity Pen can be used to write in any orientation, including
				upside-down. It even works in outer space.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue';

	const message = ref('');
	const count = ref(0);
	const computedProperties = computed(() => (message.value = 'reja'));

	const startCounting = () => {
		return count.value++;
	};
</script>

<style scoped></style>
