const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/adicionar/:valor1/:valor2/', (req, res) => {
  let v1 = parseFloat(req.params.valor1)
  let v2 = parseFloat(req.params.valor2)
  let rsoma = v1+v2
  res.send(`<h2>${rsoma}</h2>`)
})

app.get('/subtrair/:valor1/:valor2/', (req, res) => {
  let v1 = parseFloat(req.params.valor1)
  let v2 = parseFloat(req.params.valor2)
  let rsub = v1-v2
  res.send(`<h2>${rsub}</h2>`)
  
})

app.get('/multiplicar/:valor1/:valor2/', (req, res) => {
  let v1 = parseFloat(req.params.valor1)
  let v2 = parseFloat(req.params.valor2)
  let rmult = v1*v2
  res.send(`<h2>${rmult}</h2`)
})

app.get('/dividir/:valor1/:valor2/', (req, res) => {
  let v1 = parseFloat(req.params.valor1)
  let v2 = parseFloat(req.params.valor2)
  let rdiv
  
  if(v2==0){
    res.send(`
    <h2>Impossível!</h2>
    <br>
    
    
    
    `
    
    )
  }
  else{
    rdiv = parseFloat((v1/v2).toFixed(2))
  }
  res.send(`<h2>${rdiv}</h2>`)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})