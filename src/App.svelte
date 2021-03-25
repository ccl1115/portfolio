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
  let topButton: HTMLElement;

  let main: HTMLElement;
  let header: HTMLElement;
  let html: HTMLElement;

  let preTop = 0;

  let iconSrc = "./assets/menu.png";

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
      gsap.to(topButton, { scale: 1 });
    } else if (d < 0) {
      gsap.to(header, { y: 0, scale: 1, duration: 0.5 });
    }
    if (top < 100) {
      gsap.to(topButton, { scale: 0 });
    }
    preTop = top;
    scrollFadeIn(top, languages);
    scrollFadeIn(top, projects);
    scrollFadeIn(top, tools);
    scrollFadeIn(top, platforms);
  }

  function scrollFadeIn(top: number, el: HTMLElement) {
    if (top + html.clientHeight / 2 + 500 > el.offsetTop) {
      const a = (top + html.clientHeight / 2 - el.offsetTop) / 300;
      gsap.set(el, {
        opacity: a,
        y: Math.max(0, (1 - a) * 400),
      });
    }
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
    class="purple80 text-gray-100 fixed top-0 w-full z-10 shadow-lg"
  >
    <div class="grid grid-cols-6 gap-0 h-30 pt-5 pb-5">
      <div class="col-span-1 flex flex-row items-end justify-end" />
      <div class="col-span-5 flex flex-col items-start mx-10">
        <p class="text-lg text-gray-100">{title}</p>
        <p class="text-sm text-gray-300">{subtitle}</p>
      </div>
    </div>
  </div>

  <button
    bind:this={topButton}
    on:click={toTop}
    id="top-button"
    class="fixed z-20 top-7 left-8 rounded-full shadow-lg border-white border-2 w-10 h-10 p-2 purple80"
  >
    <img src={iconSrc} alt="top" class="w-6 h-6" />
  </button>

  <div bind:this={main} class="pt-20">
    <Intro {toLanguages} {toPlatforms} {toProjects} {toTools} />

    <div bind:this={languages} id="languages" class="text-gray-100 py-20">
      <Languages />
    </div>

    <div bind:this={platforms} id="platforms" class="text-gray-100 py-20">
      <Platforms />
    </div>

    <div bind:this={projects} id="projects" class="text-gray-100 py-20">
      <Projects />
    </div>

    <div bind:this={tools} id="tools" class="text-gray-100 py-20">
      <Tools />
    </div>
    <div
      id="footer"
      class="py-10 lg:mx-5 rounded-t-sm lg:mb-20 bg-white text-gray-800 text-center shadow-lg"
    >
      <div class="grid sm:grid-cols-1 lg:grid-cols-3">
        <p class="lg:col-span-3 sm:pb-0 lg:pb-10 lg:text-lg">
          © 2021 all rights reversed by Simon Yu
        </p>
        <p class="text-xs">
          <a
            target="blank"
            class="text-blue-700"
            href="https://github.com/ccl1115/portfolio">Source code</a
          > of this site
        </p>
        <p class="text-xs">
          This portfolio is written using <a
            class="text-blue-700"
            href="https://www.typescriptlang.org">TypeScript</a
          >
          and <a class="text-blue-700" href="https://svelte.dev">Svelte</a>
        </p>
        <p class="text-xs">
          <a class="text-blue-700" href="https://greensock.com/gsap">GSAP</a> for
          animation and 
          <a class="text-blue-700" href="https://tailwindcss.com">TailwindCSS</a
          > for styling
        </p>
      </div>
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

  * {
    outline-style: none;
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
      to right,
      #f11712,
      #0099f7
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #f11712,
      #0099f7
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .block {
    @apply grid grid-cols-3 gap-x-5 lg:gap-x-20 gap-y-10 mx-10 lg:mx-20 mt-5 mb-40;
  }

  .block2 {
    @apply grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-20 gap-y-10 mx-10 lg:mx-20 mt-5 mb-40;
  }
</style>
