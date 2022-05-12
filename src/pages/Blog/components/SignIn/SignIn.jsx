import { useState } from 'react'
import { Modal, Button } from 'antd'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { SIGNIN, SETIMG } from '../../../../redux/reducers/blogReducer'
import FormInput from '../Forms/FormInput'
import BlogAPI from '../../../../services/Blog/services'
import { setLocalHost } from '../../../../utils/util'

const blog = new BlogAPI()

function SingIn() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalText, setModalText] = useState(
    'An error occurred while trying to send data. Please try again or refresh the page.'
  )
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    const user = {
      user: {
        email: data.email,
        password: data.password
      }
    }

    await blog.signInUser(user).then((res) => {
      if (!res) return setIsModalVisible(true)
      if (res === '422') {
        setModalText('Email or password entered is incorrect.')
        return setIsModalVisible(true)
      }
      dispatch(SIGNIN(res.user))
      const { username, token, image, email } = res.user
      setLocalHost(username, email, token, true, image)
      blog
        .getUserProfile(res.user.username)
        .then((res) => dispatch(SETIMG(res.profile.image)))
      navigate(-1)
    })
  }

  return (
    <>
      <Modal
        title="Error"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button
            key="back"
            type="primary"
            onClick={() => setIsModalVisible(false)}
          >
            Ok
          </Button>
        ]}
      >
        <p>{modalText}</p>
      </Modal>
      <div className="form shadow-box">
        <h5> Sign In </h5>
        <form className="form_form" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
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
            placeholder="Password"
            name="password"
            label="Password"
            type="password"
            {...register('password', {
              required: true
            })}
          />
          <button className="form_submit" type="submit">
            Login
          </button>
          <div className="form_footer">
            Already have an account?
            <span>
              <Link to="/sign-up">Sign Up.</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  )
}

export default SingIn
