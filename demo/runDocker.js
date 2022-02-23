/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// const DEFAULT_DOCKER_COMMAND_TEMPLATE = `docker run --rm -it --mount type=bind,source="${process.cwd()}",target=/e2e cypress/included:9.5.0`;
// const DEFAULT_DOCKER_COMMAND_TEMPLATE = `docker run -it --entrypoint cypress -v "${process.cwd()}/..":/e2e -v "/e2e/packages/layouts-css":/e2e/node_modules/@itwin/itwinui-layouts-css -w /e2e/demo cypress/included:9.5.0 run-ct`;
// const DEFAULT_DOCKER_COMMAND_TEMPLATE = `docker run -it --entrypoint /bin/bash -v "${process.cwd()}\\..":/e2e -w /e2e cypress/included:9.5.0 ./demo/entrypoint.sh`;
// const DEFAULT_DOCKER_COMMAND_TEMPLATE = `docker run -it --entrypoint "/bin/ls" -v "${process.cwd()}\\..":/e2e -w /e2e/node_modules/@itwin cypress/included:9.5.0`;

const DEFAULT_DOCKER_COMMAND_TEMPLATE = `docker run --rm -it -v "${__dirname}/../":/e2e -w /e2e/demo cypress/included:9.5.0 --browser chrome --headless --env updateSnapshots=true`;
// docker run -it -v $PWD:/e2e -w /e2e cypress/included:9.5.0

console.log('process.cwd()', process.cwd());

fs.chmodSync(path.join(__dirname, 'cypress-visual-screenshots'), 0o777);

// fs.unlinkSync(path.join(__dirname, 'cypress/screenshots'));

const dockerProcess = spawn(DEFAULT_DOCKER_COMMAND_TEMPLATE, {
  stdio: 'inherit',
  shell: true,
});
dockerProcess.on('error', (err) => reject(err));
dockerProcess.on('exit', async function (code, signal) {
  if (code === 0) {
    // resolve();
    console.log('success');
  } else {
    // reject(new Error(`${dockerCommand} returned ${code}`));
    console.log('error', code);
  }
});
