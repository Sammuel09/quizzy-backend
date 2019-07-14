// import express from 'express';
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json('Welcome to Quizzy Backend')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

// export default app
