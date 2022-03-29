import React, { useContext, useState } from 'react'
import { nameContext } from './Cart'
import Shoe8 from './images/shoe8.jpeg'
import './Product_2.css'

function Product_2 (props) {
  const { initial, setInitial } = props
  const {login,setLogin} = props
  const nameValue = useContext(nameContext)
  const click_to_add = () => {

  let add_array = JSON.parse(initial)
  add_array.push({productName: 'sports shoe',price:'2000'})
  let string2= JSON.stringify(add_array)
  console.log(string2)
  setInitial(string2)


    // let initial_cart = initial 
    // initial_cart = initial + 1
    // setInitial(initial_cart)
  }
  const click_to_Remove = () => {
     let add_array = JSON.parse(initial)
     add_array.pop()
     let string2 = JSON.stringify(add_array)
     console.log(string2)
     setInitial(string2)


    // let remove_cart = initial
    // remove_cart = initial - 1
    // if (!(remove_cart < 0)) {
    //   setInitial(remove_cart)
    // }
  }

  let backgroundColorChange
  let colorChange
  let buttonBackground
  let buttonColor
  let borderColor
  let loginStatus 
  if (login === true){
      loginStatus = 'Logged in successful'

    backgroundColorChange = "white"
    colorChange = 'grey'
    buttonBackground = 'white'
    borderColor= "grey"
  } else {
      loginStatus = 'Login failed'
      backgroundColorChange = "rgb(39, 38, 38)"
      colorChange = "white"
      buttonBackground = "rgb(39, 38, 38)"
      buttonColor = "white"
    //   borderColor = "white"

    
  }
  return (
    <div className='product2_style' style={{backgroundColor :backgroundColorChange,color:colorChange}}>

        
      <div>
        <img src={Shoe8} className='img2_style' />
        <br/>
        <a>Sports Shoes</a>
        <br/>
        <a>Price : &#8377; <span style={{color:'red'}}> 2999</span></a>
        <br/>
        <button onClick={() => click_to_add()} style={{backgroundColor:buttonBackground,color:buttonColor,border:borderColor,border:'1px solid'}}>Add To Cart</button>
        <button onClick={() => click_to_Remove()} style={{backgroundColor:buttonBackground,color:buttonColor,border:borderColor,border:'1px solid'}}>Remove</button>
      </div>
    </div>
  )
}

export default Product_2
