import React, {useState} from "react";




const Greeting = () => {

    const [name, setName] = useState("");
    // const [greeting, setGreeting] = useState("");

    const changeHandeler = (event) => {
        setName( event.target.value);
    }
    return (
        <div>
            <label>Enter your name:</label>
            <br/>
            <input type="text" value={name} onChange={changeHandeler}/>
            <p>{"Hello " + name+"!"}</p>
        </div>
    )
}

export default Greeting;