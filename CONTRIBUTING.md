# Contributing

We welcome all types of contribution.

Need a feature or found a bug? Please create an [issue](https://github.com/iTwin/iTwinUI-layouts/issues).

Want to contribute by creating a pull request? Great! [Fork iTwinUI-layouts](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) to get started.

---

## How to setup

To clone and build iTwinUI-layouts, you'll need [Git](https://git-scm.com) and [Yarn 3](https://yarnpkg.com/getting-started/install) installed on your computer.

1. [Create a local clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) of your forked repository. You can do this from the command line or using the Github Desktop app.
2. Go to the directory where you cloned iTwinUI. e.g. `cd iTwinUI-layouts`.
3. Run `yarn install` from that directory.

---

## Run locally

### To run demo app with built iTwinUI-layouts CSS and React packages

```console
yarn start
```

### To run visual tests

```console
yarn test
```

> _Before running this command, make sure Docker is running._

### To approve changed visual tests images

```console
yarn test:approve
```

---

## Testing

For running tests you will need [Docker](https://www.docker.com/products/docker-desktop). It helps to avoid cross-platform rendering differences.
We are using [cypress](https://www.cypress.io/) for running tests and making screenshots.

- If you get `ENOENT: no such file or directory` or `EPERM: operation not permitted` then you need to open Docker Desktop -> Settings -> General -> Disable `Use the WSL 2 based engine` setting.
- To check failed tests results, open `demo/cypress-visual-report/cypress-visual-report.html` in your browser. You may want to use a local HTTP server (e.g. with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).
- When writing tests, use `layoutsDescribe` instead of regular `describe`. This way tests will be run on different screen sizes.
- To make a screenshot, use `cy.compareSnapshot(...)`.
- Example test:
  ```ts
  layoutDescribe('PageLayoutDemo', (screenSize) => {
    it('should render PageLayoutDemo', () => {
      cy.visit('page-layout');
      cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
    });
  });
  ```
