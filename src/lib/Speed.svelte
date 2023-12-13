<script>

  export let speed = 0
  
  const max = 193
  const bars = 10

  $: bar = Math.floor(max / bars)

</script>

<div class="speed">
  <div class="bars">
    {#each Array.from({ length: bars }) as _, i}
      <div class="bar bar-{Math.max(1, i - 3)}" class:active={speed > bar * (i + 1)} />
    {/each}
  </div>
  <div class="kmh">{speed.toFixed(0)} Kmh</div>
</div>

<style>
  .speed {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 4px;
    height: 22px;
  }
  .kmh {
    font-weight: bold;
  }
  .bars {
    display: flex;
    gap: 2px;
    height: 100%;
    align-items: flex-end;
  }
  .bar {
    width: 7px;
    background-color: #a8a8a8;
    box-shadow: 1px 1px 0px #373737;
    border: 1px solid #000;
    box-sizing: border-box;
  }
  .bar-1 {
    height: 50%;

    &.active {
      background-color: rgb(15, 223, 15);
    }
  }
  .bar-2 {
    height: 60%;

    &.active {
      background-color: rgb(199, 223, 15);
    }
  }
  .bar-3 {
    height: 70%;

    &.active {
      background-color: rgb(223, 206, 15);
    }
  }
  .bar-4 {
    height: 80%;

    &.active {
      background-color: rgb(223, 168, 15);
    }
  }
  .bar-5 {
    height: 90%;

    &.active {
      background-color: rgb(223, 123, 15);
    }
  }
  .bar-6 {
    height: 100%;

    &.active {
      background-color: rgb(223, 70, 15);
    }
  }
</style>