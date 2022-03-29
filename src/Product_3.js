import React,{useContext} from "react";
import { nameContext } from "./Cart";
import Pro from './images/pro.jpeg'
import './Product_1.css'




function Product_3 (props){
    const {initial,setInitial} = props
    const {login,setLogin} = props
    const nameValue = useContext(nameContext)


    const clickToAdd=()=>{
 let addProduct3 = JSON.parse(initial)
 addProduct3.push({product_name:'Tops',price:1699})
 let product3 = JSON.stringify(addProduct3)
 console.log(product3)
 setInitial(product3)
    }

    const clickToRemove =()=>{
        let removeProduct = JSON.parse(initial)
        removeProduct.pop()
        let product3 = JSON.stringify(removeProduct)
        console.log(product3)
        setInitial(product3)
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
        <div>
            <div className='product_style' style={{backgroundColor :backgroundColorChange,color:colorChange}} >
                <img src={Pro}  className='img_style'/>
                <br/>
                <a>Silk Top</a>
                <br/>
                <a>Price : &#8377; <span style={{color:'red'}}> 1699</span></a>
                <br/>
                <button onClick={()=>clickToAdd()} style={{backgroundColor:buttonBackground,color:buttonColor,border:borderColor,border:'1px solid'}}>Add To Cart</button>
                <button onClick={()=>clickToRemove()}  style={{backgroundColor:buttonBackground,color:buttonColor,border:borderColor,border:'1px solid'}}>Remove</button>
            </div>

        </div>
    )
}

export default Product_3