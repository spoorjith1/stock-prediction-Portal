import React, { useContext } from 'react'
import Button from './Button';
import { AuthContext } from '../AuthProvider'

const Main = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  
  return (
    <>
    <div className='container'>
      <div className=' p-5 text-center bg-light-dark rounded'>
          <h1 className=' text-light'>Stock Prediction Portal</h1>
          <p className=' text-light lead'>This stock prediction application utilizes machine learning techniques specifically employing keras, and LSTM model, integrated within the Django framework. it forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>

          {isLoggedIn ? (
            <div className='alert alert-primary'>Hi, there</div>
          ) : (
            <Button text='Login' class='btn-outline-info' url='/login' />
          )}
      </div>
    </div>
    </>
  )
}

export default Main;