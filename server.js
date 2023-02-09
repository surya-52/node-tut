const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Welcome to home page');
  }
  else if(req.url === '/about'){
    res.end('This is about page');
  }
  else {
    res.end(`
    <h1>Oops</h1>
    <p>go back to home page</p>
    <a href="/">Home</a>
    `
  )}
})

server.listen(5000);