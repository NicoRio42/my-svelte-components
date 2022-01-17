<script>
  import { matchNames } from "./matchNames";
  import { createEventDispatcher } from "svelte";

  export let nameToBeAttributedList;
  export let nameToAttributeList;

  let attributions = matchNames(nameToBeAttributedList, nameToAttributeList);
  const firstAttributions = [...attributions];

  const dispatch = createEventDispatcher();

  const handleMatchSubmit = () => {
    dispatch("nameAttribution", {
      value: attributions,
    });
  };
</script>

<h2>Not detected</h2>

<ul>
  {#each nameToBeAttributedList as nameToBeAttributed, index}
    {#if firstAttributions[index][1] === null}
      <li>
        <span>{nameToBeAttributed.firstName} {nameToBeAttributed.lastName}</span
        >
        <span
          ><select
            bind:value={attributions[index][1]}
            id={nameToBeAttributed.id}
          >
            {#each nameToAttributeList as nameToAttribute}
              <option value={nameToAttribute.id}
                >{nameToAttribute.firstName} {nameToAttribute.lastName}</option
              >
            {/each}
          </select></span
        >
      </li>
    {/if}
  {/each}
</ul>

<h2>Detected</h2>

<ul>
  {#each nameToBeAttributedList as nameToBeAttributed, index}
    {#if firstAttributions[index][1] !== null}
      <li>
        <span>{nameToBeAttributed.firstName} {nameToBeAttributed.lastName}</span
        >
        <span
          ><select
            bind:value={attributions[index][1]}
            id={nameToBeAttributed.id}
          >
            {#each nameToAttributeList as nameToAttribute}
              <option value={nameToAttribute.id}
                >{nameToAttribute.firstName} {nameToAttribute.lastName}</option
              >
            {/each}
          </select></span
        >
      </li>
    {/if}
  {/each}
</ul>

<button on:click={handleMatchSubmit}>Submit names match</button>

<style>
  ul {
    list-style: none;
  }
</style>
