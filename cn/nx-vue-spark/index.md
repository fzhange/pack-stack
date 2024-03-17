# NxVueSpark

![portal-logo](https://s1.imagehub.cc/images/2024/03/13/9a73d8333d97ee2a760e2680dce92c0d.png)

<div>
  <p align="center">
    <a href="./README.md">English</a> | 简体中文
  </p>
</div>

NxVueSpark 是一个基于 NX 作为构建工具的 vue3 模板工程。她可以帮助你快速创建一个基于 NX 的 vue 独立应用。
如果你想构建一个基于 NX 的 Vue3 monorepo。你可以使用我的另一个项目[nx-vue-cosmopolis](https://github.com/fzhange/nx-vue-cosmopolis)

## [为什么用 NX？](./docs/zh/why.md)

![alt text](./docs/images/ts-benchmark.gif)

- 💪 **快**
- 💪 **简单**
- 💪 **生态丰富**
- 💪 **国外大厂都在用**

这里是官方的 [benchmarks](https://nx.dev/showcase/benchmarks)

## 🚀 Features

- 💪 nx 支持
- 💪 开箱即用
- 💪 缓存你运行的任务，构建更快。
- 💪 多主题支持
- 💪 i18n 支持
- 💪 [Cypress](https://www.cypress.io/) 开箱即用
- 💪 Ts Prettier ESLint Vitest 开箱即用

## 🦄 Usage

1. clone repo first.

```bash
 git clone git@github.com:fzhange/NxVueSpark.git
 npm install
 npm start
```

2. Visit <http://localhost:4200/> in your local browser

## ⚙ serve script

start, build and test your application.

```json
{
  "start": "nx serve", // start dev server
  "build": "nx build", // build application
  "test": "nx test", // runs tests using Jest
  "lint": "nx lint", // runs linting with ESLint
  "e2e": "nx e2e" // runs e2e tests with Cypress
}
```

一般我们在跑 lint，test、e2e 任务的时候是串行的。随着项目的增大，需要花费很长时间。NX 在支持本地、远程（[nx-cloud](https://nx.app/)）的同时，支持并行任务运行。

```bash
npx nx run-many -t test lint e2e
```

同时 Nx 提供了很多方便的辅助能力。比如命令式创建一个规范的组件。帮你打理你需要的一切。

```bash
npx nx g @nx/vue:component  index  --directory=src/components/hello-world
```

## 🌲 project structure

```ts
.
├── README.md
├── README_CN.md
├── dist
│   └── nx-vue-spark
├── docs
│   ├── en
│   └── zh
├── e2e
│   ├── cypress.config.ts
│   ├── project.json
│   ├── src
│   └── tsconfig.json
├── index.html
├── nx.json
├── package-lock.json
├── package.json
├── project.json
├── scripts
│   └── create-component.ts
├── src
│   ├── app         // your business logic
│   ├── components  // components logic
│   ├── composables // your common composables api
│   ├── const       // constant
│   ├── main.ts     // project entry
│   ├── routes      // routes directory
│   ├── styles
│   ├── styles.less
│   └── tools       // tools directory
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── vite.config.ts
```

这里可能有一些新的概念。

| **File**           | **Description**                |
| ------------------ | ------------------------------ |
| **nx.json**        | 这个文件是控制 NX 是怎么工作的 |
| **project.json**   | 这里是 NX 的任务推测配置       |
| **vite.config.ts** | vite 配置                      |

> [!TIP]
> nx.json project.json 的概念都是来自于 NX 的。如果你想了解更多，可以查阅官方文档 .

## 🌸 Thanks

希望这个仓库对你有帮助。
喜欢的话就 star 一下吧 ⭐️
