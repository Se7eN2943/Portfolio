import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'

import { SIGNIN, SETIMG } from '../../../../redux/reducers/blogReducer'
import FormInput from '../Forms/FormInput'
import BlogAPI from '../../services/services'

const blog = new BlogAPI()

function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const dispatch = useDispatch()
  const { username, token, email, image } = useSelector(
    (state) => state.blogReducer
  )
  const [userName, setUserName] = useState(username)
  const [userEmail, setUserEmail] = useState(email)
  const [userAvatar, setUserAvatar] = useState(image)
  const navigate = useNavigate()
  const onSubmit = (data) => {
    let user
    if (data.password.trim().length === 0) {
      user = {
        user: {
          username: data.username,
          email: data.email,
          image: data.avatar
        }
      }
    } else {
      user = {
        user: {
          username: data.username,
          email: data.email,
          password: data.password,
          image: data.avatar
        }
      }
    }
    blog.putUserProfile(token, user).then(({ user }) => {
      const putUser = {
        username: user.username,
        email: user.email,
        token: user.token
      }
      dispatch(SIGNIN(putUser))
      dispatch(SETIMG(user.image))
      navigate('/articles')
    })
  }

  return (
    <div className="form shadow-box">
      <h5> Edit Profile </h5>
      <form className="form_form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          onInput={(e) => setUserName(e.target.value)}
          value={userName}
          errors={errors}
          placeholder="Username"
          name="username"
          label="Username"
          {...register('username', {
            required: true
          })}
        />
        <FormInput
          onInput={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          errors={errors}
          placeholder="Email address"
          name="email"
          label="Email address"
          type="email"
          {...register('email', {
            required: true
          })}
        />
        <FormInput
          errors={errors}
          placeholder="New password"
          name="password"
          label="New password"
          type="password"
          {...register('password', {
            minLength: {
              value: 6,
              message: 'Your password needs to be at least 6 characters.'
            },
            maxLength: {
              value: 40,
              message: 'Your username must be no more than 40 characters.'
            }
          })}
        />
        <FormInput
          onInput={(e) => setUserAvatar(e.target.value)}
          value={userAvatar}
          errors={errors}
          placeholder="Avatar image"
          name="avatar"
          label="Avatar image"
          type="URL"
          {...register('avatar', {
            required: true,
            pattern: /.jpg$|.png$/i
          })}
        />
        <button className="form_submit" type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default EditProfile
