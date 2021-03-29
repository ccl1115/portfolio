<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  let topButton: HTMLElement;

  let main: HTMLElement;
  let header: HTMLElement;
  let html: HTMLElement;

  let preTop = 0;

  let iconSrc = "./assets/menu.png";

  let title: string = "simon's portfolio";
  let subtitle: string = "禹璐的简历";

  function toTop() {
    gsap.to(html, { scrollTop: 0 });
  }

  function onScroll(event: any) {
    const top = event.target.documentElement.scrollTop;
    const d = top - preTop;
    if (d > 0) {
      gsap.to(header, { y: -header.clientHeight });
      gsap.to(topButton, { scale: 1 });
    } else if (d < 0) {
      gsap.to(header, { y: 0, scale: 1, duration: 0.5 });
    }
    if (top < 100) {
      gsap.to(topButton, { scale: 0 });
    }
    preTop = top;
  }

  onMount(() => {
    html = document.documentElement;
    gsap.config({ force3D: true });
    document.addEventListener("scroll", onScroll);
    gsap.set(topButton, { scale: 0 });
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });
</script>

<main class="h-full relative superman">
  <div
    bind:this={header}
    id="header"
    class="purple80 text-gray-100 fixed top-0 w-full z-10 shadow-lg lg:flex lg:flex-row items-center"
  >
    <div class="grid grid-cols-6 gap-0 h-30 pt-5 pb-5 lg:w-1/2">
      <div class="col-span-1 flex flex-row items-end justify-end" />
      <div class="col-start-2 col-span-4 flex flex-col items-start px-5">
        <p class="text-lg text-gray-100">{title}</p>
        <p class="text-sm text-gray-300">{subtitle}</p>
      </div>
    </div>
    <div class="flex flex-row justify-end mx-10 mb-1 gap-x-5 text-sm lg:w-1/2">
      <a class="p-2 rounded-lg hover:text-gray-800 hover:bg-white hover:shadow-md transition-all" href="https://blog.bbsimonyu.com">BLOG</a>
      <a class="p-2 rounded-lg hover:text-gray-800 hover:bg-white hover:shadow-md transition-all"href="https://github.com/ccl1115">@GITHUB</a>
    </div>
  </div>

  <button
    bind:this={topButton}
    on:click={toTop}
    id="top-button"
    class="fixed z-20 top-7 left-4 rounded-full shadow-lg border-white border-2 w-10 h-10 p-2 purple80"
  >
    <img src={iconSrc} alt="top" class="w-6 h-6" />
  </button>

  <div bind:this={main} class="pt-20">
    <slot />
  </div>
</main>

<style global lang="postcss">
  * {
    outline: none;
  }

  @media print {
    #header {
      position: static;
    }
    #footer {
      display: none;
    }
    #top-button {
      display: none;
    }
  }

  .purple80 {
    background: #41295a; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2f0743,
      #41295a
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2f0743,
      #41295a
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .superman {
    background: #0099f7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #f11712,
      #0099f7
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #f11712,
      #0099f7
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .block {
    @apply grid grid-cols-3 gap-x-5 gap-y-5 mx-10 mt-2 mb-10;
  }

  .block2 {
    @apply grid grid-cols-2 gap-x-5 gap-y-5 mx-10 mt-2 mb-10;
  }
</style>
