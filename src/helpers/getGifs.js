


export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=UeLPcDS5GPBeJ0h7heoEMaQ9w944Qt2b&q=${category}&limit=10`;
    const resp = await fetch(url)
    const { data } = await resp.json();

    //itero un objeto creandolo con el map de cada dato que trae la "data"
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    
    return gifs;

}