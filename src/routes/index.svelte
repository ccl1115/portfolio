<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import Intro from "../components/Intro.svelte";
  import Languages from "../components/Languages.svelte";
  import Platforms from "../components/Platforms.svelte";
  import Projects from "../components/Projects.svelte";
  import Tools from "../components/Tools.svelte";

  let languages: HTMLElement;
  let platforms: HTMLElement;
  let projects: HTMLElement;
  let tools: HTMLElement;
  let topButton: HTMLElement;

  let html: HTMLElement;


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
      <a class="text-blue-700" href="https://tailwindcss.com">TailwindCSS</a> for
      styling
    </p>
  </div>
</div>
