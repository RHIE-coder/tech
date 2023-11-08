const axios = require('axios');
const https = require('https');

// const team = "Barcelona";
// const year = 2011;

const team = "Chelsea"
const year = 2014

async function getData(team, year) {

    let total = 0;


    axios.defaults.baseURL="http://localhost:3000";
    axios.defaults.httpAgent= new require('http').Agent({
        keepAlive:true,
        scheduling:"fifo",
        maxFreeSockets:5000,
    })

    const instance = axios.create()


    const tasks = []

    for(let i = 0; i < 3000; i++) {
        instance.request({
            url:"/",
        })
        // instance.request({
        //     url: "/" 
        // }).then(()=>{
        // tasks.push(i)
        //     total += 1
        // })
    } 

    console.log(" ------ ", tasks.length)
    console.log(total) 
}

async function main(){
    const start = new Date().getTime()
    await getData(team, year)
    const end = new Date().getTime()
    return `latency: ${(end-start)}`
}

main()
.then(console.log)
// .then(()=>console.log(axios))