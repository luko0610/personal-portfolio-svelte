<script lang="ts">
  const projects = [
    {
      name: "Personal portfolio page",
      description:
        "This page is my personal portfolio page built with svelte and tailwind.",
      link: "https://github.com/luko0610/personal-portfolio-svelte",
    },
  ];
</script>

<h1 class="text-3xl font-bold mb-4 font-rubik">Projects</h1>

<div class="grid grid-cols-4 gap-8">
  {#each projects as project}
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-lg font-bold mb-2">{project.name}</h2>
      <p class="text-gray-700">{project.description}</p>
      {#if project.link}
        <a
          href={project.link}
          target="_blank"
          class="text-orange-600 hover:text-orange-800 mt-2 block"
        >
          View on Github
        </a>
      {/if}
    </div>
  {/each}
</div>
