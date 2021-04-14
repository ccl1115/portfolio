<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import Intro from "../components/Intro.svelte";
  import Languages from "../components/Languages.svelte";
  import Platforms from "../components/Platforms.svelte";
  import Projects from "../components/Projects.svelte";
  import Tools from "../components/Tools.svelte";

  import section from "../stores/section";

  let intro: HTMLElement;
  let languages: HTMLElement;
  let platforms: HTMLElement;
  let projects: HTMLElement;
  let tools: HTMLElement;
  let topButton: HTMLElement;

  let html: HTMLElement;

  function toIntro() {
    gsap.to(html, { scrollTop: intro.offsetTop - 100 });
  }

  function toLanguages() {
    gsap.to(html, { scrollTop: languages.offsetTop - 100 });
  }

  function toPlatforms() {
    gsap.to(html, { scrollTop: platforms.offsetTop - 100 });
  }

  function toProjects() {
    gsap.to(html, { scrollTop: projects.offsetTop - 100 });
  }

  function toTools() {
    gsap.to(html, { scrollTop: tools.offsetTop - 100 });
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

    const unsubscriber = section.subscribe((section) => {
      switch (section) {
        case "intro":
          toIntro();
          break;
        case "projects":
          toProjects();
          break;
        case "tools":
          toTools();
          break;
        case "platforms":
          toPlatforms();
          break;
        case "languages":
          toLanguages();
          break;
      }
    });

    return () => {
      document.removeEventListener("scroll", onScroll);
      unsubscriber();
    };
  });
</script>

<div bind:this={intro}>
  <Intro />
</div>

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
