<script lang="ts">
  import "../../static/tailwind.css";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  let topButton: HTMLElement;

  let main: HTMLElement;
  let html: HTMLElement;

  let preTop = 0;

  let iconSrc = "./assets/menu.png";

  let title: string = "simon's portfolio";
  let subtitle: string = "";

  function toTop() {
    gsap.to(html, { scrollTop: 0 });
  }

  function onScroll(event: any) {
    const top = event.target.documentElement.scrollTop;
    const d = top - preTop;
    if (d > 0) {
      gsap.to(topButton, { scale: 1 });
    } else if (d < 0) {
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

<svelte:head>
  <title>Simon Portfolio</title>
</svelte:head>

<main class="h-full relative superman">
  <div id="header" class="z-20 w-full">
    <Header />
  </div>
  <button
    bind:this={topButton}
    on:click={toTop}
    id="top-button"
    class="fixed z-20 top-3 left-4 rounded-full shadow-lg border-white border-2 w-10 h-10 p-2 purple80"
  >
    <img src={iconSrc} alt="top" class="w-6 h-6" />
  </button>

  <div bind:this={main} style="padding-top: 120vh">
    <slot />
  </div>
  <div
    id="footer"
    class="py-10 lg:mx-5 rounded-t-sm lg:mb-20 bg-white text-gray-800 text-center shadow-lg"
  >
    <Footer />
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  * {
    outline: 0 !important;
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
    background: white;
  }

  .superman {
    background-image: linear-gradient(
      94.3deg,
      rgba(26, 33, 64, 1) 10.9%,
      rgba(81, 84, 115, 1) 87.1%
    );
  }

  .block {
    @apply grid grid-cols-3 gap-x-5 gap-y-5 mx-10 mt-2 mb-10;
  }

  .block2 {
    @apply grid grid-cols-2 gap-x-5 gap-y-5 mx-10 mt-2 mb-10;
  }
</style>
