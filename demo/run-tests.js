/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const { spawn } = require('child_process');

const dockerProcess = spawn(
  `docker run --rm -it -v "${__dirname}/../":/e2e -w /e2e/demo cypress/included:9.5.0 --browser chrome --headless`,
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
