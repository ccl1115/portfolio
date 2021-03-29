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
