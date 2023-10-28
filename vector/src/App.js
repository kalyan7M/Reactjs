import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import "./App.css"

import Home from "./Home"
import Nav from "./Nav"
import Login from "./Login"
import Signup from "./Signup"
import Gc from "./Gc"
import Cart from "./Cart.js"

let App=()=>{
  let [cart,setCart]=useState([])
  let [ctotal,setCtotal]=useState(0)
  let addcart=(item)=>{
    let res=cart.filter((prd)=>prd.id===item.id)
    if(res.length===0)
    {
    item={...item,"qty":1,"total":item.price}
    setCart([...cart,item])
    setCtotal(ctotal+item.price)
    }
    else{
      inc(item.id)
    }
  }
  let inc=(id)=>{
    setCart(cart.map((item)=>{
      if(item.id===id)
      {
        setCtotal(ctotal+item.price)
        return {...item,"qty":item.qty+1,"total":item.total+item.price}
      }
      else{
        return item
      }
    }))
  }
  let dec=(id)=>{
    setCart(cart.map((item)=>{
      if(item.id===id && item.qty>1)
      {
        setCtotal(ctotal-item.price)
        return {...item,"qty":item.qty-1,"total":item.total-item.price}
      }
      else{
        return item
      }
    }))
  }
  let del=(ind)=>{
    setCtotal(ctotal-cart[ind].total)
    cart.splice(ind,1)
    setCart([...cart])
  }
  let obj={"cart":cart,"addcart":addcart,"inc":inc,
  "dec":dec,"del":del,"ctotal":ctotal}
  return(
    <BrowserRouter>
      <Gc.Provider value={obj}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Gc.Provider>
    </BrowserRouter>
  )
}
export default App