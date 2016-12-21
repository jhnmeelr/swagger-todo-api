'use strict'

var client = require('../helpers/es').client;

function GetAllTodos(req, res) {
    client.search({
        index: 'todo',
        type: 'todo',
        q: '*',
        _sourceInclude: 'todo_id, todo, completed, tags, author, completeddate, duedate'
    }, function(error, response) {
        if (error) {
            res.end(JSON.stringify(error));
        } else {
            var results = [];
            results = response.hits.hits.map(function(hit) { return hit._source });
            console.log(results);
            res.header('Content-Type', 'application/json');
            res.end(JSON.stringify(results));
        }
    });
}

module.exports = {
    GetAllTodos: GetAllTodos
};