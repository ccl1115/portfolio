<script>
  import Icon from "./Icon.svelte";
</script>

<div class="block2">
  <div class="col-span-2 lg:col-span-4 text-center text-2xl mb-15">
    使用的工具
  </div>
  <Icon icon="./assets/ic_android_studio.png" width="w-28" height="h-16" />
  <div class="mt-1 text-sm">开发Android和Flutter应用</div>
  <Icon icon="./assets/ic_vscode.png" width="w-28" height="h-24" />
  <div class="mt-1 text-sm">
    常用的代码编辑工具, 开发Vue, Flutter等平台下的程序
  </div>
  <Icon icon="./assets/ic_vim.png" width="w-28" height="h-20" />
  <div class="mt-1 text-sm">使用Vim在终端环境下的文本编辑工具</div>
  <Icon icon="./assets/ic_git.png" width="w-28" height="h-16" />
  <div class="mt-1 text-sm">
    Git Flow模式, branch, rebase, cherry-pick等高级Git使用, 搭建Git仓库
  </div>
  <Icon icon="./assets/ic_jetbrains.jpg" width="w-28" height="h-20" />
  <div class="mt-1 text-sm">
    JetBrains系列IDE, 包括WebStore, PyCharm, IntelliJ等
  </div>
  <Icon icon="./assets/ic_docker.png" width="w-28" height="h-16" />
  <div class="mt-1 text-sm">
    使用Docker快速搭建和维护各种基础服务, mysql, redis, gitlab, jenkins等,
    搭建开发和测试环境
  </div>
  <Icon icon="./assets/ic_figma.jpeg" width="w-28" height="h-16" />
  <div class="mt-1 text-sm">使用Figma简单的应用UI原型制作</div>
  <Icon
    icon="./assets/ic_illustrator_photoshop.jpg"
    width="w-28"
    height="h-16"
  />
  <div class="mt-1 text-sm">
    使用Photoshop和Illustrator进行切图，简单的图标制作
  </div>
  <Icon icon="./assets/ic_trello_asana.jpg" width="w-28" height="h-10" />
  <div class="mt-1 text-sm">Asana和Trello的项目看板管理</div>
  <Icon
    icon="./assets/ic_kubernetes.png"
    className="bg-white"
    width="w-28"
    height="h-10"
  />
  <div class="mt-1 text-sm">Kubernetes自动化部署运维，搭建高可用平台</div>
</div>
