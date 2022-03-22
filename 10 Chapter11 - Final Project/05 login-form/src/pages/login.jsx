import { useAuth } from 'contexts/Auth'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { loginAPI } from 'services/api'

export const ERROR_MESSAGES = {
  'Cannot find user': 'کاربری با این ایمیل یافت نشد!',
  'Incorrect password': 'گذرواژه اشتباه می‌باشد!',
}

const LoginPage = () => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
            <div className="alert alert-danger" role="alert">
              {/* error message goes here */}
            </div>
          <div className="card">
            <form className="card-body">
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
