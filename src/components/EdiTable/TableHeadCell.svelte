<script>
  export let description;
  export let sortDirection;
</script>

<th>
  {description}
  {#if sortDirection === "asc"}
    <img src="assets/svgs/arrow-up.svg" alt="Arrow up" />
  {:else if sortDirection === "desc"}
    <img src="assets/svgs/arrow-down.svg" alt="Arrow up" />
  {/if}
</th>

<style>
  th {
    cursor: pointer;
    padding: 0.3rem;
    border: none;
  }

  th img {
    height: 1rem;
  }
</style>
