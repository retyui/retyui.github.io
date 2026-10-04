> For AI agents: the complete documentation index is available at /bundle-discovery/llms.txt, the full documentation bundle is available at /bundle-discovery/llms-full.txt.

# createResolveRequest

```ts
import { createResolveRequest } from "react-native-bundle-discovery";
```

Creates a Metro `resolveRequest` that removes unnecessary React Native modules from **release** bundles
(dev builds are not affected). The CLI recommends these options when they apply to your bundle.

## Options

| Option              | Type      | Default | Description                                                                      |
| ------------------- | --------- | ------- | -------------------------------------------------------------------------------- |
| `removeUTFSequence` | `boolean` | `false` | Remove the unused `react-native/Libraries/UTFSequence.js` module.                |
| `removeNewRenderer` | `boolean` | `false` | Remove the Fabric renderer. Enable only if the New Architecture is **disabled**. |

## Example

```js title="metro.config.js"
const { createResolveRequest } = require("react-native-bundle-discovery");

const config = {
  resolver: {
    resolveRequest: createResolveRequest({
      removeUTFSequence: true,
    }),
  },
};
```
