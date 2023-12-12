<script>

  import { orientation } from './services'
  import Game from './Game.svelte'

  let beta = 0
  let keyLeft = false
  let keyRight = false
  let keyFaster = false
  let keySlower = false
  let angleThreshold = 7

  $: updateOrientation($orientation)

  function updateOrientation(orientation) {
    if (orientation) {
      beta = orientation.beta
      keyLeft = orientation.beta > angleThreshold
      keyRight = orientation.beta < -angleThreshold
    }
  }

</script>

<div class="screen-frame">
  <div class="screen" style="transform: rotate({beta}deg);">
    <Game
      {keyLeft}
      {keyRight}
      {keyFaster}
      {keySlower}
    />
  </div>
  <button
    type="button"
    class="ctrl-btn brake-btn"
    on:pointerdown={() => keySlower = true}
    on:pointerup={() => keySlower = false}
    />
  <button
    type="button"
    class="ctrl-btn accelerator-btn"
    on:pointerdown={() => keyFaster = true}
    on:pointerup={() => keyFaster = false}
    />
</div>

<style>

  .screen-frame {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #222;
    overflow: hidden;
  }

  .screen {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .ctrl-btn {
    position: absolute;
    z-index: 10;
    top: 0;
    width: 10rem;
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.189);

    &:active {
      background-color: rgba(255, 255, 255, 0.389);
    }
  }

  .brake-btn {
    left: 0;
  }
  .accelerator-btn {
    right: 0;
  }

</style>
