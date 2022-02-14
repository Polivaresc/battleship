function shipFactory (len, hit = null, sink = false) {

    return { len, hit, sink }
}

module.exports = {
    shipFactory
}