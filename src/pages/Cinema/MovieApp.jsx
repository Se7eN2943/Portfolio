import { Component } from 'react'
import { Input, Spin, Alert, Tabs } from 'antd'

import CinemaService, { ProviderGeners } from '../../services/MovieApp/services'
import { mutationData, debounce } from '../../utils/util'
import genres from '../../services/MovieApp/localApi/genres.json'
import movieList from '../../services/MovieApp/localApi/populare.json'

import FilmCardList from './components/FilmCardList/FilmCardList'

import './components/FilmCard/FilmCard.scss'
import './MovieApp.scss'
import './components/FilmCardList/FilmCardList.scss'
import './components/FilmCard/FilmCardGenre/FilmCardGenre.scss'

export default class MovieApp extends Component {
  constructor() {
    super()
    this.debounce = debounce(this.movie, 500)
  }

  movies = new CinemaService()

  state = {
    session: '',
    genres: [],
    items: [],
    value: '',
    loaded: false,
    error: false,
    onloaded: true,
    totalRes: 1,
    pages: 1
  }

  componentDidMount = async () => {
    await this.movies.genresList().then((res) => {
      console.log(res)
      if (!res) this.setState({ genres: genres.genres })
      else this.setState({ genres: res.genres })
    })
    sessionStorage.getItem('itemsFor') !== null &&
      this.setState({
        itemsFor: JSON.parse(sessionStorage.getItem('itemsFor'))
      })
    this.movie()
    await this.movies
      .createGestSession()
      .then((session) => this.setState({ session: session.guest_session_id }))
  }

  movie = (inquiryType, pg) => {
    const { value, onloaded } = this.state
    if (inquiryType === 'getRate' || onloaded || value.trim().length !== 0) {
      let url
      let inquiry
      if (onloaded) url = 'movie/popular'
      else url = 'search/movie'
      this.setState({ loaded: false, error: false })
      inquiryType === 'getRate'
        ? (inquiry = this.movies.loadGestSessionRateMovies(this.state.session))
        : (inquiry = this.movies.apiResurses(url, value, pg))
      inquiry
        .then((movieOBJ) => {
          if (!movieOBJ) movieOBJ = movieList
          const elements = mutationData(movieOBJ)
          return this.setState({
            items: elements,
            loaded: true,
            totalRes: movieOBJ.total_results,
            pages: movieOBJ.page
          })
        })
        .catch(this.onError)
    } else return this.setState({ items: [], loaded: true })
  }

  onChange = (event) => {
    this.setState({ value: event.target.value, onloaded: false })
  }

  onError = (err) => {
    console.error(err)
    this.setState({ loaded: true, error: true })
  }

  onChangeFavorit = (id, stars) => {
    this.movies.rateMovie(stars, id, this.state.session)
    const element = this.state.items.find((item) => item.key === id)
    const localItems = JSON.parse(sessionStorage.getItem('items'))
    if (localItems !== null) {
      if (localItems.find((item) => item.key === id)) {
        const mutLocalItems = localItems.map((item) => {
          if (item.key === id) item.count = stars
          return item
        })
        sessionStorage.setItem('items', JSON.stringify(mutLocalItems))
      } else {
        element.count = stars
        sessionStorage.setItem(
          'items',
          JSON.stringify(localItems.concat([element]))
        )
      }
    } else {
      element.count = stars
      sessionStorage.setItem('items', JSON.stringify([element]))
    }
  }

  render() {
    const { TabPane } = Tabs
    const { error, loaded, items, onloaded, totalRes, genres } = this.state
    return (
      <ProviderGeners value={genres}>
        <main className="filmCards">
          <Tabs
            onChange={(activeKey) =>
              activeKey == '2' ? this.movie('getRate') : this.movie()
            }
            defaultActiveKey="1"
            centered
          >
            <TabPane tab="??????????" key="1">
              <Input
                autoFocus
                placeholder="?????????????? ?????????????? ???????????????? ????????????"
                type="text"
                value={this.state.value}
                onInput={this.debounce}
                onChange={this.onChange}
              />
              {onloaded && <h1>???????????????????? ??????????????</h1>}
              {error && (
                <Alert
                  message="???? ???????????????????? ?????????????????? ???????????? =("
                  type="error"
                  showIcon
                />
              )}
              {totalRes === 0 && (
                <Alert message="???????????? ???? ??????????????" type="info" showIcon />
              )}
              {!loaded && <Spin />}
              {!error && loaded && (
                <FilmCardList
                  card={items}
                  onChangeFavorit={this.onChangeFavorit}
                />
              )}
              {!(loaded && error) && (
                <FilmCardList
                  card={items}
                  onChangeFavorit={this.onChangeFavorit}
                />
              )}
            </TabPane>
            <TabPane tab="??????????????????" key="2">
              {!loaded && <Spin />}
              {!(loaded && error) && (
                <FilmCardList
                  card={items}
                  onChangeFavorit={this.onChangeFavorit}
                />
              )}
            </TabPane>
          </Tabs>
        </main>
      </ProviderGeners>
    )
  }
}
