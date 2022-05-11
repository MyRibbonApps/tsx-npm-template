import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import Ts from "rollup-plugin-typescript2"
import { string } from "rollup-plugin-string"
// import json from "@rollup/plugin-json"

export default {
  check: false,
  input: "src/index.ts",
  output: [
    {
      dir: "lib/esm",
      format: "esm"
    },
    {
      dir: "lib/cjs",
      format: "cjs"
    }
  ],
  plugins: [
    // Resolves the .babelrc file and loads it
    resolve(),
    babel({
      exclude: ["node_modules/**"]
    }),
    // Transpile typescript
    Ts(),
    // If we need to import json files
    // json({
    //   compact: true,
    // }),
    // Allow imports css
    string({
      include: "**/*.css"
    })
  ],
  // This makes it so it does not bundle it, that is the clients job
  preserveModules: true,
  // We dont want to include the react library in thhe lib, this ignore it
  external: ["react", "react-dom"]
}
