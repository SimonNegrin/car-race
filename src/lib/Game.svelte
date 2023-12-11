<script>

  import { orientation } from './services'

  let beta = 0

  $: updateOrientation($orientation)

  function updateOrientation(orientation) {
    if (orientation) {
      beta = orientation.beta
    }
  }

</script>

<div class="game" style="transform: rotate({beta}deg);">
</div>

<style>

  .game {
    padding: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: brown;
  }

</style>
