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

## what's nx?

Nx is a task runner. **It can cache your tasks and ensure those tasks are run in the correct order.**
Support the local or remote cache of your task to make your task faster.

🚀 There are some super cool core features of the NX.

- 🐥 Task pipeline (automatically organize the order of your tasks)
- 🐥 Task cache (cache result of your task. To make your task faster)
- 🐥 Visualization relationship. (The Nx provides a graph online to help you analyze the relationship of each task the from application and library)
- 🐥 Rich plugin ecosystem.
- 🐥 Manage Releases (Help you to release your library. Involves updating the version of your package, populating a changelog, and publishing the new version to the NPM registry)
- 🐥 run and cache tasks in parallel from the Nx cloud
