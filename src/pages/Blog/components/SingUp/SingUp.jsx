import React, { useState } from 'react'
import { Checkbox, Modal, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { SIGNIN, SETIMG } from '../../../../redux/reducers/blogReducer'
import FormInput from '../Forms/FormInput'
import BlogAPI from '../../../../services/Blog/services'
import { setLocalHost } from '../../../../utils/util'
import defaultPhoto from '../../../../assets/img/blogDefault_photo.png'

const blog = new BlogAPI()

function SingUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })
  const [checked, setChecked] = useState(false)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalText, setModalText] = useState(
    'An error occurred while trying to send data. Please try again or refresh the page.'
  )

  const onSubmit = async (data) => {
    const user = {
      user: {
        username: data.username,
        email: data.email,
        password: data.password
      }
    }
    await blog.registerNewUser(user).then((res) => {
      if (!res) return setIsModalVisible(true)
      if (res === '422') {
        setModalText('Mail or login already exists.')
        return setIsModalVisible(true)
      }
      const { username, token, email } = res.user
      dispatch(SIGNIN(res.user))
      blog.getUserProfile(username).then((res) => {
        if (!res) {
          setLocalHost(username, email, token, true, defaultPhoto)
          dispatch(SETIMG(defaultPhoto))
        } else {
          setLocalHost(username, email, token, true, res.profile.image)
          dispatch(SETIMG(res.profile.image))
        }
      })
      navigate(-1)
    })
  }

  return (
    <>
      <Modal
        title="Network error"
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
        <h5> Create new account </h5>
        <form className="form_form" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            errors={errors}
            placeholder="Username"
            name="username"
            label="Username"
            {...register('username', {
              required: true,
              minLength: {
                value: 3,
                message: 'Your username needs to be at least 3 characters.'
              },
              maxLength: {
                value: 20,
                message: 'Your username must be no more than 20 characters.'
              }
            })}
          />
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
              required: true,
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
            errors={errors}
            placeholder="Password"
            name="repeatPassword"
            label="Repeat Password"
            type="password"
            {...register('repeatPassword', {
              required: true,
              validate: (value) =>
                value === watch('password') || 'Passwords must match'
            })}
          />
          <div className="form_line" />
          <div className="form_checkbox">
            <Checkbox onChange={(e) => setChecked(e.target.checked)}>
              <div className="form_checkbox_label">
                I agree to the processing of my personal information
              </div>
            </Checkbox>
            <div className="form_input_error">
              {errors?.checkbox && <span>{errors?.checkbox?.message}</span>}
            </div>
          </div>
          <button
            className="form_submit"
            type="submit"
            disabled={!isValid && !checked}
            style={!(checked && isValid) ? { opacity: 0.5 } : { opacity: 1 }}
          >
            Create
          </button>
          <div className="form_footer">
            Already have an account?
            <span>
              {' '}
              <Link to="/sign-in">Sign In.</Link>{' '}
            </span>
          </div>
        </form>
      </div>
    </>
  )
}

export default SingUp
