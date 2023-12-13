<script>
  import Screen from './lib/Screen.svelte'

  let isFullScreen = false

  async function toggleFullScreen() {
    if (isFullScreen) {
      await document.exitFullscreen()
    } else {
      await document.documentElement.requestFullscreen()
      // @ts-ignore
      window.screen.orientation.lock('landscape-secondary')
    }
    isFullScreen = !isFullScreen
  }

  function onFullScreenChange() {
    isFullScreen = !!document.fullscreenElement
  }

</script>

<svelte:window on:fullscreenchange={onFullScreenChange} />

<div class="app">
  {#if isFullScreen}  
    <Screen />
  {:else}
    <div class="require-full-screen">
      <p class="full-screen-text">Este juego requiere pantalla completa. Haz click aquí para activar.</p>
      <button
        type="button"
        class="full-screen-button"
        on:click={toggleFullScreen}
        >Pantalla completa</button>
    </div>
  {/if}
</div>

<style>
  .app {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #222;
  }
  .require-full-screen {
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #ccc;
  }
  .full-screen-text {
    text-align: center;
    max-width: 330px;
  }
</style>

