const fetchHistory = async () => {
  const response = await fetch('http://localhost:3001/api/commits')
  const json = await response.json()

  return json
}

export default fetchHistory
