import React, { useContext } from 'react'
import { nameContext } from './Cart'
import './Login.css'

function Login(props){
    const{login,setLogin} =props

    const nameValue = useContext(nameContext)

    let loginStatus 
    if (login === true){
        loginStatus = 'Light Theme'
    } else {
        loginStatus = 'Dark Theme'
    }
    const clickForLight =()=>{
        setLogin(true)
    }
  const clickToDark =()=>{
      setLogin(false)
  }


    return(
        <div className='login_style'>
            {loginStatus}<br/>
            <button onClick={()=>clickForLight()}>Light Mode</button><br/>
            <button onClick={()=>clickToDark()}>Dark Mode</button>
        </div>
    )
}

export default Login