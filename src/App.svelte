<script>
  import { onMount } from 'svelte'
  import Screen from './lib/Screen.svelte'

  let isFullScreen = false

  function toggleFullScreen() {
    if (isFullScreen) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen().then(() => {
        window.screen.orientation.lock('landscape')
      })
    }
    isFullScreen = !isFullScreen
  }

</script>

<div class="app">
  <Screen />

  <button
    type="button"
    class="full-screen-button"
    on:click={toggleFullScreen}
    >Full screen</button>
</div>

<style>
  .app {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #222;
  }
  .full-screen-button {
    position: absolute;
    z-index: 10;
    top: 1rem;
    right: 1rem;
  }
</style>

