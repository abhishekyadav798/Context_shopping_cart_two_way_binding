import React, { useState } from 'react'
import {Row,Col} from 'reactstrap'

import './Cart.css'

import { createContext } from 'react'
import Product_1 from './Product_1'
import Product_2 from './Product_2'
import Product_3 from './Product_3'
import Product_4 from './Product_4'
import Login from './Login'

function Cart () {
  let abc = []
  const [initial, setInitial] = useState(JSON.stringify(abc))

const [login,setLogin]= useState(true)

  const click_to_add = () => {
    let abc1 = JSON.parse(initial)
    console.log(abc1[0].Product_name)
    setInitial(abc1)
  }
  let loginStatus 
  if (login === true){
      loginStatus = 'Light Theme'
  } else {
      loginStatus = 'Dark Theme'
  }

  return (
    <div>
      <div className='cart_style'>
          {loginStatus}
        <button onClick={() => click_to_add()}>show total items</button>
      </div>

      <nameContext.Provider value={initial}>
          <Row>
              <Col>
              
        <Product_1 initial={initial} setInitial={setInitial} login={login} setLogin={setLogin} />
        </Col><Col>
        <Product_2 initial={initial} setInitial={setInitial} login={login} setLogin={setLogin} />
        </Col>
        <Col>
        <Product_3 initial={initial} setInitial={setInitial}  login={login} setLogin={setLogin} />
        </Col><Col>
        <Product_4 initial={initial} setInitial={setInitial} login={login} setLogin={setLogin}  />
        </Col><Col>
        <Login login={login} setLogin={setLogin} />
        </Col>
        </Row>
      </nameContext.Provider>
    </div>
  )
}
export const nameContext = createContext('setInitial')
export default Cart
