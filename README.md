# Micro-frontends Architecture with Nx and Angular

As presented during [Infinum Talks: Micro-Frontends & Production Previewing](https://infinum.com/events/micro-frontends-production-previewing/).

You can check the presentation slides [here](./Micro%20Frontends%20with%20Nx%20and%20Angular.pdf).

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

First, run `npm ci` to install all dependencies.

Run `npm start` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files (including changes to remote apps).

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## MFE-related commands

### Generate a new host app with two remote apps

```bash
nx g @nrwl/angular:host phlex --remotes=movies,shows --dynamic --e2eTestRunner=none --prefix=inf --standalone
```

### Generate a shareable and publishable library

```bash
nx g @nrwl/angular:library auth --tags=core --standalone --skipModule --buildable --publishable --importPath=@phlex/auth
```

### Generate a new remote app and load it from the host app

```bash
nx g @nrwl/angular:remote music --host=phlex
```

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

# License

The [MIT License](./LICENSE)

# Credits

This repository was used for demonstration during [Infinum Talks: Micro-Frontends & Production Previewing](https://infinum.com/events/micro-frontends-production-previewing/).

<p align="center">
  <a href='https://infinum.com'>
    <picture>
        <source srcset="https://assets.infinum.com/brand/logo/static/white.svg" media="(prefers-color-scheme: dark)">
        <img src="https://assets.infinum.com/brand/logo/static/default.svg">
    </picture>
  </a>
</p>
