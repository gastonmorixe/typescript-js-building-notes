#!/usr/bin/env node

require("esbuild")
  .build({
    bundle: true,
    minify: true,
    sourcemap: true,
    jsx: "automatic",
    entryPoints: ["src/test2.ts"],
    // outfile: "build/build.esbuild.js",
    outdir: "build",
    target: ["node14", "chrome100", "firefox57", "safari15", "edge16"],
    loader: { ".jpg": "file" },
    // Anazlye https://esbuild.github.io/api/#analyze
    // metafile: true,
    //
    // watch
    // watch: true,
    // watch: {
    //   onRebuild(error, result) {
    //     if (error) console.error("watch build failed:", error)
    //     else console.log("watch build succeeded:", result)
    //   },
    // },
    //
    // node: https://esbuild.github.io/getting-started/#bundling-for-node
    // platform: 'node',
    // target: ['node10.4'],
    //
    // spitting https://esbuild.github.io/api/#splitting
    // splitting: true,
    // outdir: 'out',
    // format: 'esm',
  })
  // eslint-disable-next-line no-unused-vars
  .then((result) => {
    // console.log("watching...")
  })
  .catch(() => process.exit(1))
