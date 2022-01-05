<script lang="ts">
  export let icon: string;
  export let className: string = "";
  export let width: string = "w-20";
  export let height: string = "h-10";
</script>

<div
  class="rounded-lg shadow-lg overflow-hidden {width ? width : 'w-20'} {height
    ? height
    : 'h-10'} {className}"
>
  <img
    class="object-cover {width ? width : 'w-full'} {height ? height : 'h-10'}"
    src={icon}
    alt="icon"
  />
</div>
