# nx-tutorial

there is some basic knowledge about nx that can help you quickly use it.

To do the test quickly you can install a NX global.

```bash
npm add --global nx@latest
```

>[!TIP]
> If you want to the nx command, you must work in the nx workspace
> To create a workspace run:
> `npx create-nx-workspace@latest <workspace name>`
>
> To add Nx to an existing workspace with a workspace-specific nx.json, run:
> `npx nx@latest init`

>[!TIP]
> you can use the nx-vue-cosmopolis or nx-vue-spark repo do test directly. They are all nx workspace.

## what's the Nx?

If you don't know Nx. You must have known Lerna before. Nrwl, the company behind Nx, are taking over the stewardship of Lerna.js. [Lerna is dead - Long Live Lerna](https://dev.to/nrwl/lerna-is-dead-long-live-lerna-3jal)

Nx is a task runner. **It can cache your tasks and ensure those tasks are run in the correct order.**
Support the local or remote cache of your task to make your task faster.

🚀 There are some super cool core features of the NX.

- 🐥 Task pipeline (automatically organize the order of your tasks)
- 🐥 Local linking of packages
- 🐥 Cache tasks result (cache the result of your tasks. To make your task faster)
- 🐥 Visualization relationship. (The NX provides a graph online to help you analyze the relationship of each task the from application and library)
- 🐥 Rich plugin ecosystem.
- 🐥 Manage Releases (Help you to release your library. Involves updating the version of your package, populating a changelog, and publishing the new version to the NPM registry)
- 🐥 run and cache tasks in parallel from the NX cloud

## some useful commands

you can run `nx` directly in an NX workspace. It will show all commands of nx.

All command explanations are executed within [nx-vue-cosmopolis](https://github.com/fzhange/nx-vue-cosmopolis) repo.

> [!TIP]
> `nx` command must be run under an Nx workspace.

### nx graph

Graph dependencies within the workspace.

Run `nx graph` in your workspace. Then open the linking.
[![9884fd7ab1276e49d4a1109cc0fd8ca9.png](https://s1.imagehub.cc/images/2024/03/19/9884fd7ab1276e49d4a1109cc0fd8ca9.png)](https://www.imagehub.cc/image/12a0E4)

[![135f502ff292f547c922c18a12e7ca57.png](https://s1.imagehub.cc/images/2024/03/19/135f502ff292f547c922c18a12e7ca57.png)](https://www.imagehub.cc/image/12a6Sa)

[![85f6ea9df66a1e866e246de248f81a64.png](https://s1.imagehub.cc/images/2024/03/19/85f6ea9df66a1e866e246de248f81a64.png)](https://www.imagehub.cc/image/12aNiA)

You will see the dependence structure of the project.

1. We can know quickly `nx-vue-cosmopolis` depend on `order` and `products` module. And they two depend on `shared-ui` module.
2. We know the type of `nx-vue-cosmopolis` is the `Application` and the type of the rest are `Library`.
3. We know all the targets within theirs. (About the targets we will tell you later)
4. we know the command that how to `lint build serve preview serve-static test`

### `nx generate <generator>`

Runs a generator that creates and/or modifies files based on a generator from a collection.

I will show you the generate ability by `@nx/vue`.

There are two ways that you can know the ability of the `@nx/vue`.

1. `nx list @nx/vue`

[![c98fcb7f2c3a7ba3cb56dcbbb70470b9.png](https://s1.imagehub.cc/images/2024/03/19/c98fcb7f2c3a7ba3cb56dcbbb70470b9.png)](https://www.imagehub.cc/image/12urPe)

2. [official website](https://nx.dev/nx-api/vue)

According above picture, we know we can do many things with a plugin.

Now I will show you how to use it.

```bash
#1. create a lib named products
nx g @nx/vue:library products --directory=modules/products --unit-test-runner=vitest --bundler=vite

#2. create a component under products lib
nx g @nx/vue:component product-list --directory=modules/products/src/product-list
```

### nx release

Orchestrate versioning and publishing of applications and libraries. And generate `CHANGELOG.md`

First, you'll need to define which projects Nx should manage releases for by setting the release. projects property in nx.json:

```json
{
    "release": {
    "projects": ["modules/*"]
  },
}
```

Then run

```bash
nx release --first-release --dry-run
```
[![f3dee63d78b91c9160fc7fc022aa3be8.png](https://s1.imagehub.cc/images/2024/03/19/f3dee63d78b91c9160fc7fc022aa3be8.png)](https://www.imagehub.cc/image/12uAtq)

