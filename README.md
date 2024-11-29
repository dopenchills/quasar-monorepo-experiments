# Quasar Monorepo Experiments

## Monorepo

### pnpm

This project uses pnpm workspaces for monorepo.

The main project uses Quasar Framework to develop and build the whole package.

The subpackage also depends on Quasar, but they just provides custom components on top of Quasar components. They cannot be built by themselves as of now.

### `counter` subpackage

This package demonstrates below:

- npm package can be exported as source code, without being packed for publishing
- Only components that are exported with `exports` field are visible from parent project

### `random-values` subpackage

This package is just here to demonstrate multiple package can be added to parent project
