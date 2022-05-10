import {React, useState} from "react"

export default function Header() {
    let [user, setUser] = useState("Leo")
    
   function func() {
    setUser(user = 'Pineda')
   }

    return (
        <header onClick={func} >
            <p>Current user: {user}</p>
        </header>
    )
}
