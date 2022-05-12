
//AviaSales
export interface AviaSalesState {
  searchId: string
  tickets: Array<AviaSalesTicket>
  ticketsFlag: boolean
  filterList: Array<string>
  sortFlag: string
  sliced: number
}

interface AviaSalesTicket {
  carrier: string,
  price: number
  segments: Array<AviaSalesTicketSegments>
}

interface AviaSalesTicketSegments {
  data: string
  destination: string
  duration: number
  origin: string
  stops: Array<string> | []
}

//Blog

export interface BlogState {
  articles: Array<BlogStateArticle>
  articlesCount: number
  article?: BlogStateArticle | {}
  auth: boolean | string
  username: string
  image: string
  token: string
  email: string
}

interface BlogStateArticle {
  author: { username: string, image: string, following: boolean }
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: Array<string>
  title: string
  updatedAt: string
}