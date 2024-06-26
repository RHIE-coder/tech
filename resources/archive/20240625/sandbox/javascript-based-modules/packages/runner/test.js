const axios = require('axios');


async function getData() {

    axios.defaults.baseURL="http://localhost:8080";

    for(let i = 0; i < 10; i++) {
        (async()=>{
            const instance = axios.create()
            const r = await instance.request({
                url:"/multicheck?seq="+i,
            })
            console.log(r.data)
        })()
        
    } 

}

function sleep(millisecond) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },millisecond)
  })
}

async function main(){
    await getData()
    console.log("request done");
    sleep(100*1000)
    console.log("main is out")
}

main()
