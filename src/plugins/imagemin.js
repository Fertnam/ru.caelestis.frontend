const fs = require('fs')
const { join } = require('path')
const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

const INPUT_DIR = 'src/assets/images'
const OUTPUT_DIR = 'public/images'

const isDirectory = (source) => fs.lstatSync(source).isDirectory()

const getDirectories = (source) =>
  fs
    .readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory)

const getDirectoriesRecursive = (source) => [
  source,
  ...getDirectories(source)
    .map(getDirectoriesRecursive)
    .reduce((a, b) => a.concat(b), []),
]

;(async () => {
  let imageDirs = []
  let counter = 0

  imageDirs = imageDirs.concat(getDirectoriesRecursive(INPUT_DIR))

  for (let i in imageDirs) {
    counter++
    const dir = imageDirs[i].replace(/\\/g, '/')
    const outPath = join(OUTPUT_DIR, dir.substr(INPUT_DIR.length), '/')

    if (!fs.existsSync(outPath)) {
      fs.mkdirSync(outPath)
      console.info(outPath + ' NOT FOUND, creating...')
    }

    try {
      await imagemin([`${dir}/*.{png,jpg,jpeg}`], {
        destination: outPath.substr(0, outPath.length - 1),
        plugins: [
          imageminPngquant({
            quality: [0.6, 0.8],
          }),
          imageminMozjpeg(),
        ],
      })

      console.info(`...${(((+i + 1) / imageDirs.length) * 100).toFixed(0)}%`)
      counter = 0
    } catch (e) {
      if (counter === 1) i--
      console.info('Error on ', dir, ':', e)
    }
  }
})()
