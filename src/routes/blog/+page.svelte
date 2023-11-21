<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="text-3xl font-bold mb-4 font-rubik">Blog</h1>

<div class="grid grid-cols-4 gap-8">
  {#each data.props.mdFiles as blogEntry}
    <div class="bg-white rounded-lg shadow-lg p-6">
      {blogEntry.content}
    </div>
  {/each}
</div>
