import axios from 'axios'

import { ApiSettings } from '../Settings'

const headers = {
  'Accept': 'application/json'
};

class PokemonService {
  async getPokemonsAsync(nameFilter) {
    const url = new URL(`${ApiSettings.PokedexApiBaseUrl}/v1/pokemon`);
    if (nameFilter != null) {
      url.searchParams.append('name', nameFilter);
    }

    const response = await axios.get(url.toString(), { headers });

    const result = response.data;
    const pokemons = result.data;
    return pokemons;
  }

  async getPokemonAsync(id) {
    const url = `${ApiSettings.PokedexApiBaseUrl}/v1/pokemon/${id}`;

    const response = await axios.get(url, { headers });

    const result = response.data;
    const pokemon = result.data;
    return pokemon;
  }
};

export default PokemonService;
