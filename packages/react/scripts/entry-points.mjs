import path from 'path'
import fs from 'fs'

const componentsDir = './dist/components'

// Generate the exports object
let exports = {
  './package.json': './package.json',
  './dist/styles.css': './dist/index.css',
  '.': {
    types: './dist/index.d.ts',
    import: './dist/index.esm.js',
    require: './dist/index.cjs.js',
  },
  './components': {
    types: './dist/components/index.d.ts',
    import: './dist/components/index.esm.js',
    require: './dist/components/index.cjs.js',
  },
  './lib': {
    types: './dist/lib/index.d.ts',
    import: './dist/lib/index.esm.js',
    require: './dist/lib/index.cjs.js',
  },
}

const components = getComponents(componentsDir)
exports = updateExports(componentsDir, components, exports)

// Update the package.json file
const packageJsonPath = './package.json'
// @ts-expect-error
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath))
packageJson.exports = exports
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

// Get a list of all components with an index.esm.js and index.cjs.js file
function getComponents(baseDir) {
  return fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => {
      return (
        dirent.isDirectory() &&
        fs.existsSync(path.join(baseDir, dirent.name, 'index.esm.js')) &&
        fs.existsSync(path.join(baseDir, dirent.name, 'index.cjs.js'))
      )
    })
    .map((dirent) => dirent.name)
}

function updateExports(baseDir, files, initialExports) {
  return files.reduce((accumulator, file) => {
    accumulator[`./${file}`] = {
      types: `${baseDir}/${file}/index.d.ts`,
      import: `${baseDir}/${file}/index.esm.js`,
      require: `${baseDir}/${file}/index.cjs.js`,
    }
    return accumulator
  }, initialExports)
}
