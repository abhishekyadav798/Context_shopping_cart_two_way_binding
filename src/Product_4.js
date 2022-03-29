import React, {useContext} from 'react'
import { nameContext } from './Cart'
import Suits from './images/suits.jpeg'

function Product_4(props){
    const {initial,setInitial}= props
    const {login,setLogin} = props
    const nameValue = useContext(nameContext)


    const clickToAdd =()=>{
        let addProduct4 = JSON.parse(initial)
        addProduct4.push({product_name:'Suit',price:'4999'})
        let product4 = JSON.stringify(addProduct4)
        console.log(product4)
        setInitial(product4)
    }
  const clickToRemove =()=>{
      let removeProduct4 = JSON.parse(initial)
      if (removeProduct4.product_name ==='Suit'){
        removeProduct4.pop()
      }
      
      let product4 = JSON.stringify(removeProduct4)
      console.log(product4)
      setInitial(product4)
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



    return(
        <div className='product_style' style={{backgroundColor :backgroundColorChange,color:colorChange}}>
            <img src={Suits} className='img_style' />
            <br/>
            <a>Formal Suit</a>
            <br/>
            <a>Price : &#8377; <span style={{color:'red'}}> 4999</span> </a>
            <br/>
            <button onClick={()=>clickToAdd()} style={{backgroundColor:buttonBackground,color:buttonColor,border:borderColor,border:'1px solid'}}>Add To Cart</button>
            <button onClick={()=>clickToRemove()} style={{backgroundColor:buttonBackground,color:buttonColor,border:borderColor,border:'1px solid'}}>Remove</button>
        </div>
    )
}

export default Product_4