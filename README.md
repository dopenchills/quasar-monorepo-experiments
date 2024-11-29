# Quasar Monorepo Experiments

## Monorepo

### pnpm

This project uses `pnpm` workspaces to manage a monorepo structure.

The parent project is built with the Quasar Framework.

The subpackages also rely on Quasar but just provide custom components built on top of Quasar. These subpackages cannot yet be built independently.

### `counter` Subpackage

This subpackage demonstrates the following:

- An npm package can be exported as source code without requiring packaging for publication.
- Only components explicitly defined in the `exports` field are accessible to the parent project.

### `random-values` Subpackage

This subpackage is here only to show multiple packages can be added to workspaces
