import axios from "axios";
import { useState } from "react";

const Products = (props) => {
    console.log(props)
    const [cards, setCards] = useState("")
    return (
        <div>Hello</div>
        )
    }
    
    export default Products;
    // {props.map((card, index) => {
    //         <Card
    //             key={index}
    //             imgSrc="pic.png"
    //             pBgColor="lightgray"
    //             pCategory="Shose Category"
    //             pName="Marsilia"
    //             pPrice="50$"
    //         />
    //     })
    // }