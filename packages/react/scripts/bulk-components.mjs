import fs from 'fs'
import path from 'path'

const srcDir = 'src/components'
const destDir = 'src/ui'

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir)
}

fs.readdir(srcDir, (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  files.forEach((file) => {
    const srcFile = path.join(srcDir, file)
    const destDirName = path.basename(file, path.extname(file))
    const destDirPath = path.join(destDir, destDirName)
    const destFile = path.join(destDirPath, file)
    const destIndexFile = path.join(destDirPath, 'index.ts')
    const destRootIndexFile = path.join(destDir, 'index.ts')

    if (!fs.existsSync(destDirPath) && !destDirPath.includes('index')) {
      console.info(destDirPath)
      // Directory does not exist, create it
      fs.mkdirSync(destDirPath)
    }

    if (fs.existsSync(srcFile) && path.extname(srcFile) === '.tsx') {
      // Copy .tsx file to destination directory
      fs.copyFileSync(srcFile, destFile)

      // Create index.ts file on component root
      const indexContent = `export * from './${destDirName}'`
      fs.writeFileSync(destIndexFile, indexContent)

      const rootIndexContent = `export * from './${destDirName}/${destDirName}'\n`
      fs.appendFileSync(destRootIndexFile, rootIndexContent)
    }
  })
})
