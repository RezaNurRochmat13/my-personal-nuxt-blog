<template>
  <div class="container">
    <h1 class="text-3xl font-bold underline">
      {{ computedProperties }}
    </h1>
    <br />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="startCounting"
    >
      Start counting</button
    ><br /><br />
    Start counting {{ count }}
    <div
      class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    >
      <div>
        <span
          class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
      <h3
        class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
      >
        Writes Upside-Down
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>
    <br />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="awesome = !awesome"
    >
      Toggle
    </button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <br />

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in persons">
          <td>{{ person.id }}</td>
          <td>{{ person.name }}</td>
          <td>{{ person.address }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Responsive design -->
    <div
      class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
    >
      <div class="md:flex">
        <div class="md:shrink-0">
          <NuxtImg
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg"
            alt="Modern building architecture"
          />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            Company retreats
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Incredible accommodation for your team</a
          >
          <p class="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const awesome = ref(true);
const message = ref("");
const count = ref(0);
const computedProperties = computed(() => (message.value = "reja"));
const persons = ref([
  { id: 1, name: "Test A", address: "California" },
  { id: 2, name: "Test B", address: "California" },
  { id: 3, name: "Test C", address: "California" },
  { id: 4, name: "Test D", address: "California" },
  { id: 5, name: "Test E", address: "California" },
]);

const startCounting = () => {
  return count.value++;
};
</script>

<style scoped></style>
