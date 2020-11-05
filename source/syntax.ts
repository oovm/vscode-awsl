import { including } from './utils'
import { repository, raw } from './elements'


export const syntax = {
    name: 'notedown',
    scopeName: 'source.notedown',
    version: 'v0.2.0',
    uuid: '',
    information_for_contributors: [
        'aster: galaster@foxmail.com',
    ],
    patterns: [
        including('Program'),
    ],
    repository: raw,
}

