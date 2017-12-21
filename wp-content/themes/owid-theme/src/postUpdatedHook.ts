import {WordpressBaker} from './WordpressBaker'
import * as parseArgs from 'minimist'
const argv = parseArgs(process.argv.slice(2))

async function main(database: string, wordpressUrl: string, wordpressDir: string, email: string, name: string, postSlug: string) {
    console.log(database, wordpressUrl, wordpressDir, email, name, postSlug)
    const baker = new WordpressBaker({
        database: database,
        wordpressUrl: wordpressUrl,
        wordpressDir: wordpressDir,
        outDir: "/Users/mispy/wp-static"
    })

    await baker.bakeAll()
    await baker.deploy(email, name, `Updating ${postSlug}`)
    baker.end()
}

main(argv._[0], argv._[1], argv._[2], argv._[3], argv._[4], argv._[5])