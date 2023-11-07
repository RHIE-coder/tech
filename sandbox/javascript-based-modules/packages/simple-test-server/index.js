const express = require('express')
const app = express()
const port = 3000

let count = 0

function sleep(millisecond) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },millisecond)
  })
}

app.get('/', async (req, res) => {
  console.log("called : " + ++count)
  await sleep(2000)
  res.send('Hello World! : ' + count)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})