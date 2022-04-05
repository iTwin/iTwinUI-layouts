/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const { spawn } = require('child_process');

// Using diferent Cypress image for M1 processors
const isM1 = process.argv.includes('--m1');
const dockerImage = isM1
  ? `cookiescrumbs/cypress-m1:9.4.1`
  : `cypress/included:9.5.0`;

// Need to use this script because current directory variable is different in different shells
const dockerProcess = spawn(
  // --rm - removes container after run
  // --entrypoint /bin/bash - overrides the default entrypoint (command that is ran) of the cypress image
  // -e WIDTH=3840 -e HEIGHT=2160 - sets the width and height of the browser window, required for headless Chrome
  // -v "${__dirname}/../":/e2e - mount a root repo directory from host (your PC) to container
  // -w /e2e - makes `e2e` the working directory
  // cypress/included:9.5.0 or cookiescrumbs/cypress-m1:9.4.1 - Docker image to run
  // ./demo/entrypoint.sh - entrypoint script to run
  `docker run --rm --entrypoint /bin/bash -e WIDTH=3840 -e HEIGHT=2160 -v "${__dirname}/../":/e2e -w /e2e ${dockerImage} ./demo/entrypoint.sh`,
  {
    stdio: 'inherit',
    shell: true,
  },
);
dockerProcess.on('error', (error) => {
  process.exitCode = 1;
  console.error(`Tests run failed with error: ${error}`);
});
dockerProcess.on('exit', (code) => {
  if (code !== 0) {
    process.exitCode = code;
    console.error(`Tests run failed with code: ${code}`);
  }
});
