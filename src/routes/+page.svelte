<script>
  import Icon from '@iconify/svelte';
  import { beforeUpdate } from 'svelte';

  export let data;
  let selectedType = 'all';

  $: dates = Object.keys(data.dateObjectOf2023);

  $: eventObject = data.eventObject;
  $: expandedEvents = Object.values(eventObject)
    .flat()
    .filter((event) => selectedType === 'all' || event.type === selectedType);

  $: TYPES = data.TYPES;
</script>

<div>
  <main>
    {#each dates as date}
      <div class="block" title={date}>
        {#if eventObject[date]}
          {#each eventObject[date] as { icon, description, type }}
            {#if selectedType === 'all'}
              <div class="square" on:click={() => (expandedEvents = eventObject[date])} />
            {:else if type === selectedType}
              <div
                class="icon"
                on:click={() =>
                  (expandedEvents = eventObject[date].filter(
                    (event) => event.type === selectedType
                  ))}
              >
                <Icon {icon} width="18" height="18" />
              </div>
            {/if}
          {/each}
        {/if}
      </div>
    {/each}
  </main>

  <div class="radio-container">
    <div class="radio">
      <input type="radio" bind:group={selectedType} name="type" id="all" value="all" />
      <label for="all">All</label>
    </div>
    {#each TYPES as type}
      <div class="radio">
        <input type="radio" bind:group={selectedType} name="type" id={type} value={type} />
        <label for={type}>{type}</label>
      </div>
    {/each}
  </div>

  <div class="expand">
    {#each expandedEvents as { type, description, icon, date }}
      <div class="expand-event">
        <div class="date">{date}</div>
        <div class="hashtag">#{type}</div>
        <div class="description">
          <Icon {icon} width="16" height="16" />
          <div>{description}</div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  :global(body) {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
  }

  main {
    width: 1060px;
    display: grid;
    grid-template-rows: repeat(7, 18px);
    grid-template-columns: repeat(auto-fill, 18px);
    grid-auto-flow: column;
    margin-right: 20px;
    gap: 2px;
  }

  .block {
    background-color: #ebedf0;
  }
  .block > .icon {
    position: absolute;
    cursor: pointer;
  }
  .block > .square {
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: rgb(42 185 87 / 30%);
    cursor: pointer;
  }

  .radio-container {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  .radio > label {
    display: block;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    padding: 6px;
    line-height: 1;
    cursor: pointer;
  }
  .radio > input[type='radio'] {
    /* Override default styles */
    appearance: none;
    margin: 0;
  }
  .radio > input[type='radio']:checked + label {
    border: 1px solid rgb(40, 138, 66);
  }

  .expand-event {
    margin: 10px;
  }

  .expand-event > .date {
    font-size: 12px;
    color: #536471;
  }

  .expand-event > .hashtag {
    font-size: 12px;
    color: rgb(40, 138, 66);
  }

  .expand-event > .description {
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>
