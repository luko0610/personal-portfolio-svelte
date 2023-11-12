<script lang="ts">
  const projects = [
    {
      name: "Personal portfolio page",
      description:
        "This page is my personal portfolio page built with svelte and tailwind.",
    },
  ];
</script>

<h1 class="text-3xl font-bold mb-4 font-rubik">Projects</h1>

<div class="grid grid-cols-4 gap-8">
  {#each projects as project}
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-lg font-bold mb-2">{project.name}</h2>
      <p class="text-gray-700">{project.description}</p>
    </div>
  {/each}
</div>
