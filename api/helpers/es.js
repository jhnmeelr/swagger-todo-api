'use strict'

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
});

module.exports = {
    client: client
}