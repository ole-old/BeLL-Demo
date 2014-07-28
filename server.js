
var sys = require('sys')
var exec = require('child_process').exec
function puts(error, stdout, stderr) { sys.puts(stdout) } 

/*
 * Set up app server
 */

var app = require('express')()
var server = require('http').Server(app)
app.use(require('express').bodyParser())



/*
 * Express routes
 */

app.get('/reset', function(req, res) {
  exec('rm -r /var/lib/couchdb/1.2.0; cp -r /var/lib/couchdb/snapshot /var/lib/couchdb/1.2.0;', puts)
})

server.listen(8000)
l.g('server now listening at port 8000')

