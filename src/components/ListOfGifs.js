import React from "react";
import Gif from "./Gif";
import getGifs from "./getGifs";

export default function ListOfGifs({gifs}) {
    return (
        <div className="ListOfGifs">
            {gifs.map(({title,id,url}) => 
                <Gif 
                key={id} 
                id={id}
                title={title} 
                url={url}/>)
            }
        </div>
    )
}