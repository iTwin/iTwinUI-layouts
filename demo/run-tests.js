/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const { spawn } = require('child_process');

// Need to use this script because current directory variable is different in different shells
const dockerProcess = spawn(
  // --rm - removes container after run
  // --entrypoint /bin/bash - overrides the default entrypoint (command that is ran) of the cypress image
  // -v "${__dirname}/../":/e2e - mount a root repo directory from host (your PC) to container
  // -w /e2e - makes `e2e` the working directory
  // cypress/included:9.5.0 or cookiescrumbs/cypress-m1:9.4.1 - Docker image to run
  // ./demo/entrypoint.sh - entrypoint script to run
  `docker run --rm --entrypoint /bin/bash -v "${__dirname}/../":/e2e -w /e2e itwinui/cypress:latest ./demo/entrypoint.sh`,
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
