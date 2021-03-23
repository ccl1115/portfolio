<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";

  let languages: HTMLElement;
  let platforms: HTMLElement;
  let projects: HTMLElement;
  let tools: HTMLElement;

  let main: HTMLElement;
  let header: HTMLElement;
  let html: HTMLElement;

  let preTop = 0;
  let offsetTop = 0;

  let requestId = 0;
  let scrollRequest = 0;
  let scale = 1;

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

  function update() {
    gsap.fromTo(main, { scaleX: scale }, { scaleX: 1 });
    requestId = scrollRequest > 0 ? requestAnimationFrame(update) : null;
    scrollRequest--;
  }

  function render() {
    requestId = requestAnimationFrame(update);
  }

  function onScroll(event) {
    scrollRequest++;
    if (!requestId) {
      render();
    }
    const top = event.target.documentElement.scrollTop;
    const d = top - preTop;
    offsetTop += d;
    offsetTop = Math.max(0, Math.min(offsetTop, header.clientHeight));
    gsap.set(header, { y: -offsetTop });
    scale = (200 - Math.abs(d)) / 200;
    preTop = top;
  }

  onMount(() => {
    html = document.documentElement;
    gsap.config({ force3D: true });
    document.addEventListener("scroll", onScroll);
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
        <p class="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  </div>

  <div bind:this={main}>
    <div>
      <div class="mt-40">
        <!-- <div class="text-7xl text-center underline">hi there, i'm simon yu</div> -->
      </div>
      <div
        class="text-gray-800 grid grid-cols-1 md:grid-cols-3 gap-20 mx-20 my-20 pt-10"
      >
        <div class="flex flex-col items-center">
          <p class="text-lg">Name</p>
          <p class="text-sm">禹璐 Simon</p>
          <p class="text-lg pt-4">Location</p>
          <p class="text-sm">中国贵阳</p>
          <p class="text-lg pt-4">Email</p>
          <p class="text-sm">ccl1115 at gmail dot com</p>
          <p class="text-lg pt-4">Github</p>
          <p class="text-sm underline">
            <a href="https://github.com/ccl1115">https://github.com/ccl1115</a>
          </p>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-lg pb-4">全栈开发者</p>
          <p class="lg:mx-20 text-sm">
            近十年开发经验，主要在Android平台上进行开发。也有前端开发经验，熟悉Vue，Quasar，Electron等框架。同时使用NodeJS进行服务端的开发。
          </p>
        </div>
        <div class="flex flex-col items-center">
          <button class="text-lg mb-4 p-1" on:click={toLanguages}>
            使用的语言
            <span class="text-xs border rounded-sm border-black px-1 ml-1"
              >查看</span
            >
          </button>
          <ul class="mx-20 text-sm">
            <li>Java</li>
            <li>Kotlin</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Dart</li>
            <li>Python</li>
          </ul>
        </div>
        <div class="flex flex-col items-center">
          <button class="text-lg mb-4 p-1" on:click={toPlatforms}>
            开发平台
            <span class="text-xs border rounded-sm border-black px-1 ml-1"
              >查看</span
            >
          </button>

          <ul class="mx-20 text-sm">
            <li>Android</li>
            <li>Flutter</li>
            <li>NodeJS</li>
            <li>Vue</li>
            <li>Electron</li>
          </ul>
        </div>
        <div class="flex flex-col items-center">
          <button class="text-lg mb-4 p-1" on:click={toProjects}>
            公司/项目
            <span class="text-xs border rounded-sm border-black px-1 ml-1"
              >查看</span
            >
          </button>
          <ul class="lg:mx-20 text-sm">
            <li>千橡/人人网</li>
            <li>百度/贴吧</li>
            <li>字节跳动</li>
            <li>优趣/蓝莓</li>
            <li>语玩/语玩</li>
            <li>乐诚</li>
            <li>车秘</li>
          </ul>
        </div>
        <div class="flex flex-col items-center">
          <button class="text-lg mb-4 p-1" on:click={toTools}>
            工具使用
            <span class="text-xs border rounded-sm border-black px-1 ml-1"
              >查看</span
            >
          </button>
          <p class="text-lg my-4">个人项目</p>
          <ul class="text-sm">
            <li>
              <a
                class="underline hover:bg-gray-400 p-1"
                href="https://play.google.com/store/apps/details?id=com.simonsliar.dumblauncher"
              >
                Thumb Launcher @ Google Play
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      bind:this={languages}
      id="languages"
      class="bg-black text-gray-100 py-20"
    >
      <div class="block">
        <div class="col-span-3 text-center text-2xl mb-15">使用的语言</div>
        <div class="col-span-3 lg:col-span-1 text-right text-xl">Java</div>
        <div class="col-span-3 lg:col-span-2 text-sm mt-1">
          精通Java语言，主要用于Android平台上的App开发。
        </div>
        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          Kotlin
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm mt-1">
          熟练使用Kotlin语言，使用其开发过完整的App。了解Coroutine和Flow等异步机制。
        </div>
        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          JavaScript/TypeScript
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm mt-1">
          熟练使用JavaScript和TypeScript进行前端和后端开发。
        </div>
        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          Dart
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm mt-1">
          使用Dart开发Flutter应用，了解其语言特性。
        </div>
        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          Python
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm mt-1">
          使用Python开发脚本任务，自动化工作等。也了解Python上的Web开发。
        </div>
      </div>
    </div>

    <div
      bind:this={platforms}
      id="platforms"
      class="bg-white text-gray-800 py-20"
    >
      <div class="block">
        <div class="col-span-3 text-center text-2xl">开发平台</div>
        <div class="col-span-3 lg:col-span-1 text-right text-xl">Android</div>
        <div class="col-span-3 lg:col-span-2 text-sm pt-1">
          <p>多年在Android平台上开发App的经验</p>
          <p>
            使用JetPack进行高效的开发(ViewModel, LiveData, NavigationUI, Room)
          </p>
          <p>使用MotionLayout开发布局动画</p>
          <p>使用Kotlin进行开发</p>
          <p>使用Flutter开发Android应用</p>
          <p>熟悉Dagger(Hilt), Koin等依赖注入设计模式</p>
          <p>高级的UI开发，自定义控件, Canvas绘制</p>
          <p>内存优化，内存泄漏查找</p>
          <p>Android系统源码二次开发</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          Flutter
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm pt-1">
          <p>熟悉声明式开发模式</p>
          <p>熟悉Dart语言</p>
          <p>BloC, MobX等无状态化开发模式</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          NodeJS as Back End
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm pt-1">
          <p>在NodeJS平台上开发简单的API服务，中间件，WebSocket应用服务</p>
          <p>Express, Koa, Hapi等常用Web服务框架</p>
          <p>熟悉非阻塞异步IO编程思想</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          Front End Stack
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm pt-1">
          <p>使用Vue/React/Svelte开发网页应用，管理后台等</p>
          <p>前后端分离</p>
          <p>了解SSR, NuxtJS等服务端渲染</p>
          <p>Webpack, Gulp, Eslint, Babel, Yarn等工具链</p>
          <p>SASS, LESS等样式扩展</p>
          <p>Tailwind/Bootstrap等CSS框架</p>
        </div>
        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          其他前端
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm pt-1">
          <p>微信小程序开发</p>
          <p>UniApp开发</p>
          <p>Electron开发桌面应用</p>
        </div>
      </div>
    </div>

    <div
      bind:this={projects}
      id="projects"
      class="bg-black text-gray-100 py-20"
    >
      <div class="block">
        <div class="col-span-3 text-center text-2xl mb-15">公司和项目</div>
        <div class="col-span-3 lg:col-span-1 text-right">
          <p class="text-sm">北京千橡科技有限公司</p>
          <p class="text-xl">人人网</p>
          <p class="text-sm opacity-50">2011.09 - 2013.04</p>
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm">
          <p>开发人人网Android客户端</p>
          <p>重构客户端UI架构</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right mt-10">
          <p class="text-sm">北京百度科技有限公司</p>
          <p class="text-xl">百度贴吧</p>
          <p class="text-sm opacity-50">2013.05 - 2014.05</p>
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm">
          <p>百度贴吧SDK, 提供给第三方使用</p>
          <p>贴吧垂直版本</p>
          <p>class multi-dex, 插件系统, UI层级优化等技术问题</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          <p class="text-sm">北京优趣科技有限公司</p>
          <p class="text-xl">蓝莓</p>
          <p class="text-sm opacity-50">2014.05 - 2015.09</p>
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm">
          <p>技术合伙人</p>
          <p>独立完成整个App开发</p>
          <p>聊天，Feed，群组等社交功能</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right mt-10">
          <p class="text-sm">北京字节跳动科技有限公司</p>
          <p class="text-xl">时光相册</p>
          <p class="text-sm opacity-50">2015.10 - 2017.04</p>
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm">
          <p>智能相册管理工具</p>
          <p>照片云端同步</p>
          <p>照片编辑</p>
          <p>图库管理</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          <p class="text-sm">贵阳语玩科技有限公司</p>
          <p class="text-xl">语玩</p>
          <p class="text-sm opacity-50">2017.07 - 2018.12</p>
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm">
          <p>狼人杀游戏客户端开发</p>
          <p>聊天室开发</p>
          <p>后台管理页面开发</p>
          <p>运营活动页面开发</p>
          <p>微信小程序 音频推流</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          <p class="text-sm">贵州乐诚科技有限公司</p>
          <p class="text-xl">乐诚监狱智能终端机</p>
          <p class="text-sm opacity-50">2019.05 - 2019.10</p>
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm">
          <p>银行支付接口(PHP)</p>
          <p>终端Android客户端开发</p>
          <p>人脸识别门禁系统</p>
        </div>

        <div class="col-span-3 lg:col-span-1 text-right text-xl mt-10">
          <p class="text-sm">贵州车秘科技有限公司</p>
          <p class="text-xl">掌上车秘Android版</p>
          <p class="text-xl">岗亭系统Android版</p>
          <p class="text-sm opacity-50">2020.01 - 至今</p>
        </div>
        <div class="col-span-3 lg:col-span-2 text-sm">
          <p>基于蓝牙的室内车位导航系统</p>
          <p>MQTT岗亭消息推送</p>
          <p>掌上车秘App 1.0维护</p>
        </div>
      </div>
    </div>

    <div bind:this={tools} id="tools" class="bg-white text-gray-800 py-20">
      <div class="block2">
        <div class="col-span-2 lg:col-span-4 text-center text-2xl mb-15">
          使用的工具
        </div>
        <div class="text-xl text-right">Android Studio</div>
        <div class="mt-1">开发Android和Flutter应用</div>
        <div class="text-xl text-right">Visual Studio Code</div>
        <div class="mt-1">
          常用的代码编辑工具, 开发Vue, Flutter等平台下的程序
        </div>
        <div class="text-xl text-right">Vim</div>
        <div class="mt-1">终端环境下的文本编辑工具</div>
        <div class="text-xl text-right">Git</div>
        <div class="mt-1">
          Git Flow模式, branch, rebase, cherry-pick等高级Git使用, 搭建Git仓库
        </div>
        <div class="text-xl text-right">JetBrains IDE</div>
        <div class="mt-1">
          JetBrains系列IDE, 包括WebStore, PyCharm, IntelliJ等
        </div>
        <div class="text-xl text-right">Docker</div>
        <div class="mt-1">
          使用Docker快速搭建和维护各种基础服务, mysql, redis, gitlab, jenkins等,
          搭建开发和测试环境
        </div>
        <div class="text-xl text-right">Figma</div>
        <div class="mt-1">简单的应用UI原型制作</div>
        <div class="text-xl text-right">Adobe Photoshop and Illustrator</div>
        <div class="mt-1">切图，简单的图标制作</div>
        <div class="text-xl text-right">Trello, Asana</div>
        <div class="mt-1">项目看板管理</div>
      </div>
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
