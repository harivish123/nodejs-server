 var http = require('http');
  const server = http.createServer((req,res) =>{
      console.log(req);
      res.write("how is it!!")
  })

  server.listen(9870,'127.0.0.1',() =>{
      console.log('listing on port 9870')
  })
