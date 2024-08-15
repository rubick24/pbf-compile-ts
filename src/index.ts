import { writeFileSync } from 'fs'
import { sync } from 'resolve-protobuf-schema'
import { compileRaw } from './compile'

const schema = sync('./sample.proto')
const tsCodeStr = compileRaw(schema)
writeFileSync('./output.ts', tsCodeStr)
