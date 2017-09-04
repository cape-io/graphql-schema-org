import { outputFileSync } from 'fs-extra'
import fieldTxt from './properties'
import typeTxt from './types'

outputFileSync('./src/index.js', fieldTxt + typeTxt)
