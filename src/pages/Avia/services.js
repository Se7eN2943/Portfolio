export default class AviaSales {
  getSearchId = async () => {
    const res = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!res.ok) throw new Error('Что то пошло не так')
    return await res.json()
  }

  getTickets = async (id) => {
    try {
      const res = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`
      )
      if (!res.ok) throw new Error('Что то пошло не так')
      return await res.json()
    } catch (err) {
      return false
    }
  }
}
