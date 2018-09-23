
const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
    fs.writeFileSync('/Users/iradnazmi/bloc/simple-http-node-server/hello-world.txt', 'Hello to this great world')
    response.end(`Handling a request on port ${port}`)
};

const server = http.createServer(requestHandler);
server.listen(port,(err) => {
    if (err) {
        return console.log(`You have an error: $(err)`);
    }
    console.log(`Server is listening on ${port}`);
});