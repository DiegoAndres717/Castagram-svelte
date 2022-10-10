<script>
  import Card from "./Card.svelte";
  export let posts = [];
</script>

<div class="TimeLine">
  <div class="TimeLine-container">
    {#each posts as post}
      <Card {...post} />
    {:else}
      <p>Loading...</p>
    {/each}
  </div>
</div>

<style>
  .TimeLine {
    padding: 4em 0 0 0;
  }
</style>
