# InTech Vue ESLint Rules

Welcome to the "InTech Vue ESLint Rules" repository, a centralized solution for managing and applying consistent code quality standards accross all projects at InTech. This repository hosts a custom ESLint configuration designed to enforce a unified coding style and coding best practices helping to ensure maintainability and reducing code quality discrepancies in collaborative projects.

## 🗂️ Table of Contents

1. [Installation](#⚙️-installation)
    1. [Requirements](#📋-requirements)
    2. [Step 1: install the ESLint extension for VSCode](#1️⃣-step-1-install-the-eslint-extension-for-vscode)
    3. [Step 2: install ESLint and the InTech rules](#2️⃣-step-2-install-eslint-and-the-intech-rules)
    4. [Step 3: create the ESLint configuration](#3️⃣-step-3-create-the-eslint-configuration)
    5. [Step 4: enjoy 🎉](#4️⃣-step-4-enjoy-🎉)

## ⚙️ Installation

Add the InTech ESLint Rules on your existing project.

### 📋 Requirements

- Node.js version >= `v24.18.0`

### 1️⃣ Step 1: install the ESLint extension for VSCode

- <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

Create a `.vscode/settings.json` file with the following configuration at the root of your project to enable auto-fixing of ESLint issues on save:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html"
  ]
}
```

Create a `.vscode/extensions.json` file with the following configuration at the root of your project to recommend the ESLint extension to your team members:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint"
  ]
}
```

### 2️⃣ Step 2: install ESLint and the InTech rules

Go to the folder of your project and execute the following command:

```bash
npm install -D eslint '@intech.lu/eslint-config-vue'@latest
```

### 3️⃣ Step 3: create the ESLint configuration

At the root of your project, create an `eslint.config.mjs` file with the following content:

```ts
import eslintConfig from '@intech.lu/eslint-config-vue';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  ...eslintConfig,
);
```

If you need to override the InTech rules for some reason, simply do it by adding rules in your `eslint.config.mjs`, it will override the InTech related ones:

```ts
import eslintConfig from '@intech.lu/eslint-config-vue';

export default defineConfig(
  ...eslintConfig,
  {
    rules: {
      'no-console': 'error',
    },
  },
);
```

⚠️ *NB: You should always override InTech rules after destructuring `eslintConfig`, otherwise `eslintConfig` will take precedence and override the rules you've just added.*

### 4️⃣ Step 4: enjoy 🎉

You now have the InTech ESLint rules applied automatically to your project.
