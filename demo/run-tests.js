/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const { spawn } = require('child_process');

const args = process.argv.slice(2);
const isCi = args.includes('--ci');

const DOCKER_COMMAND = `docker run --rm --add-host host.docker.internal:host-gateway -v "${__dirname}/../":/e2e -w /e2e/demo cypress/included:9.5.0 --browser chrome --headless `;
const DOCKER_COMMAND_CI = `docker run --rm --entrypoint /bin/bash -e CYPRESS_baseUrl=http://localhost:5000/iTwinUI-layouts/ -v "${__dirname}/../":/e2e -w /e2e cypress/included:9.5.0 ./demo/entrypoint.sh`;

const dockerProcess = spawn(isCi ? DOCKER_COMMAND_CI : DOCKER_COMMAND, {
  stdio: 'inherit',
  shell: true,
});
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
