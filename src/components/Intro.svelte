<script lang="ts">
  import section from "../stores/section";
</script>

<div>
  <div
    class="text-gray-100 grid grid-cols-1 md:grid-cols-3 gap-20 mx-5 lg:mx-20 my-20"
    style="margin-top: 0"
  >
    <div class="flex flex-col items-center">
      <p class="text-lg">Name</p>
      <p class="text-sm">禹璐</p>
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
        近十年开发经验，一线互联网公司经验。在Android平台上进行App开发。也有前端开发经验，熟悉Vue/React/Svelte，Electron等框架。同时使用NodeJS进行服务端的开发。
      </p>
    </div>
    <div class="flex flex-col items-center">
      <button
        class="text-lg mb-4 p-1"
        on:click={() => section.set("languages")}
      >
        使用的语言
        <span class="text-xs border rounded-sm border-white px-1 ml-1"
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
      <button
        class="text-lg mb-4 p-1"
        on:click={() => section.set("platforms")}
      >
        开发平台
        <span class="text-xs border rounded-sm border-white px-1 ml-1"
          >查看</span
        >
      </button>

      <ul class="mx-20 text-sm">
        <li>Android</li>
        <li>Flutter</li>
        <li>NodeJS</li>
        <li>Vue/React/Svelte</li>
        <li>Electron</li>
        <li>Django</li>
      </ul>
    </div>
    <div class="flex flex-col items-center">
      <button class="text-lg mb-4 p-1" on:click={() => section.set("projects")}>
        公司/项目
        <span class="text-xs border rounded-sm border-white px-1 ml-1"
          >查看</span
        >
      </button>
      <ul class="lg:mx-20 text-sm">
        <li>北京千橡科技/人人网</li>
        <li>北京百度科技/贴吧</li>
        <li>北京字节跳动/时光相册</li>
        <li>北京优趣科技/蓝莓</li>
        <li>贵阳语玩科技/语玩</li>
        <li>贵州乐诚科技</li>
        <li>贵州车秘科技</li>
      </ul>
    </div>
    <div class="flex flex-col items-center">
      <button class="text-lg mb-4 p-1" on:click={() => section.set("tools")}>
        工具使用
        <span class="text-xs border rounded-sm border-white px-1 ml-1"
          >查看</span
        >
      </button>
    </div>
    <div class="text-center">
      <p class="text-lg my-4">个人项目</p>
      <ul class="text-sm">
        <li>
          <a
            class="underline hover:bg-gray-400 p-1"
            href="https://thumb.bbsimonyu.com"
            target="blank"
          >
            Thumb Launcher Home Page
          </a>
        </li>
        <li>
          <a
            class="underline hover:bg-gray-400 p-1"
            href="https://play.google.com/store/apps/details?id=com.simonsliar.dumblauncher"
            target="blank"
          >
            Thumb Launcher @ Google Play
          </a>
        </li>
      </ul>
    </div>
    <div class="text-center">
      <p class="text-lg my-4">教育</p>
      <p class="text-sm">2017-2011</p>
      <p class="text-sm">就读于大连理工大学 软件工程学院 本科</p>
    </div>
  </div>
</div>
