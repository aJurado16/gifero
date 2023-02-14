
const apiKey = "bWO7LN5eZXJYGBNcG87NAWQJ8qyRWU2Z"

export default function getGifs ({keyword}={}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`;
    
    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
      const {data= []} = response
      if (Array.isArray(data)){
        const gifs = data.map(image => {
            const {images,id,title}= image
            const {url} = images.downsized_medium
            return {title, id, url}
        })
        return gifs
    }
    })
}