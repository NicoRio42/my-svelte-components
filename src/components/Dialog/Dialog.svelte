<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  import { clickOutside } from "../../utils/clickOutside";

  const dispatch = createEventDispatcher();

  const closeDialog = () => {
    dispatch("closeDialog");
  };
</script>

<div transition:fly class="modal">
  <div use:clickOutside on:clickOutside={closeDialog} class="modal-content">
    <span on:click={closeDialog} class="close">&times;</span>
    <slot />
  </div>
</div>

<style>
  .modal {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
</style>
