const http = require("http");
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        const data = await fs.readFile('./html.html')
        res.end(data);
    } catch (error) {
        console.error(error);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(error.message);
    }

})
    .listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 실행중입니다.');
})

server.on('error', (error) => {
    console.log(error);
})