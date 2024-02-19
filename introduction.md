# 介绍

  NestJs是一个用于构建高效、可伸缩的NodeJs服务端的应用框架。NestJs同时支持JS和TS，同时支持OOP（Object Oriented Programming）、FP（Functional Programming）、FRP（Functional Reactive Programming）编程方式。

  同时NestJs底层默认是使用的Express框架同时可选的支持Fastify.

  NestJs在这些框架（Express、Fastify）之上做了一层抽象，但是也直接暴露了他们的API给开发者。这就给了开发者足够的自由去使用大量的第三方模块。

## 设计哲学

  这些年，感谢NodeJs。使得JavaScript变成了一个Web通用语，即同时可以写前后端应用。我们有了像Angular，React和Vue等令人敬畏的项目，从而提高了开发人员的生产率，并能够创建快速，可测试和可扩展的前端应用程序。然而虽然有大量出色的libraries，helper和tools用于NodeJS（即服务器端的JavaScript），但它们都没有有效地解决一个核心的问题即 **架构问题**。

## 安装

  首先，要开始一个NestJs项目，您可以使用Nest CLI脚手架，也可以克隆一个入门项目（两者都会产生相同的结果）。
  要使用Nest CLI脚打脚本，请运行以下命令，将创建一个常规的结构。建议首次使用Nest CLI创建一个新项目。我们将以第一步继续进行这种方法。

```shell
npm i -g @nestjs/cli
nest new project-name
```

::: tip
要创建一个严格模式的TS项目，需使用 --strict 参数
:::

## 可替换

Git安装TypeScript启动项目：

```shell
git clone https://github.com/nestjs/typescript-starter.git project
cd project
npm install
npm run start
```

另外，用Git安装JavaScript启动项目：

```shell
git clone https://github.com/nestjs/javascript-starter.git project
cd project
npm install
npm run start
```

::: tip
如果你不想要GIT history，可以使用 [degit](https://github.com/Rich-Harris/degit)
:::

Open your browser and navigate to <http://localhost:3000/>.

## 支持NestJS

NestJS是一个MIT的开源项目，如果你有兴趣，可以去[官网](https://docs.nestjs.com/)。Buy a cup of coffee for them.
