### Alternative Optimized Approach to dynamic imports with the registry -- see [`src/components/Icon/IconBase.tsx`](./src/components/Icon/IconBase.tsx)

- retains all the benefits of conditionally rendering only the targeted code (determined by the `variant` field which accepts values found in the `VariantUnion` type) that `dynamic` supports
- none of the headache of dealing with any quirky behavior associated with dynamic imports in the context of rsc vs rcc
