import express from 'express';
const app = express()
const PORT = process.env.PORT || 3000 || process.env.port;

app.get('/profile', (req, res) => {
  res.send("Hi, I am Syed Aun Muhammad")
})
app.get('/home', (req, res) => {
    res.send('here is your home')
})
app.get('/', (req, res) => {
    res.send('Hello Ai and Chatbot members')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})