<script>
  import EdiTableCell from "./EdiTableCell.svelte";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import TableHeadCell from "./TableHeadCell.svelte";

  export let headers;
  export let persons;

  persons = persons.map((person, index) => ({ ...person, id: index }));
  let nextId = persons.length;

  headers = headers.map((header) => ({ ...header, sortDirection: null }));

  let itemsToAdd = headers.map((header) => {
    return { key: header.key, type: header.inputType, value: undefined };
  });

  const sortColumn = (attribute) => {
    console.log(attribute);
    persons = persons.sort((person1, person2) => {
      if (typeof person1[attribute] === "string") {
        return person1[attribute].localeCompare(person2[attribute]);
      }

      if (typeof person1[attribute] === "number") {
        return person1[attribute] - person2[attribute];
      }
    });
  };

  const handleValueChange = (event, personIndex, key) => {
    persons[personIndex][key] = event.detail.value;
  };

  const addItem = () => {
    const itemToAdd = {};
    itemsToAdd.forEach((item) => (itemToAdd[item.key] = item.value));
    itemToAdd.id = nextId;
    nextId++;
    persons = [...persons, itemToAdd];
  };

  const deleteItem = (index) => {
    persons.splice(index, 1);
    persons = [...persons];
  };
</script>

<table>
  <thead>
    <tr>
      {#each headers as headerConfig}
        <TableHeadCell
          on:click={() => sortColumn(headerConfig.key)}
          description={headerConfig.description}
          sortDirection={headerConfig.sortDirection}
        />
      {/each}
      <td />
    </tr>
  </thead>

  <tbody>
    {#each persons as person, index (person.id)}
      <tr in:fade animate:flip={{ duration: 200 }}>
        {#each Object.entries(person) as [key, value]}
          {#if key !== "id"}
            <EdiTableCell
              {value}
              on:valueChange={(event) => handleValueChange(event, index, key)}
            />
          {/if}
        {/each}

        <td
          ><button class="delete-button" on:click={() => deleteItem(index)}>
            <img
              class="delete-icon"
              src="assets/svgs/trash-alt.svg"
              alt="trash bean"
            />
          </button></td
        >
      </tr>
    {/each}

    <tr>
      {#each itemsToAdd as item}
        <td><input bind:value={item.value} /></td>
      {/each}

      <td
        ><button class="add-button" on:click={addItem}>
          <img class="add-icon" src="assets/svgs/plus.svg" alt="plus" />
        </button></td
      >
    </tr>
  </tbody>
</table>

<style>
  table {
    text-align: left;
    width: 50%;
    border-collapse: collapse;
  }

  thead {
    background-color: gray;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  td {
    padding: 0.2rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .delete-button {
    display: block;
    margin: auto;
  }

  .delete-icon {
    height: 1rem;
  }

  .add-button {
    display: block;
    margin: auto;
  }

  .add-icon {
    height: 1rem;
  }

  input {
    margin: 0;
  }
</style>
