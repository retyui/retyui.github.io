> For AI agents: the complete documentation index is available at /bundle-discovery/llms.txt, the full documentation bundle is available at /bundle-discovery/llms-full.txt.

# React Native Bundle Discovery

> Visualize and analyze the JS bundle of your React Native app. Find heavy packages, duplicates and deprecated dependencies, and catch bundle size regressions in CI.

[Quick Start](/docs/getting-started/quick-start) | [GitHub](https://github.com/retyui/react-native-bundle-discovery)

## Features

- 📊 **Interactive UI**: Explore packages, modules and their source/bundled code in the browser, with a treemap and an "Imported by" graph for every module.
- 💡 **Optimization recommendations**: Duplicates, deprecated, outdated and dev-only packages and more, ranked by estimated savings.
- ❓ **Why is this in my bundle?**: See the shortest import chain to any package in your bundle.
- 🔍 **CLI**: List the heaviest packages and modules right in your terminal.
- 🆚 **Bundle size checks in CI**: Compare two reports in the UI or in CI and fail on bundle size regressions.
- 🧩 **Works with your setup**: Metro, Re.Pack (Rspack / Webpack), rnx-kit (esbuild) and React Native DevTools via Rozenite.
