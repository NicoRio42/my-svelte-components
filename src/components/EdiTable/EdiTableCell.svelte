<script>
  import { clickOutside } from "../../utils/clickOutside";
  import { createEventDispatcher } from "svelte";

  export let value;
  let isInEditionMode = false;

  const dispatch = createEventDispatcher();

  function handleValueChange() {
    dispatch("valueChange", {
      value: value,
    });
  }

  const toogleEdition = () => {
    isInEditionMode = !isInEditionMode;
  };
</script>

<td>
  {#if isInEditionMode}
    <input
      use:clickOutside
      bind:value
      on:input={() => handleValueChange()}
      on:clickOutside={toogleEdition}
      autofocus="autofocus"
    />
  {:else}
    <p on:click={toogleEdition}>{value}</p>
  {/if}
</td>

<style>
  td {
    cursor: text;
  }

  td:hover {
    background-color: lightgrey;
  }
</style>
