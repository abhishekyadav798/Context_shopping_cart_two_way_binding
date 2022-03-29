import React, { useContext, useState } from 'react'
import { nameContext } from './Cart'
import Shoe7 from './images/shoe7.jpeg'
import './Product_1.css'

function Product_1 (props) {
  const { initial, setInitial } = props
  const {login,setLogin} = props
  const nameValue = useContext(nameContext)

  const click_to_add = () => {
    let add_to_array = JSON.parse(initial)
    add_to_array.push({ Product_name: 'product3333', price: 1000 })
    let abc = JSON.stringify(add_to_array)
    console.log(abc)
    setInitial(abc)
  }

  const click_to_Remove = () => {
    let remove_array = JSON.parse(initial)
    remove_array.pop()
    let abc1 = JSON.stringify(remove_array)
    console.log(abc1)
    setInitial(abc1)
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
    <div className='product_style'  style={{backgroundColor :backgroundColorChange,color:colorChange}}>
      <div>
        <img src={Shoe7} className='img_style' />
        <br/>
        <a>Formal Shoes</a>
        <br/>
        <a>Price : &#8377; <span style={{color:'red'}}> 1999</span></a>
        <br/>
        <button onClick={() => click_to_add()} style={{backgroundColor:buttonBackground,color:buttonColor,border:borderColor,border:'1px solid'}}>Add To Cart</button>
        <button onClick={() => click_to_Remove()} style={{backgroundColor:buttonBackground,color:buttonColor,border:borderColor,border:'1px solid'}}>Remove </button>
      </div>
    </div>
  )
}

export default Product_1
