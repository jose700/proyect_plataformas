const server = require('./src/app');

server.listen(process.env.PORT, () => {
    console.log(`Sistema running on port ${process.env.PORT}`);
});