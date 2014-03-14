{
    baseUrl: '.',
    name: 'almond.js',
    include: ["main"],
    mainConfigFile: "config.js",
    out: 'main-built.js',
    wrap: {
        startFile: "start.frag",
        endFile: "end.frag"
    },
    optimize: 'none'
}
