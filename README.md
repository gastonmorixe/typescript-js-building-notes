# README

Using [cli](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```bash
# Run a compile based on a backwards look through the fs for a tsconfig.json
tsc

# Emit JS for just the index.ts with the compiler defaults
tsc index.ts

# Emit JS for any .ts files in the folder src, with the default settings
tsc src/*.ts

# Emit files referenced in with the compiler settings from tsconfig.production.json
tsc --project tsconfig.production.json

# Emit d.ts files for a js file with showing compiler options which are booleans
tsc index.js --declaration --emitDeclarationOnly

# Emit a single .js file from two files via compiler options which take string arguments
tsc app.ts util.ts --target esnext --outfile index.js
```

Config settings:

```bash
module: # none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, esnext, node16, or nodenext. CommonJS if target is ES3 or ES5, ES6/ES2015 otherwise.
moduleResolution:  # classic, node, node16, or nodenext. Classic if module is AMD, UMD, System or ES6/ES2015. Matches if module is node12 or nodenext. Node otherwise.
noEmit: # Disable emitting files from a compilation.
noEmitOnError: # Disable emitting files if any type checking errors are reported.
noLib: # Disable including any library files, including the default lib.d.ts.
noResolve: # Disallow imports, requires or <reference>s from expanding the number of files TypeScript should add to a project.
outFile: # Specify a file that bundles all outputs into one JavaScript file. If declaration is true, also designates a file that bundles all .d.ts output.
skipDefaultLibCheck: # Skip type checking .d.ts files that are included with TypeScript.
skipLibCheck: # Skip type checking all .d.ts files.
target: # Set the JavaScript language version for emitted JavaScript and include compatible library declarations. es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, or esnext. Default ES3.

typeRoots: # Specify multiple folders that act like ./node_modules/@types.
types: # Specify type package names to be included without being referenced in a source file.


```

## Bundle

How to bundle in one file read this

- [Typescript compile to single file](https://stackoverflow.com/questions/34474651/typescript-compile-to-single-file)

## FAQ

- What does **esnext** mean?

Esnext means that by default, esbuild will assume *all of the latest JavaScript and CSS features are supported*.

- What is target?

Read about [target here](https://esbuild.github.io/api/#target)

- What is considered global?

In TypeScript, just as in ECMAScript 2015, [any file containing a top-level import or export is considered a module](https://stackoverflow.com/questions/64034534/why-does-typescript-cannot-redeclare-block-scoped-variable). Conversely, **a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).**

- Error 'Cannot redeclare block-scoped variable' in unrelated files

TL;DR Just write `export {}` in the outermost scope of your files. [See this in Stackoverflow](https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files)

In the browser, this is easy - you should be able to use a `<script type="module">` tag and you'll be able to use modules.

## Reference Types

[This directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-lib-) allows a file to explicitly include an existing built-in lib file.

```typescript
/// <reference no-default-lib="true"/>
```

This directive marks a file as a default library. You will see this comment at the top of lib.d.ts and its different variants.

This directive instructs the compiler to not include the default library (i.e. lib.d.ts) in the compilation. The impact here is similar to passing noLib on the command line.

Also note that when passing skipDefaultLibCheck, the compiler will only skip checking files with.

## Global window

- [How To Solve ReferenceError window is not defined in JavaScript](https://isotropic.co/how-to-solve-referenceerror-window-is-not-defined-in-javascript/)

- [Can I import dom types explicitly?](https://stackoverflow.com/questions/59061266/can-i-import-dom-types-explicitly)

But Using `/// <reference lib="dom" />` in a .d.ts typescript declaration file has global effects; so your entire project will end [up with the lib.dom values in global scope](https://github.com/microsoft/TypeScript/issues/33901). –
