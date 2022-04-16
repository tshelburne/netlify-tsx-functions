### Environment

```
timshelburne@MacBook-Pro: ~/Projects/issue-repro/netlify-tsx-functions (master)
$ node -v
v17.9.0

timshelburne@MacBook-Pro: ~/Projects/issue-repro/netlify-tsx-functions (master) [?]
$ npm -v
8.6.0

timshelburne@MacBook-Pro: ~/Projects/issue-repro/netlify-tsx-functions (master) [?]
$ yarn -v
1.22.15
```

### Testing

1. `yarn install`
2. `yarn netlify dev`
3. Load the endpoint for function "working" (no tsx) and see the response
4. Load the endpoint for function "broken" (tsx) and see the process die


### Error

```
timshelburne@MacBook-Pro: ~/Projects/issue-repro/netlify-tsx-functions (master) [?]
$ yarn netlify dev
yarn run v1.22.15
$ /Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/.bin/netlify dev
◈ Netlify Dev ◈
◈ Ignored general context env var: LANG (defined in process)
◈ Ignored general context env var: LC_ALL (defined in process)
◈ No app server detected. Using simple static server
◈ Unable to determine public folder to serve files from. Using current working directory
◈ Setup a netlify.toml file with a [dev] section to specify your dev server settings.
◈ See docs at: https://cli.netlify.com/netlify-dev#project-detection
◈ Running static server from "netlify-tsx-functions"
◈ Loaded function broken http://localhost:59277/.netlify/functions/broken.
◈ Loaded function working http://localhost:59277/.netlify/functions/working.
◈ Functions server is listening on 59278

◈ Static server listening to 59276

   ┌──────────────────────────────────────────────────┐
   │                                                  │
   │   ◈ Server now ready on http://localhost:59277   │
   │                                                  │
   └──────────────────────────────────────────────────┘

 > src/functions/broken.ts:2:25: error: Could not resolve "../emails/html"
    2 │ import welcomeEmail from '../emails/html'
      ╵                          ~~~~~~~~~~~~~~~~

Request from ::1: GET /.netlify/functions/working
Response with status 200 in 1024 ms.
Request from ::1: GET /.netlify/functions/broken
Error: Build failed with 1 error:
src/functions/broken.ts:2:25: error: Could not resolve "../emails/html"
    at failureErrorWithLog (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:1519:15)
    at /Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:1201:28
    at runOnEndCallbacks (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:991:63)
    at buildResponseToResult (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:1199:7)
    at /Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:1306:14
    at /Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:609:9
    at handleIncomingPacket (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:714:9)
    at Socket.readFromStdout (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:576:7)
    at Socket.emit (node:events:527:28)
    at Socket.emit (node:domain:475:12) {
  errors: [
    {
      detail: undefined,
      location: [Object],
      notes: [],
      pluginName: '',
      text: 'Could not resolve "../emails/html"'
    }
  ],
  warnings: [],
  customErrorInfo: {
    type: 'functionsBundling',
    location: { bundler: 'esbuild', functionName: 'broken', runtime: 'js' }
  }
}
Error: Build failed with 1 error:
src/functions/broken.ts:2:25: error: Could not resolve "../emails/html"
    at failureErrorWithLog (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:1519:15)
    at /Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:1201:28
    at runOnEndCallbacks (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:991:63)
    at buildResponseToResult (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:1199:7)
    at /Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:1306:14
    at /Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:609:9
    at handleIncomingPacket (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:714:9)
    at Socket.readFromStdout (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/@netlify/esbuild/lib/main.js:576:7)
    at Socket.emit (node:events:527:28)
    at Socket.emit (node:domain:475:12) {
  errors: [
    {
      detail: undefined,
      location: [Object],
      notes: [],
      pluginName: '',
      text: 'Could not resolve "../emails/html"'
    }
  ],
  warnings: [],
  customErrorInfo: {
    type: 'functionsBundling',
    location: { bundler: 'esbuild', functionName: 'broken', runtime: 'js' }
  }
}

/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/netlify-redirector/lib/redirects.js:116
      throw ex;
      ^
abort({"errors":[{"location":{"column":25,"file":"src/functions/broken.ts","length":16,"line":2,"lineText":"import welcomeEmail from '../emails/html'","namespace":"","suggestion":""},"notes":[],"pluginName":"","text":"Could not resolve \"../emails/html\""}],"warnings":[],"customErrorInfo":{"type":"functionsBundling","location":{"bundler":"esbuild","functionName":"broken","runtime":"js"}}}) at Error: 
    at jsStackTrace (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/netlify-redirector/lib/redirects.js:1070:13)
    at stackTrace (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/netlify-redirector/lib/redirects.js:1087:12)
    at process.abort (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/netlify-redirector/lib/redirects.js:8502:44)
    at process.emit (node:events:527:28)
    at process.emit (/Users/timshelburne/Projects/issue-repro/netlify-tsx-functions/node_modules/source-map-support/source-map-support.js:516:21)
    at emit (node:internal/process/promises:140:20)
    at processPromiseRejections (node:internal/process/promises:274:27)
    at processTicksAndRejections (node:internal/process/task_queues:97:32)
(Use `node --trace-uncaught ...` to show where the exception was thrown)

Node.js v17.9.0
error Command failed with exit code 7.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```