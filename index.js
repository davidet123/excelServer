import express from 'express'
import cors from 'cors'
// const readXlsxFile = require('read-excel-file/node')
import readXlsxFile from 'read-excel-file/node'


// const express = require('express')

const app = express()
const port = 8500

// const hoja = "CREVILLENT"
app.use(cors())

app.get("/excel/:pagina", async (req, res) => {
  // File path.
  // let data = []
  // console.log("Test")
  // readXlsxFile('./assets/missa.xlsx').then((rows) => {
  //   // console.log(rows)
  //   data.push(rows)
  // })
  // .then(() => res.send(data))
  console.log(req.params.pagina)
  const hoja = req.params.pagina
  try{
    const data = await  readXlsxFile('./assets/missa.xlsx', {sheet: hoja})
    res.send(data)

  } catch (error) {
    res.send({error: error.message})

    console.log(error.message)
  }
  
})

app.listen(port, () => {
  console.log("Escuchando en el puerto " + port)
})