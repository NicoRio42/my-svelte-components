<script>
  import EdiTable from "./components/EdiTable/EdiTable.svelte";
  import MultiSlider from "./components/MultiSlider/MultiSlider.svelte";
  import Dialog from "./components/Dialog/Dialog.svelte";
  import NameMatcher from "./components/NameMatcher/NameMatcher.svelte";
  import {
    nameToBeAttributedList,
    nameToAttributeList,
  } from "./components/NameMatcher/mockNameList";

  let headers = [
    { key: "firstName", description: "First name", inputType: "text" },
    { key: "lastName", description: "Last name", inputType: "text" },
    { key: "age", description: "Age", inputType: "number" },
  ];

  let persons = [
    { firstName: "Nicolas", lastName: "Rio", age: 26 },
    { firstName: "Emilie", lastName: "Back", age: 28 },
    { firstName: "Jeami", lastName: "Rio", age: 26 },
  ];

  let isDialogOpen = false;
</script>

<main>
  <MultiSlider />

  <EdiTable {headers} {persons} />

  <button on:click={() => (isDialogOpen = true)}>Open the dialog</button>

  {#if isDialogOpen}
    <Dialog on:closeDialog={() => (isDialogOpen = false)}>
      <NameMatcher
        on:nameAttribution={(event) => console.log(event.detail.value)}
        {nameToBeAttributedList}
        {nameToAttributeList}
      />
    </Dialog>
  {/if}
</main>

<style>
</style>
