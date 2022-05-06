import { useSelector } from 'react-redux'

import Article from '../Article/Article'

function ArticleList({ getOneArticle }) {
  const { articles } = useSelector((state) => state.blogReducer)
  const elements = articles.map((article) => {
    return (
      <Article
        key={article.slug}
        body={article.body}
        description={article.description}
        favorited={article.favorited}
        favoritesCount={article.favoritesCount}
        slug={article.slug}
        tagList={article.tagList}
        title={article.title}
        updatedAt={article.updatedAt}
        author={article.author}
        createdAt={article.createdAt}
        getOneArticle={getOneArticle}
      />
    )
  })

  return (
    <main>
      <div className="article-list">{elements}</div>
    </main>
  )
}

export default ArticleList
