function debounce(fn, debounceTime) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), debounceTime)
  }
}

function mutationData(movieOBJ) {
  return movieOBJ.results.map((item) => {
    return {
      key: item.id,
      name: item.title,
      date: item.release_date,
      overview: item.overview,
      img: item.poster_path,
      count: item.rating,
      average: item.vote_average,
      genre: item.genre_ids
    }
  })
}

export default function setLocalHost(username, email, token, auth, image) {
  localStorage.setItem('username', username)
  localStorage.setItem('email', email)
  localStorage.setItem('token', token)
  localStorage.setItem('image', image)
  localStorage.setItem('auth', auth)
}

export { mutationData, debounce, setLocalHost }
