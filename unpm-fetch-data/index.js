const quantity = require('./quantity')
const distance = require('./distance')
const category = require('./category')
const md5ify   = require('md5ify')

exports.descriptions    = quantity('data/descriptions.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/descriptions.bin')))
exports.dependencies    = quantity('data/dependencies.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/dependencies.bin')))
exports.dependents      = quantity('data/dependents.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/dependents.bin')))
exports.downloads       = quantity('data/downloads.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/downloads.bin')))
exports.devDependencies = quantity('data/dev-deps.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/dev-deps.bin')))
exports.versions        = quantity('data/versions.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/versions.bin')))
exports.modified        = quantity('data/modified.bin', Float32Array, md5ify(require.resolve('@unpm/dat/data/modified.bin')))
exports.created         = quantity('data/created.bin', Float32Array, md5ify(require.resolve('@unpm/dat/data/created.bin')))
exports.readmes         = quantity('data/readmes.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/readmes.bin')))
exports.scripts         = quantity('data/scripts.bin', Uint8Array, md5ify(require.resolve('@unpm/dat/data/scripts.bin')))
exports.quality         = quantity('data/quality.bin', Uint8Array, md5ify(require.resolve('@unpm/dat/data/quality.bin')))
exports.stars           = quantity('data/stars.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/stars.bin')))
exports.sizes           = quantity('data/sizes.bin', Uint32Array, md5ify(require.resolve('@unpm/dat/data/sizes.bin')))
exports.licenses        = category('data/licenses.bin', 'data/licenses.json', md5ify(require.resolve('@unpm/dat/data/licenses.bin')))
exports.prefixes        = category('data/prefixes.bin', 'data/prefixes.json', md5ify(require.resolve('@unpm/dat/data/prefixes.bin')))
exports.lifetimes       = distance(exports.modified, exports.created, Float32Array)
