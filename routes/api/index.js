const route = require('express').Router()

route.use('/queries', require('./queries'))

exports = module.exports = {
    route
}