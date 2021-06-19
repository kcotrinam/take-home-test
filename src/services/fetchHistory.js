const fetchHistory = async (
  username = 'kcotrinam',
  project = 'take-home-test'
) => {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${project}/commits`
  )
  const json = await response.json()

  return json
}

export default fetchHistory
