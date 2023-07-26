const express = require('express')
const {execSync} = require('child_process');
const app = express()
const port = 3000
count = 0
app.get('/', (req, res) => {
  res.set('x-start', count++)
  setTimeout(function() {
    count--
    res.set('x-stop', count).send('\n')
  }, 10*count)
})

app.get('/healthcheck', (req, res) => {
  res.send('ok\n')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
