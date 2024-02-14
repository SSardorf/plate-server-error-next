This is a reproduction that showcases the error of trying to access `createPlateEditor` from the serverside in a nextjs project

## How to reproduce

1. Clone this repository
2. Run `pnpm install`
3. Run `pnpm dev`
4. Open `http://localhost:3000/api/test` in your browser
5. You should see the following error in the terminal

```
node_modules/.pnpm/jotai-x@1.2.1_@types+react@18.2.55_jotai@2.6.4_react@18.2.0/node_modules/jotai-x/dist/index.mjs (90:37) @ eval
 ⨯ TypeError: (0 , react__WEBPACK_IMPORTED_MODULE_1__.createContext) is not a function
    at eval (webpack-internal:///(rsc)/./node_modules/.pnpm/jotai-x@1.2.1_@types+react@18.2.55_jotai@2.6.4_react@18.2.0/node_modules/jotai-x/dist/index.mjs:98:90)
    at (rsc)/./node_modules/.pnpm/jotai-x@1.2.1_@types+react@18.2.55_jotai@2.6.4_react@18.2.0/node_modules/jotai-x/dist/index.mjs (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/vendor-chunks/jotai-x@1.2.1_@types+react@18.2.55_jotai@2.6.4_react@18.2.0.js:20:1)
    at __webpack_require__ (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/webpack-runtime.js:33:42)
    at eval (webpack-internal:///(rsc)/./node_modules/.pnpm/@udecode+plate-core@30.1.2_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_scheduler@0.23._sd46m5is6bklfvoy3f25ns6iau/node_modules/@udecode/plate-core/dist/index.mjs:203:65)
    at (rsc)/./node_modules/.pnpm/@udecode+plate-core@30.1.2_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_scheduler@0.23._sd46m5is6bklfvoy3f25ns6iau/node_modules/@udecode/plate-core/dist/index.mjs (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/vendor-chunks/@udecode+plate-core@30.1.2_@types+react@18.2.55_react-dom@18.2.0_react@18.2.0_scheduler@0.23._sd46m5is6bklfvoy3f25ns6iau.js:20:1)
    at __webpack_require__ (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/webpack-runtime.js:33:42)
    at eval (webpack-internal:///(rsc)/./app/api/test/route.ts:5:79)
    at (rsc)/./app/api/test/route.ts (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/app/api/test/route.js:62:1)
    at __webpack_require__ (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/webpack-runtime.js:33:42)
    at eval (webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftest%2Froute&page=%2Fapi%2Ftest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest%2Froute.ts&appDir=%2FUsers%2Fssardorf%2Fdev%2Frepro%2Fplate-server-error-next%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fssardorf%2Fdev%2Frepro%2Fplate-server-error-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!:17:129)
    at (rsc)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftest%2Froute&page=%2Fapi%2Ftest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftest%2Froute.ts&appDir=%2FUsers%2Fssardorf%2Fdev%2Frepro%2Fplate-server-error-next%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fssardorf%2Fdev%2Frepro%2Fplate-server-error-next&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/app/api/test/route.js:52:1)
    at __webpack_require__ (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/webpack-runtime.js:33:42)
    at __webpack_exec__ (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/app/api/test/route.js:72:39)
    at /Users/ssardorf/dev/repro/plate-server-error-next/.next/server/app/api/test/route.js:73:2047
    at __webpack_require__.X (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/webpack-runtime.js:168:21)
    at /Users/ssardorf/dev/repro/plate-server-error-next/.next/server/app/api/test/route.js:73:47
    at Object.<anonymous> (/Users/ssardorf/dev/repro/plate-server-error-next/.next/server/app/api/test/route.js:76:3)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Module.require (node:internal/modules/cjs/loader:1115:19)
    at mod.require (/Users/ssardorf/dev/repro/plate-server-error-next/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/require-hook.js:65:28)
    at require (node:internal/modules/helpers:130:18)
    at requirePage (/Users/ssardorf/dev/repro/plate-server-error-next/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/require.js:109:84)
    at /Users/ssardorf/dev/repro/plate-server-error-next/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/load-components.js:74:84
    at async loadComponentsImpl (/Users/ssardorf/dev/repro/plate-server-error-next/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/load-components.js:74:26)
    at async DevServer.findPageComponentsImpl (/Users/ssardorf/dev/repro/plate-server-error-next/node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/next-server.js:675:36) {
  page: '/api/test'
}
```
