# 五分钟构建使用任意技术栈构建一个mono repo

[![9a73d8333d97ee2a760e2680dce92c0d.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8832382b8dd641cb9c053ce9c5ae00f9~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1506\&h=738\&s=108768\&e=png\&b=ffffff)](https://www.imagehub.cc/image/1z4hJg)

也许都不需要五分钟，你就可以获得一个拥有如下能力的 mono repo. 而且不限技术栈哦。

- 🐥 任务管道化 (以合理的顺序运行你所有library的任务)
- 🐥 自动包的软链接（假设A libray依赖于B libray,此时B更新了内容，无需做任何事 A的内容也会更新哦）
- 🐥 缓存你的Task结果 (支持本地缓存和云缓存，让你的应用快的起飞)
- 🐥 可视化库依赖. (Nx会提供一个在线的可交互的图表，让你分析你的包，哪个依赖了哪个。再也不怕库太多分不清关系啦)
- 🐥 丰富的插件系统(通过插件，我们可以支持everything).
- 🐥 管理你的发布 (帮助你发包，自动帮你更新包版本，生成changelog)
- 🐥 任务并行运行（说白了就是很快） 
- 🐥 Storybook VitePress 支持

如果你对Turbo或者Nx感兴趣。欢迎来 [pack-stack](https://fzhange.github.io/pack-stack/)。使用最先进的前端技术来构建你的前端应用。


废话不多说直接开始(以Vue为例)

1. 安装nx脚手架

```bash
npm add --global nx@latest
```

2.  创建一个nx的工作空间

```bash
npx create-nx-workspace@latest stone-repo
cd stone-repo
```

[![93a3010cc7851e5ab10585b0e24e53b2.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fdd3c8cddc59486283ffe3659f6c91ea~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=832\&h=638\&s=101951\&e=png\&b=010101)](https://www.imagehub.cc/image/12D2w7)

3.  新增一个products library

```bash
nx g @nx/vue:library products --directory=modules/products --unit-test-runner=vitest --bundler=vite
```

```bash
.
├── README.md
├── apps
│   ├── stone-repo
│   │   ├── index.html
│   │   ├── project.json
│   │   ├── src
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.spec.json
│   │   └── vite.config.ts
│   └── stone-repo-e2e
│       ├── cypress.config.ts
│       ├── project.json
│       ├── src
│       └── tsconfig.json
├── modules
│   └── products
│       ├── README.md
│       ├── package.json
│       ├── project.json
│       ├── src
│       ├── tsconfig.json
│       ├── tsconfig.lib.json
│       ├── tsconfig.spec.json
│       └── vite.config.ts
├── nx.json
├── package-lock.json
├── package.json
├── tsconfig.base.json
└── vitest.workspace.ts
```

🤣 好了结束了。

> TIP
>
> 是不是超级快。
> 如果你想知道Nx是什么。以及如何去 构建、开发、测试、lint、发布、CI加速、构建缓存、请参考 [nx-tutorial](https://fzhange.github.io/pack-stack/basic-concept/nx-tutorial.html)
>

## 🌸 Thanks

希望这些能帮助到大家。如果对你有帮助的话，麻烦给个Star吧⭐️
