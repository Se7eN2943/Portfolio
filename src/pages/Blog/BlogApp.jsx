import { useEffect, useState } from 'react'
import { Pagination, Spin, Alert } from 'antd'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { ARTICLES, ARTICLE } from '../../redux/reducers/blogReducer'

import BlogAPI from './services/services'
import Header from './components/Header/Header'
import ArticleList from './components/ArticleList/ArticleList'
import AlloneArticle from './components/AlloneArticle/AlloneArticle'
import SignIn from './components/SignIn/SignIn'
import SingUp from './components/SingUp/SingUp'
import Private from './components/HOC/Private'
import OnAutoris from './components/HOC/OnAutoris'
import CreateArticle from './components/CreateArticle/CreateArticle'
import EditProfile from './components/EditProfile/EditProfile'
import EditArticle from './components/EditArticle/EditArticle'

import './BlogApp.scss'
import './components/Header/Header.scss'
import './components/Article/Article.scss'
import './components/Forms/AccountForms.scss'

const blog = new BlogAPI()

function BlogApp() {
  const dispatch = useDispatch()
  const { articlesCount, token } = useSelector((state) => state.blogReducer)
  const [page, setPage] = useState(1)
  const [load, setLoad] = useState(false)
  const [onLoad, setOnLoad] = useState(true)

  const getAllArticles = async (page) => {
    setLoad(true)
    await blog.getArticles(page, token).then((articles) => {
      if (!articles) return setOnLoad(false)
      dispatch(ARTICLES(articles))
      setOnLoad(true)
    })
    return setLoad(false)
  }

  const getOneArticle = async (slug, token) => {
    setLoad(true)
    await blog.getArticle(slug, token).then((article) => {
      if (!article) return setOnLoad(false)
      dispatch(ARTICLE(article))
      localStorage.setItem('article', JSON.stringify(article))
      setOnLoad(true)
    })
    return setLoad(false)
  }

  useEffect(() => {
    getAllArticles()
  }, [])

  return (
    <div className="blog">
      <Header getAllArticles={getAllArticles} />
      {load ? (
        <Spin />
      ) : (
        <Routes>
          <Route
            path="/articles"
            element={
              <>
                {!onLoad ? (
                  <Alert
                    message="info Text"
                    description="info Description info Description info Description"
                    type="info"
                  />
                ) : (
                  <ArticleList getOneArticle={getOneArticle} />
                )}
                {!load && (
                  <Pagination
                    showSizeChanger={false}
                    pageSize={20}
                    onChange={(page) => {
                      setPage(page)
                      getAllArticles((page - 1) * 20)
                    }}
                    size="small"
                    total={articlesCount}
                    current={page}
                  />
                )}
              </>
            }
          />
          <Route path="/" element={<Navigate to="articles" replace />} />
          <Route
            path="articles/:slug"
            element={
              <>
                {!onLoad ? (
                  <Alert
                    message="info Text"
                    description="info Description info Description info Description"
                    type="info"
                  />
                ) : (
                  <AlloneArticle
                    getAllArticles={getAllArticles}
                    getOneArticle={getOneArticle}
                  />
                )}
              </>
            }
          />
          <Route
            path="sign-in"
            element={
              <OnAutoris>
                <SignIn />
              </OnAutoris>
            }
          />
          <Route
            path="articles/:slug/edit"
            element={
              <Private>
                <EditArticle getOneArticle={getOneArticle} />
              </Private>
            }
          />
          <Route
            path="sign-up"
            element={
              <OnAutoris>
                <SingUp />
              </OnAutoris>
            }
          />
          <Route
            path="profile"
            element={
              <Private>
                <EditProfile />
              </Private>
            }
          />
          <Route
            path="new-article"
            element={
              <Private>
                <CreateArticle getOneArticle={getOneArticle} />
              </Private>
            }
          />
        </Routes>
      )}
    </div>
  )
}

export default BlogApp
