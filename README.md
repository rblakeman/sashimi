# Sashimi

Ryan Blakeman | rblakeman31@gmail.com | ryanblakeman.com

Currently just a proof-of-concept Design System I work on in my free time.

## Getting Started

To install dependencies

```bash
yarn setup
```

### Developing

Run the dev command to setup a watcher for each lib and app

```bash
npx lerna run dev
```

### Linting

```bash
yarn lint
```

### Typechecking

Applications are typechecked separately from the rest of the libraries. For developer convenience use the all-in-one command:

```bash
yarn typecheck:all
```

### Testing

```bash
yarn test
```

## Docs

### Install Dependencies

Install required dependencies (also apart of the main `yarn setup` command)

```bash
yarn setup:docs
```

### Start

Start up the dev server for the docs-site

```bash
yarn start:docs
```

### Build

Generate a static build of the docs-site

```bash
yarn build:docs
```

### Serve

Serve the static build generated from the build command

```bash
yarn serve:docs
```
