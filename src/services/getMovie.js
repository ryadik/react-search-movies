const getMovie = async (text) => {
  const API_KEY = 'f45dca06'
  const DOMEN = 'http://www.omdbapi.com'

  const textQuery = text.trim().split(' ').join('+')

  const res = await fetch(`${DOMEN}/?s=${textQuery}&apikey=${API_KEY}`)

  if (!res.ok) {
    throw new Error(`${res.status}`)
  }

  return res.json()
}

export {getMovie}
