<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import Intro from "./components/Intro.svelte";
  import Languages from "./components/Languages.svelte";
  import Platforms from "./components/Platforms.svelte";
  import Projects from "./components/Projects.svelte";
  import Tools from "./components/Tools.svelte";

  let languages: HTMLElement;
  let platforms: HTMLElement;
  let projects: HTMLElement;
  let tools: HTMLElement;

  let main: HTMLElement;
  let header: HTMLElement;
  let html: HTMLElement;

  let preTop = 0;
  let offsetTop = 0;

  let iconSrc = "./assets/home.png";

  let title: string = "simon's portfolio";
  let subtitle: string = "禹璐的简历";

  function toLanguages() {
    gsap.to(html, { scrollTop: languages.offsetTop });
  }

  function toPlatforms() {
    gsap.to(html, { scrollTop: platforms.offsetTop });
  }

  function toProjects() {
    gsap.to(html, { scrollTop: projects.offsetTop });
  }

  function toTools() {
    gsap.to(html, { scrollTop: tools.offsetTop });
  }

  function toTop() {
    gsap.to(html, { scrollTop: 0 });
  }

  function onScroll(event: any) {
    const top = event.target.documentElement.scrollTop;
    const d = top - preTop;
    if (d > 0) {
      gsap.to(header, { y: -header.clientHeight, scale: 0.5 });
    } else if (d < 0) {
      gsap.to(header, { y: 0, scale: 1, duration: 0.5, ease: "easeOut" });
    }
    preTop = top;
    scrollFadeIn(top, languages);
    scrollFadeIn(top, projects);
    scrollFadeIn(top, tools);
    scrollFadeIn(top, platforms);
  }

  function scrollFadeIn(top: number, el: HTMLElement) {
    if (top + html.clientHeight / 2 + 100 > el.offsetTop) {
      gsap.set(el, {
        opacity: (top + html.clientHeight / 2 - el.offsetTop) / 300,
      });
    }
  }

  onMount(() => {
    html = document.documentElement;
    gsap.config({ force3D: true });
    document.addEventListener("scroll", onScroll);
    gsap.set(languages, { opacity: 0 });
    gsap.set(projects, { opacity: 0 });
    gsap.set(platforms, { opacity: 0 });
    gsap.set(tools, { opacity: 0 });
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });
</script>

<main class="m-0 p-0 h-full">
  <div
    bind:this={header}
    id="header"
    class="bg-gray-600 text-gray-100 fixed top-0 w-full z-10"
  >
    <div class="grid grid-cols-6 gap-0 h-30 pt-5 pb-5">
      <div class="col-span-1 flex flex-row items-end justify-end">
        <img
          class="w-6 h-6 hover:bg-gray-600"
          alt="top"
          src={iconSrc}
          on:click={toTop}
        />
      </div>
      <div class="col-span-5 flex flex-col items-start mx-10">
        <p class="text-lg text-gray-100">{title}</p>
        <p class="text-sm text-gray-300">{subtitle}</p>
      </div>
    </div>
  </div>

  <div bind:this={main}>
    <Intro {toLanguages} {toPlatforms} {toProjects} {toTools} />

    <div
      bind:this={languages}
      id="languages"
      class="bg-gray-800 text-gray-100 py-20"
    >
      <Languages />
    </div>

    <div
      bind:this={platforms}
      id="platforms"
      class="bg-white text-gray-800 py-20"
    >
      <Platforms />
    </div>

    <div
      bind:this={projects}
      id="projects"
      class="bg-gray-800 text-gray-100 py-20"
    >
      <Projects />
    </div>

    <div bind:this={tools} id="tools" class="bg-white text-gray-800 py-20">
      <Tools />
    </div>
    <div class="my-20 text-gray-500 text-center">
      <p>© 2021 all rights reversed by Simon Yu</p>
      <p class="text-xs">
        This portfolio is written using <a
          class="text-blue-700"
          href="https://www.typescriptlang.org">TypeScript</a
        >
        and <a class="text-blue-700" href="https://svelte.dev">Svelte</a>
      </p>
    </div>
  </div>
</main>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

  @media print {
    #header div {
      position: static;
    }
  }

  .block {
    @apply grid grid-cols-3 gap-x-5 lg:gap-x-20 gap-y-10 mx-10 lg:mx-20 mt-5 mb-40;
  }

  .block2 {
    @apply grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-20 gap-y-10 mx-10 lg:mx-20 mt-5 mb-40;
  }
</style>
