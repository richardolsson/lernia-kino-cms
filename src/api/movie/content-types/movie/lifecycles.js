const { default: axios } = require("axios");

async function addImageFromIMDB(movie) {
  if (movie.imdbId) {
    const res = await axios({
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/get-base',
      params: { tconst: movie.imdbId },
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      },
    });

    movie.image = {
      url: res.data.image.url,
    };
  }
}

module.exports = {
 async beforeCreate(event) {
   await addImageFromIMDB(event.params.data);
 },
 async beforeUpdate(event) {
   await addImageFromIMDB(event.params.data);
 },
};
