<script>
  export let icon;
  export let text;
</script>

<div class="flex flex-row justify-end">
  <div class="flex flex-col items-center justify-center">
    {#if text}
      <img class="w-10 h-10 m-2" src={icon} alt={text} />
      <p class="text-sm text-black p-2">{text}</p>
    {:else}
      <img
        class="object-cover h-12 w-30 rounded-lg shadow-lg"
        src={icon}
        alt={text}
      />
    {/if}
  </div>
</div>
