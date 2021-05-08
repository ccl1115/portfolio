<script lang="ts">
  import { tweened } from "svelte/motion";
  import { circOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { zhCH } from "../data/data";
  import gsap from "gsap";

  import section from "../stores/section";

  let index = 0;
  let text = "Geek in the pick";

  let fixed = false;
  let preTop = 0;

  let bannerHeight: number;
  let headerHeight: number;

  let html: HTMLElement;
  let header: HTMLElement;

  let translate = tweened(0, { easing: circOut });
  function setIndex(i: number) {
    index = i;
    translate.set(-i * 15);
    text = zhCH.banner.portraits[index].text;
  }

  function scroll() {
    gsap.to(html, { scrollTop: bannerHeight + headerHeight + headerHeight });
  }

  function onScroll(event) {
    const top = event.target.documentElement.scrollTop;
    if (top - preTop > 0) {
      gsap.to(header, { y: -headerHeight });
    } else {
      gsap.to(header, { y: 0 });
    }
    if (top > bannerHeight) {
      fixed = true;
    } else {
      fixed = false;
    }
    preTop = top;
  }

  onMount(() => {
    html = document.documentElement;
    document.addEventListener("scroll", onScroll);
    const interval = setInterval(() => {
      index += 1;
      if (index > 3) {
        index = 0;
      }
      setIndex(index);
    }, 3000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("scroll", onScroll);
    };
  });
</script>

<div class="absolute top-0 w-full flex flex-col h-screen">
  <div
    class="bg-white text-gray-900 lg:flex lg:flex-row items-center h-1/12 fixed z-20 w-full"
    bind:this={header}
    bind:clientHeight={headerHeight}
  >
    <div class="flex flex-row items-center lg:w-1/2 h-full ml-12">
      <div class="col-start-2 col-span-4 flex flex-col items-start px-5">
        <p class="text-lg text-gray-900">{zhCH.header.title}</p>
        <p class="text-sm text-gray-500">{zhCH.header.subtitle}</p>
      </div>
    </div>
    <div
      id="links"
      class="hidden lg:flex flex-row justify-end mx-10 mb-1 gap-x-5 text-sm lg:w-1/2"
    >
      {#each zhCH.header.links as item}
        <a
          class="p-2 rounded-lg hover:text-gray-800 hover:bg-gray-100 hover:shadow-md transition-all"
          href={item.link}>{item.text}</a
        >
      {/each}
    </div>
  </div>

  <div
    class="bg-gray-200 flex flex-col items-center justify-center h-10/12"
    bind:clientHeight={bannerHeight}
  >
    <p class="text-black p-4">{zhCH.banner.description}</p>
    <div class="p-1 rounded-full bg-white">
      <div class="flex flex-col items-center">
        <div
          class="w-60 h-60 flex flex-row rounded-full bg-white overflow-hidden"
        >
          <img
            class="w-60 h-60"
            alt="portrait"
            style="transform: translateX({$translate}rem);"
            src="./assets/portrait.png"
          />
          <img
            class="w-60 h-60"
            style="transform: translateX({$translate}rem);"
            alt="portrait"
            src="./assets/portrait-android.jpeg"
          />
          <img
            class="w-60 h-60"
            style="transform: translateX({$translate}rem);"
            alt="portrait"
            src="./assets/portrait-fe.jpeg"
          />
          <img
            class="w-60 h-60"
            style="transform: translateX({$translate}rem);"
            alt="portrait"
            src="./assets/portrait-wheel.jpeg"
          />
        </div>
      </div>
    </div>
    <p class="m-10 text-black text-2xl">{text}</p>
    <div class="flex flow-col">
      <div
        class="w-2 h-4 m-1 rounded-full bg-black transition-all"
        class:w-4={index == 0}
        on:click={() => setIndex(0)}
      />
      <div
        class="w-2 h-4 m-1 rounded-full bg-black transition-all"
        class:w-4={index == 1}
        on:click={() => setIndex(1)}
      />
      <div
        class="w-2 h-4 m-1 rounded-full bg-black transition-all"
        class:w-4={index == 2}
        on:click={() => setIndex(2)}
      />
      <div
        class="w-2 h-4 m-1 rounded-full bg-black transition-all"
        class:w-4={index == 3}
        on:click={() => setIndex(3)}
      />
    </div>
  </div>

  <div
    class="flex flex-col items-center justify-center bg-white w-full h-1/12 z-10"
    class:fixed
    class:top-0={fixed}
  >
    {#if fixed}
      <div
        transition:fade={{ delay: 200 }}
        class="flex flex-row gap-x-10 my-4 absolute"
      >
        <button on:click={() => section.set("languages")}
          >{zhCH.banner.menu.languages}</button
        >
        <button on:click={() => section.set("platforms")}
          >{zhCH.banner.menu.platforms}</button
        >
        <button on:click={() => section.set("projects")}
          >{zhCH.banner.menu.projects}</button
        >
        <button on:click={() => section.set("tools")}
          >{zhCH.banner.menu.tools}</button
        >
      </div>
    {:else}
      <div
        transition:fade={{ delay: 200 }}
        class="flex flex-row gap-x-10 absolute"
      >
        <button on:click={scroll}>{zhCH.banner.more}</button>
      </div>
    {/if}
  </div>
</div>

<style>
  @media print {
    #links {
      display: none;
    }
  }
</style>
