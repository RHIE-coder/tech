const axios = require('axios');
const https = require('https');

// const team = "Barcelona";
// const year = 2011;

const team = "Chelsea"
const year = 2014

async function getData(team, year) {

    let total = 0;

    axios.defaults.baseURL="http://localhost:3000";
    // axios.defaults.httpAgent= new require('http').Agent({
    //     keepAlive:true,
    //     scheduling:"fifo",
    //     maxFreeSockets:5000,
    //     keepAliveMsecs: 2500,
    // })


    const tasks = []

    for(let i = 0; i < 1000; i++) {
        
        // tasks.push(async function(){
        //     console.log(i)
        //     const instance = axios.create()
        //     try {
        //         // const res = (await axios({
        //         const res = (await instance({
        //             method:`GET`,
        //             url:`http://localhost:3000`,
        //         })).data
        //         return res
        //     } catch(e){
        //         // console.log(e.message)
        //     }
        // }())
        await sleep(1);
        (async()=>{
            const instance = axios.create()
            const r = await instance.request({
                url:"/",
            })
            console.log(r.data)
        })()
        
    } 

    console.log(" ------ ", tasks.length)
    console.log(await Promise.all(tasks))
    console.log(total) 
}

function sleep(millisecond) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },millisecond)
  })
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