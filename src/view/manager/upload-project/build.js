export const build = `
  Cloning github.com/Masteribot/slotatk-fontend (Branch: main, Commit: aa63f7c)
  Cloning completed: 9.774s
  Analyzing source code...
  Installing build runtime...
  Build runtime installed: 3.010s
  Looking up build cache...
  Build cache downloaded [57.60 MB]: 3407.176ms
  Running "install" command: "npm install"...
  npm WARN @babel/plugin-syntax-jsx@7.14.5 requires a peer of @babel/core@^7.0.0-0
  but none is installed. You must install peer dependencies yourself.
  npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-android-arm64@12.0.8 (node_modules/@next/swc-android-arm64):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-android-arm64@12.0.8: wanted {"os":"android","arch":"arm64"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-arm64@12.0.8 (node_modules/@next/swc-darwin-arm64):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-arm64@12.0.8: wanted {"os":"darwin","arch":"arm64"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm-gnueabihf@12.0.8 (node_modules/@next/swc-linux-arm-gnueabihf):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm-gnueabihf@12.0.8: wanted {"os":"linux","arch":"arm"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-gnu@12.0.8 (node_modules/@next/swc-linux-arm64-gnu):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-gnu@12.0.8: wanted {"os":"linux","arch":"arm64"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-arm64-msvc@12.0.8 (node_modules/@next/swc-win32-arm64-msvc):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-arm64-msvc@12.0.8: wanted {"os":"win32","arch":"arm64"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-x64@12.0.8 (node_modules/@next/swc-darwin-x64):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-x64@12.0.8: wanted {"os":"darwin","arch":"x64"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-ia32-msvc@12.0.8 (node_modules/@next/swc-win32-ia32-msvc):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-ia32-msvc@12.0.8: wanted {"os":"win32","arch":"ia32"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-x64-msvc@12.0.8 (node_modules/@next/swc-win32-x64-msvc):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-x64-msvc@12.0.8: wanted {"os":"win32","arch":"x64"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-musl@12.0.8 (node_modules/@next/swc-linux-arm64-musl):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-musl@12.0.8: wanted {"os":"linux","arch":"arm64"} (current: {"os":"linux","arch":"x64"})
  npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
  npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
  removed 3 packages and audited 296 packages in 8.112s
  68 packages are looking for funding
    run "npm fund" for details
  found 3 vulnerabilities (2 moderate, 1 high)
    run "npm audit fix" to fix them, or "npm audit" for details
  Detected Next.js version: 12.0.8
  Running "npm run build"
  > slotatk@ build /vercel/path0
  > next build
  info  - Loaded env from /vercel/path0/.env
  info  - Checking validity of types...
  ./src/components/_layout/Layout/Layout.js
  55:9  Warning: Use the "next/script" component for loading third party scripts. See: https://nextjs.org/docs/messages/next-script-for-ga.  @next/next/next-script-for-ga
  ./src/components/_layout/Navbar/Header.js
  42:6  Warning: React Hook useEffect has a missing dependency: 'countJackpot'. Either include it or remove the dependency array.  react-hooks/exhaustive-deps
  info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
  info  - Creating an optimized production build...
  info  - Compiled successfully
  info  - Collecting page data...
  info  - Generating static pages (0/9)
  info  - Generating static pages (2/9)
  info  - Generating static pages (4/9)
  info  - Generating static pages (6/9)
  info  - Generating static pages (9/9)
  info  - Finalizing page optimization...
  Page                                       Size     First Load JS
  ┌ ○ /                                      7.57 kB         105 kB
  ├   └ css/2dbd3af22dfc7188.css             1.12 kB
  ├   /_app                                  0 B            97.3 kB
  ├ ○ /404                                   194 B          97.5 kB
  ├ ○ /admin                                 251 B          97.5 kB
  ├ λ /api/hello                             0 B            97.3 kB
  ├ ● /article/[slug]                        1.24 kB        98.5 kB
  ├   └ css/f023b191eea735fe.css             317 B
  ├ ○ /bonus                                 391 B          97.7 kB
  ├ ○ /contact                               1.13 kB        98.4 kB
  ├   └ css/c6112f35b466853a.css             214 B
  ├ ○ /login                                 745 B            98 kB
  └ ○ /promotions                            1.62 kB        98.9 kB
      └ css/317819402c256dc9.css             86 B
  + First Load JS shared by all              97.3 kB
    ├ chunks/framework-91d7f78b5b4003c8.js   42 kB
    ├ chunks/main-8234a521d5a9e203.js        26.7 kB
    ├ chunks/pages/_app-346ae45fa35bc0b2.js  27.7 kB
    ├ chunks/webpack-49b6f2937c9ce9f4.js     838 B
    └ css/5819f887e5cafe4b.css               25.1 kB
  λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
  ○  (Static)  automatically rendered as static HTML (uses no initial props)
  ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
  Traced Next.js server files in: 289.201ms
  Created all serverless functions in: 699.561ms
  Uploading build outputs...
  Deploying build outputs...
  Build completed. Populating build cache...
  Uploading build cache [57.25 MB]...
  Build cache uploaded: 2.299s
  Done with "package.json"`;