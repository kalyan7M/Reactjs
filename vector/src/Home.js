import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Gc from "./Gc"
import "./App.css"

let Home = () => {
    let [prod, setProd] = useState([])
    let obj = useContext(Gc)
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            setProd(res.data.products)
        })

    }, [])
    let gadget = ["https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FkZ2V0fGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D&w=1000",
        "https://thumbs.dreamstime.com/b/gadgets-accessories-gadgets-accessories-isolated-white-background-133429004.jpg",
        "https://www.shutterstock.com/image-photo/many-used-modern-electronic-gadgets-260nw-1457896685.jpg",
        "https://media.cnn.com/api/v1/images/stellar/prod/170601154043-09-flying-car-ehang-1.jpg?q=w_4366,h_2439,x_0,y_0,c_fill/h_618"]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % gadget.length);
    };
    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + gadget.length) % gadget.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 2000); 
    
        return () => {
          clearInterval(interval);
        };
      }, [currentImageIndex]);


    return (<div>
        <div>
            <div className="car">
                <i class="fa-solid fa-less-than" onClick={prevImage}></i>
                <img src={gadget[currentImageIndex]} alt={`Slide ${currentImageIndex}`} className="curosel" />
                <i class="fa-solid fa-greater-than" onClick={nextImage}></i>
            </div>
        </div>
        <div className="items">
            {
                prod.map((item) => {
                    return (
                        <div className="card">
                            <div className="img"><img src={item.images[0]} alt="" /></div>
                            <h2>Name:{item.title}</h2>
                            <h3>Desc:{item.description}</h3>
                            <h2>Price:{item.price}</h2>
                            <h2>Brand:{item.brand}</h2>
                            <h2>Cat:{item.category}</h2>
                            <button onClick={() => obj.addcart(item)}>Addcart</button>
                        </div>
                    )
                })
            }

        </div>

    </div>)
}
export default Home