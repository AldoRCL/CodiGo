import React from 'react'
import "./styles.css"
import lisa from "../../assets/images/lisa.jpg"

const Home = () => {
    const autor = "Aldo";
    return (
        <div>
            <p style= {{color:"green"}}>
                Hola amiguitos mi nombre es {autor}
            </p>
            <img src={lisa} alt = "imagen" />
        </div>
    )
}

export default Home
