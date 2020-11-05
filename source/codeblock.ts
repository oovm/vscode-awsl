function template(name: string, names?: string, contentName?: string, include?: string) {
    const ns = names || name
    const ctx = contentName || 'meta.embedded.block.' + name
    const src = include || 'source.' + name
    return {
        name: 'markup.codeblock.' + name,
        begin: '(?<=[`])(' + ns + ')(.*)$',
        end: '(^|\\G)(?=\\s*[`]{3,}\\s*$)',
        patterns: [
            {
                begin: '(^|\\G)(\\s*)(.*)',
                while: '(^|\\G)(?!\\s*([`]{3,})\\s*$)',
                contentName: ctx,
                patterns: [
                    {
                        include: src,
                    },
                ],
            },
        ],
    }
}


const patterns = [
    template('js'),
    template('ts'),
    template('rust', 'rs'),
    template('arc'),
]


export const metainfo = {
    scopeName: 'codeblock.notedown',
    injectionSelector: 'L:markup.codeblock.notedown',
    patterns: patterns,
}
