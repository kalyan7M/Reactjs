import { useContext } from "react"
import Gc from "./Gc"
import "./App.css"

let Cart = () => {
    let obj = useContext(Gc)
    return (
        <div>
            <div className="items">
                {
                    obj.cart.map((item, index) => {
                        return (
                            <div className="card">
                                <div className="img">
                                    <img src={item.images[0]} alt="" />
                                </div>
                                <h2>Name:{item.title}</h2>
                                <h3>Desc:{item.description}</h3>
                                <h4>Price:{item.price}</h4>
                                <h3>Brand:{item.brand}</h3>
                                <h6>Cat:{item.category}</h6>
                                <h6><button onClick={() => obj.dec(item.id)}>-</button>
                                    {item.qty}
                                    <button onClick={() => obj.inc(item.id)}>+</button></h6>
                                <h2>Total:{item.total}</h2>

                                <button onClick={() => obj.del(index)}>delcart</button>
                            </div>
                        )
                    })
                }

            </div>
            {obj.cart.length > 0 && <div>GT:{obj.ctotal}</div>}
        </div>
    )
}
export default Cart