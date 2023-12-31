const http = require('node:http');
const os = require('node:os');

function getOsInfo() {
    
    const osInfo = {
        arch: os.arch(),
        cpus: os.cpus(),
        freemem: os.freemem() / 1024 / 1024 / 1024,
        hostname: os.hostname(),
        platform: os.platform(),
        userinfo: os.userInfo()
    }
    return JSON.stringify(osInfo);
}

const server = http.createServer((req, res) => {
    res.end(getOsInfo());
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server is running on port', server.address().port, "got to", );
});

