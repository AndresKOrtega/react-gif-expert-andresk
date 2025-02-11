
export const getGifs = async( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Qg14UigP0LbjWgshevXI5SfCme3ceQeZ&q=${ category }&limit=24`
    const resp = await fetch( url );
    const { data } = await resp.json();
  
    const gifs = data.map( img=>({
  
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
  
      }));
  
      return gifs;
  
  }