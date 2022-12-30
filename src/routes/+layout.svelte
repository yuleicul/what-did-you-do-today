<script>
  import Icon from '@iconify/svelte';
  export let data;
</script>

<div>
  <aside>
    {#each data.typeTree as { name, icon, children } (name)}
      <details>
        <summary>
          <Icon {icon} width="24" height="24" />
          <span>{name}</span>
        </summary>
        <div>
          {#each children as { name, icon } (name)}
            <div>
              <Icon {icon} width="24" height="24" />
              <span>{name}</span>
            </div>
          {/each}
        </div>
      </details>
    {/each}
  </aside>

  <main>
    <slot />
  </main>
</div>
