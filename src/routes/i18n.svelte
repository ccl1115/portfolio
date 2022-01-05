<script context="module">
  import {
    register,
    waitLocale,
    getLocaleFromNavigator,
    init,
  } from "svelte-i18n";
  register("en", () => import("../locales/en.json"));
  register("zh-CN", () => import("../locales/zh-cn.json"));

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator() && "zh-CN",
  });

  export async function preload() {
    return waitLocale();
  }
</script>
