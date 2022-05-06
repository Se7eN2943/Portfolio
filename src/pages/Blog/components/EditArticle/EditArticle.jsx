import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { ARTICLE } from '../../../../redux/reducers/blogReducer'
import CreateArticle from '../CreateArticle/CreateArticle';
import BlogAPI from '../../services/services';

const blog = new BlogAPI();

function EditArticle() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { username, token, article } = useSelector((state) => state.blogReducer)
  useEffect(() => {
    blog.getArticle(slug, token).then((article) => {
      dispatch(ARTICLE(article));
      localStorage.setItem('article', JSON.stringify(article));
    });
  }, []);

  username !== article.author.username && navigate('/articles')

  return username === article.author.username ? <CreateArticle editing /> : null
}

export default EditArticle;


