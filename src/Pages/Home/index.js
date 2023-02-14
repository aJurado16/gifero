import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const POPUGIFS = ["cafe", "espresso", "méxico", "dev"]

export default function Home () {
    const [keyword, setKeyword] = useState("")
    const [path, pushLocation] = useLocation()

    const hSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const hChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <>
            <form onSubmit={hSubmit}>
                <input placeholder="Busca un gif aquí..." onChange={hChange} type="text" value={keyword}/>
            </form>
            <h3 className="App-tittle">Los gifs mas populares</h3>
            <ul>
            {POPUGIFS.map((popgifs) => (
                <li>
                    <Link to={`/search/${popgifs}`}>Gifs de {popgifs}</Link>
                </li>
            ))}
            </ul>
            
        </>
    )

}