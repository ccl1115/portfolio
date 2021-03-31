<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="grid grid-cols-6 gap-0 h-30 pt-5 pb-5 lg:w-1/2">
  <div class="col-span-1 flex flex-row items-end justify-end" />
  <div class="col-start-2 col-span-4 flex flex-col items-start px-5">
    <p class="text-lg text-gray-100">{title}</p>
    <p class="text-sm text-gray-300">{subtitle}</p>
  </div>
</div>
<div id="links" class="flex flex-row justify-end mx-10 mb-1 gap-x-5 text-sm lg:w-1/2">
  <a
    class="p-2 rounded-lg hover:text-gray-800 hover:bg-white hover:shadow-md transition-all"
    href="https://blog.bbsimonyu.com">BLOG</a
  >
  <a
    class="p-2 rounded-lg hover:text-gray-800 hover:bg-white hover:shadow-md transition-all"
    href="https://github.com/ccl1115">@GITHUB</a
  >
</div>

<style>
  @media print {
    #links {
      display: none;
    }
  }
</style>
