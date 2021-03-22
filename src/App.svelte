<script lang="ts">
  let title: string = "simon's portfolio";
</script>

<main class="m-0 p-0">
  <div id="header" class="bg-black text-white overflow-hidden">
    <div class="grid grid-cols-6 gap-0 h-30 fixed w-full z-10 pb-10 bg-black">
      <div class="col-span-1 flex flex-row items-end justify-end">
        <img
          alt="menu"
          v-if="$route.path === '/'"
          class="w-6 h-6 hover:bg-gray-600"
          src="./assets/menu.png"
        />
      </div>
      <div class="col-span-2 flex flex-row items-end mx-10">
        <p>{title}</p>
      </div>
    </div>
  </div>

  <div>
    <div class="mt-40">
      <div class="text-7xl text-center underline">hi there, i'm simon yu</div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-20 mx-20 my-20 pt-10">
      <div class="flex flex-col items-center">
        <p class="text-lg">Name</p>
        <p class="text-sm">禹璐</p>
        <p class="text-lg pt-4">Location</p>
        <p class="text-sm">中国贵阳</p>
        <p class="text-lg pt-4">Email</p>
        <p class="text-sm">ccl1115 at gmail dot com</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-lg pb-4">全栈开发者</p>
        <p class="mx-20 text-sm">
          近十年开发经验，主要在Android平台上进行开发。也有前端开发经验，熟悉Vue，Quasar，Electron等框架。同时使用NodeJS进行服务端的开发。
        </p>
      </div>
      <div class="flex flex-col items-center">
        <a href="#languages">
          <p class="underline hover:bg-gray-400 text-lg mb-4 p-1">
            使用的语言 >
          </p>
        </a>
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
        <a href="#platforms">
          <p class="text-lg mb-4 p-1 underline hover:bg-gray-400">开发平台 ></p>
        </a>

        <ul class="mx-20 text-sm">
          <li>Android</li>
          <li>Flutter</li>
          <li>NodeJS</li>
          <li>Vue</li>
          <li>Electron</li>
        </ul>
      </div>
      <div class="flex flex-col items-center">
        <a href="#projects">
          <p class="text-lg mb-4 p-1 underline hover:bg-gray-400">
            公司/项目 >
          </p>
        </a>
        <ul class="mx-20 text-sm">
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
        <a class="text-lg pb-4" href="#tools">
          <p class="mb-4 p-1 underline hover:bg-gray-400">工具使用 ></p>
        </a>
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

  <div id="languages" class="bg-black text-white py-20">
    <div class="grid grid-cols-3 gap-x-20 gap-y-10 mx-20 my-40">
      <div class="text-right text-xl">Java</div>
      <div class="col-span-2 text-sm mt-1">
        精通Java语言，主要用于Android平台上的App开发。
      </div>
      <div class="text-right text-xl">Kotlin</div>
      <div class="col-span-2 text-sm mt-1">
        熟练使用Kotlin语言，使用其开发过完整的App。了解其Coroutine和Flow等异步机制。
      </div>
      <div class="text-right text-xl">JavaScript/TypeScript</div>
      <div class="col-span-2 text-sm mt-1">
        熟练使用JavaScript和TypeScript进行前端和后端开发。
      </div>
      <div class="text-right text-xl">Dart</div>
      <div class="col-span-2 text-sm mt-1">
        使用Dart开发Flutter应用，了解其语言特性。
      </div>
      <div class="text-right text-xl">Python</div>
      <div class="col-span-2 text-sm mt-1">
        使用Python开发脚本任务，自动化工作等。也了解Python上的Web开发。
      </div>
    </div>
  </div>

  <div id="platforms" class="bg-orange-100 text-blue-800 py-20">
    <div class="grid grid-cols-3 gap-x-20 gap-y-10 mx-20 my-40">
      <div class="text-right text-xl">Android</div>
      <div class="col-span-2 text-sm pt-1">
        <p>多年在Android平台上开发App的经验</p>
        <p>使用JetPack进行高效的开发(ViewModel, LiveData, NavigationUI, Room)</p>
        <p>使用MotionLayout开发布局动画</p>
        <p>使用Kotlin进行开发</p>
        <p>使用Flutter开发Android应用</p>
        <p>熟悉Dagger, Koin等依赖注入设计模式</p>
        <p>高级的UI开发，自定义控件, Canvas绘制</p>
        <p>内存优化，内存泄漏优化</p>
        <p>Android系统源码二次开发</p>
      </div>

      <div class="text-right text-xl">Flutter</div>
      <div class="col-span-2 text-sm pt-1">
        <p>熟悉声明式开发模式</p>
        <p>熟悉Dart语言</p>
        <p>BloC, MobX等无状态化开发模式</p>
      </div>

      <div class="text-right text-xl">NodeJS</div>
      <div class="col-span-2 text-sm pt-1">
        <p>在NodeJS平台上开发简单的API服务，中间件，WebSocket应用服务</p>
        <p>Express, Koa, Hapi等常用Web服务框架</p>
      </div>
      <div class="text-right text-xl">VueJS</div>
      <div class="col-span-2 text-sm pt-1">
        <p>使用Vue开发网页应用，管理后台</p>
        <p>前后端分离</p>
        <p>SSR, NuxtJS等服务端渲染</p>
        <p>vue-router, vuex, vue-axios等常用框架</p>
        <p>Webpack, Gulp, Eslint, Babel等工具链</p>
        <p>NPM, Yarn包管理工具</p>
        <p>使用Electron开发桌面应用</p>
      </div>
    </div>
  </div>

  <div id="projects" class="bg-blue-700 text-indigo-100 py-20">
    <div class="grid grid-cols-3 gap-x-20 gap-y-10 mx-20 my-40">
      <div class="text-right text-xl">人人网</div>
      <div class="col-span-2 text-sm">
        <p>开发人人网Android客户端</p>
        <p>重构客户端UI架构</p>
      </div>

      <div class="text-right text-xl">百度贴吧</div>
      <div class="col-span-2">
        <p>开发百度贴吧SDK</p>
        <p>贴吧垂直版本</p>
        <p>Multi-dex, 插件系统, UI层级优化等技术问题</p>
      </div>

      <div class="text-right text-xl">蓝莓</div>
      <div class="col-span-2">
        <p>独立完成整个App开发</p>
      </div>

      <div class="text-right text-xl">时光相册</div>
      <div class="col-span-2"></div>
      
      <div class="text-right text-xl">语玩</div>
      <div class="col-span-2"></div>

      <div class="text-right text-xl">掌上车秘</div>
      <div class="col-span-2">
        
      </div>

    </div>
  </div>

  <div id="tools" class="bg-yellow-100 text-indigo-800 py-20">
    <div class="grid grid-cols-4 gap-10 pt-10 mx-10">
      <div class="text-xl text-right">Android Studio</div>
      <div class="mt-1">开发Android和Flutter应用</div>
      <div class="text-xl text-right">Visual Studio Code</div>
      <div class="mt-1">常用的代码编辑工具</div>
      <div class="text-xl text-right">Git</div>
      <div class="mt-1">Git Flow模式, Branch, rebase, cherry-pick等高级Git使用, 搭建Git仓库</div>
      <div class="text-xl text-right">JetBrains IDE</div>
      <div class="mt-1">JetBrains系列IDE, 包括WebStore, Pycharm, IntelliJ等</div>
      <div class="text-xl text-right">Docker</div>
      <div class="mt-1">使用Docker快速搭建和维护各种基础服务, mysql, redis, gitlab等, 搭建开发和测试环境</div>
      <div class="text-xl text-right">Figma</div>
      <div class="mt-1">简单的应用UI原型制作</div>
      <div class="text-xl text-right">Adobe Photoshop/Illustrator</div>
      <div class="mt-1">切图，简单的图标制作</div>
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
    #header {
      display: none;  
    }
  }

</style>


