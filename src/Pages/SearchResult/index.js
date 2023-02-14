import { useState , useEffect } from "react"
import getGifs from "../../components/getGifs"
import ListOfGifs from "../../components/ListOfGifs"

export default function SearchResult({params}) {
    const {keyword} = params
    const [gifs, setgifs] = useState([])
    useEffect(function (){
        getGifs({keyword})
            .then(gifs => setgifs(gifs))
    },[keyword])
    return <>
            <ListOfGifs gifs ={gifs} />
        </>
    
}