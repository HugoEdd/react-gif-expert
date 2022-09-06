


export const getGifts = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Jz06K6OnOjK4cTBawShM15TIQq3kQw0F&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json(); // esta desestructuracion viene de la la peticion a la api
    // lo igualamos como un arreglo para asegurarnos que siempre tenga data
  
    const gifs = data.map( img => ({ 
  
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
  
     }));
  
    //  console.log(gifs);
     return gifs;
  
  
  }