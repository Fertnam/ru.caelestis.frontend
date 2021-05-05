/* eslint-disable no-console */
;(async function () {
    const fs = require('fs')
    const { join } = require('path')
    const { default: compressor } = await import('imagemin')
    const { default: jpegCompressor } = await import('imagemin-mozjpeg')
    const { default: pngCompressor } = await import('imagemin-pngquant')

    function isDirectory(source) {
        return fs.lstatSync(source).isDirectory()
    }

    function getDirectories(source) {
        return fs
            .readdirSync(source)
            .map((name) => join(source, name))
            .filter(isDirectory)
    }

    function getDirectoriesRecursive(source) {
        return [
            source,
            ...getDirectories(source)
                .map(getDirectoriesRecursive)
                .reduce((a, b) => a.concat(b), []),
        ]
    }

    const INPUT_DIR = 'src/assets/images'
    const OUTPUT_DIR = 'public/images'

    let dirs = getDirectoriesRecursive(INPUT_DIR)

    dirs.forEach((rawDir, index) => {
        let dir = rawDir.replace(/\\/g, '/')
        let outPath = join(OUTPUT_DIR, dir.substr(INPUT_DIR.length), '/')

        if (!fs.existsSync(outPath)) {
            fs.mkdirSync(outPath)
            console.info(`${outPath} NOT FOUND, creating...`)
        }

        const COMPRESSOR_OPTIONS = {
            destination: outPath,
            plugins: [
                jpegCompressor({
                    progressive: true,
                    quality: 70,
                }),
                pngCompressor({
                    quality: [0.6, 0.8],
                }),
            ],
        }

        compressor([`${dir}/*.{png,jpg,jpeg}`], COMPRESSOR_OPTIONS)
            .then(() => {
                console.info(
                    `...${(((+index + 1) / dirs.length) * 100).toFixed(0)}%`
                )
            })
            .catch((error) => {
                console.info('Error on ', dir, ':', error)
            })
    })
})()
