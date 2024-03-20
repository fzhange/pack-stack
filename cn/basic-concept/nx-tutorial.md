# NX 教程

这里是Nx的一些基础知识。帮助你快速掌握它，用起来。

先全局安装一下叭

```bash
npm add --global nx@latest
```

>[!TIP]
> 如果要使用Nx的命令，那么必须在Nx的工作空间里
> 创建一个Nx的工作空间
> `npx create-nx-workspace@latest <workspace name>`
>
> 添加Nx到已存在的工作区 `npx nx@latest init`

>[!TIP]
> 你可以直接用我之前做的模板`nx-vue-cosmopolis`或者`nx-vue-spark`去做测试。

## Nx是个啥？

你肯定知道Lerna吧。Nx的背后是Nrwl,Nrwl收购了Lerna。
[Lerna is dead - Long Live Lerna](https://dev.to/nrwl/lerna-is-dead-long-live-lerna-3jal)

Nx是一个任务运行器。 **可以缓存（支持本地缓存和云缓存）你运行任务的结果，同时确保这些任务以正确的顺序运行**

🚀 这里有些牛逼的特性

- 🐥 任务管道化 (以合理的顺序运行你所有library的任务)
- 🐥 自动包的软链接（假设A libray依赖于B libray,此时B更新了内容，无需做任何事 A的内容也会更新哦）
- 🐥 缓存你的Task结果 (支持本地缓存和云缓存，让你的应用快的起飞)
- 🐥 可视化库依赖. (Nx会提供一个在线的可交互的图表，让你分析你的包，哪个依赖了哪个。再也不怕库太多分不清关系啦)
- 🐥 丰富的插件系统(通过插件，我们可以支持everything).
- 🐥 管理你的发布 (帮助你发包，自动帮你更新包版本，生成changelog)
- 🐥 任务并行运行（说白了就是很快）
- 🐥 Storybook 支持

## 常用的命令

你可以直接在Nx的工作空间跑`nx`命令。下面的例子是在[nx-vue-cosmopolis](https://github.com/fzhange/nx-vue-cosmopolis) 仓库下运行

> [!TIP]
> `nx` 必须在Nx的工作空间下

### nx graph

以图表的形式展示工作空间下包之间的依赖关系。

直接运行 `nx graph`在你的项目里. 然后打开链接。

[![9884fd7ab1276e49d4a1109cc0fd8ca9.png](https://s1.imagehub.cc/images/2024/03/19/9884fd7ab1276e49d4a1109cc0fd8ca9.png)](https://www.imagehub.cc/image/12a0E4)

[![135f502ff292f547c922c18a12e7ca57.png](https://s1.imagehub.cc/images/2024/03/19/135f502ff292f547c922c18a12e7ca57.png)](https://www.imagehub.cc/image/12a6Sa)

[![85f6ea9df66a1e866e246de248f81a64.png](https://s1.imagehub.cc/images/2024/03/19/85f6ea9df66a1e866e246de248f81a64.png)](https://www.imagehub.cc/image/12aNiA)

这里你就很清晰的看见了各个包之间的依赖关系。我们可以得到如下信息。

1. We can know quickly `nx-vue-cosmopolis` 依赖 `order` and `products` 库。而这两个库同时依赖 `shared-ui`.
2. 我们可以知道`nx-vue-cosmopolis`的类型是 `Application` 而其他都是 `Library`.
3.我们可以知道每个应用或者库内部的`target` (关于target后边会说到)
4. 我们知道如何去 `lint build serve preview serve-static test`

### `nx generate <generator>`

使用`generator`创建修改文件。此处我们以`@nx/vue`插件为例。

这里有两种方式，你可以看到`@nx/vue`里面有哪些`generator`

1. `nx list @nx/vue`

[![c98fcb7f2c3a7ba3cb56dcbbb70470b9.png](https://s1.imagehub.cc/images/2024/03/19/c98fcb7f2c3a7ba3cb56dcbbb70470b9.png)](https://www.imagehub.cc/image/12urPe)

2. [official website](https://nx.dev/nx-api/vue)

从上面的图，我们知道`@nx/vue`这个插件可以做很多事。

- 💪 创建一个 vue 应用
- 💪 创建一个Vue library
- 💪 创建一个Vu 组件
- 💪 设置 tailwind 配置
- 💪 设置 storybook
- 💪 为你的组件生成 stories

下面我举个例子怎么用它。

```bash
#1. create a lib named products
nx g @nx/vue:library products --directory=modules/products --unit-test-runner=vitest --bundler=vite

#2. create a component under products lib
nx g @nx/vue:component product-list --directory=modules/products/src/product-list
```

### nx release

协调应用程序和库的版本控制和发布。并生成`CHANGELOG.md`

首先，你需要通过设置release来定义Nx应该为哪些项目管理release。`nx.json`中的Projects属性:

```json
{
    "release": {
    "projects": ["modules/*"]
  },
}
```

然后运行

```bash
nx release --first-release --dry-run
```

[![f3dee63d78b91c9160fc7fc022aa3be8.png](https://s1.imagehub.cc/images/2024/03/19/f3dee63d78b91c9160fc7fc022aa3be8.png)](https://www.imagehub.cc/image/12uAtq)

## 🌸 Thanks

希望这些能帮助到大家。如果对你有帮助的话，麻烦给个Star吧⭐️
