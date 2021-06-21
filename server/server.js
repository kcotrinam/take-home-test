const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

const fetchCommits = async () => {
  const response = await axios.get(
    `https://api.github.com/repos/kcotrinam/take-home-test/commits`
  )
  return response.data
}

app.get('/api/commits', async (_, response) => {
  try {
    const res = await fetchCommits()

    response.send(res)
  } catch (error) {
    response.send(error)
  }
})

const PORT = 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
