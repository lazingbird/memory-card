import axios from "axios";

const API_KEY = import.meta.env.POKETCG_KEY;

const baseUrl = "https://api.pokemontcg.io/v2/cards";

axios.defaults.headers.common = {
  "X-API-Key": API_KEY,
};

const getCard = async (number) => {
  const request = await axios.get(
    `${baseUrl}?q=nationalPokedexNumbers:${number}`
  );

  return request.data.data[0];
};

export default { getCard };
