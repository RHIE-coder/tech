const axios = require('axios');
const https = require('https');

// const team = "Barcelona";
// const year = 2011;

const team = "Chelsea"
const year = 2014


async function requestToServer(team, year, page) {
    const instance = axios.create()

    return (await instance({
        method:`GET`,
        url:`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team=${team}&page=${page}`,
        httpsAgent: new https.Agent({ 
            keepAlive: true,
            maxCachedSessions: 150,
        }),
    })).data
}

function sleep(millisecond) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },millisecond)
  })
}

async function getData(team, year) {
    // const client = axios({
    //     method:`GET`,
    //     // url:`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team=${team}&page=${page}`,
    //     url:`http://localhost:3000`,
    //     httpAgent: new require("http").Agent({ 
    //         keepAlive: true,
    //         maxCachedSessions: 150,
    //     }),
    //     httpsAgent: new https.Agent({ 
    //         keepAlive: true,
    //         maxCachedSessions: 150,
    //     }),
    // })

    const instance = axios.create({
        httpAgent: new require('http').Agent({ 
            keepAlive: true,
            maxCachedSessions: 1000,
            maxFreeSockets: 5000,
        }),
    })

    const tasks = []

    for(let i = 0; i < 10000; i++) {
        console.log(i)
        tasks.push(async function(){
            return (await instance({
                method:`GET`,
                url:`http://localhost:3000`,
            })).data
        })
    } 

    console.log(" ------ ", tasks.length)
    
    re = await Promise.all(tasks.map(async(elem)=>{
        return await elem()
    }))

    // const preload = await requestToServer(team,year,1);

    // if(preload.data.length === 0) {
    //     return 0;
    // }

    // const tasks = []


    // for(let i = 1; i <= preload.total_pages; i++) {
    //     tasks.push((async function(team, year, page){
    //         console.log(page)
    //         let totalGoal = 0;
    //         const res = await requestToServer(team,year, page);
    //         for(let i = 0; i < res.data.length; i++) {
    //             if(res.data[i].team1 === team) {
    //                 totalGoal += parseInt(res.data[i].team1goals, 10);
    //             }

    //             if(res.data[i].team2 === team) {
    //                 totalGoal += parseInt(res.data[i].team2goals, 10);
    //             }
    //         } 
    //         return totalGoal;
    //     })(team, year, i))
    // }

    // const result = await Promise.all(tasks)

    // console.log(result.reduce((prev, cur)=>{
    //     return prev+cur
    // }))
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