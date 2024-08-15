import React, { useState } from 'react'
import LoginForm from '../../components/Forms/LoginForm'
import { getUserDetail, login } from './services'
import { environmentConfig } from '../../Utils/Config/environmentConfig'
import { setItem } from '../../Utils/Config/storageConfig'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
  const [loginInfo ,setLoginInfo] = useState({
    email:'',
    password:'',
  })
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
    const loginResponse = await login()
    const accountId = environmentConfig.accountId
    const detailResponse = await getUserDetail(accountId)
    // console.log(detailResponse, '<><><><><><>')
    setItem('isAuthenticated', true)
    setItem('userDetails', JSON.stringify(detailResponse.data))
    navigate('./dashboard')
    } 
    catch(err){
      alert(err)
    }
  }
  return (
    <div className='login-form'>
      <h5>Login</h5>
      <LoginForm loginInfo={loginInfo} setLoginInfo={setLoginInfo} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Authentication