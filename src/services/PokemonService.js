import axios from 'axios'

import { ApiSettings } from '../Settings'

class PokemonService {
    async getPokemonsAsync(nameFilter) {
        const url = new URL(`${ApiSettings.PokedexApiBaseUrl}/v1/pokemon`);
        if (nameFilter != null) {
            url.searchParams.append('name', nameFilter);
        }

        const response = await axios.get(url.toString(), {
            headers: {
                'Accept': 'application/json'
            }
        });

        const result = response.data;

        const pokemons = result.data;

        return pokemons;
    }
};

export default PokemonService;
