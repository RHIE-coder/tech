const axios = require('axios');


async function getData(team, year) {

    let total = 0;

    const instance = axios.create({
        baseURL: "http://localhost:3000",
        httpAgent: new require('http').Agent({
            keepAlive: true,
            scheduling: "fifo",
            maxFreeSockets: 5000,
        }),
    });

    const tasks = [];

    for (let i = 0; i < 1000; i++) {
        instance.request({
            url: "/"
        }).then(() => {
            tasks.push(i);
            total += 1;
        });
    }

    console.log(" ------ ", tasks.length);
    console.log(total);
}
exports.getData = getData;
