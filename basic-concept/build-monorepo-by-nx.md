# Build a mono repo with lightning speed.

We are based on the Vue framework to build a mono repo.


1. create a nx workspace

```bash
npx create-nx-workspace@latest stone-repo
cd stone-repo
```

[![93a3010cc7851e5ab10585b0e24e53b2.png](https://s1.imagehub.cc/images/2024/03/19/93a3010cc7851e5ab10585b0e24e53b2.png)](https://www.imagehub.cc/image/12D2w7)

2. add library-named products

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

🤣 Now It's over. We have a vue3 mono repo now. Is it easy and quick?
