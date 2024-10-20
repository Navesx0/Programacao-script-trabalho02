const { createApp } = Vue;

createApp({
    data() {
        return {
            pokemons: [],
            loading: true,
            searchText: '',
            nextPage: 1,
            filteredPokemon: null,
        };
    },
    created() {
        this.callAPI();
    },
    methods: {
        async callAPI() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(this.nextPage - 1) * 151}&limit=151`);
                const data = await response.json();
                const pokemonDetailsPromises = data.results.map(async pokemon => this.fetchPokemonData(pokemon.url));
                const pokemonDetails = await Promise.all(pokemonDetailsPromises);
                this.pokemons = [...this.pokemons, ...pokemonDetails];
                this.nextPage++;
                this.loading = false;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchPokemonData(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                return {
                    id: data.id,
                    name: data.name,
                    weight: data.weight,
                    types: data.types,
                    sprites: data.sprites,
                    showDetails: false,
                };
            } catch (e) {
                console.error(e);
            }
        },
        searchPokemon() {
            const search = this.searchText.trim().toLowerCase();
            if (!search) {
                this.filteredPokemon = null;
                return;
            }

            let closestMatch = null;
            let closestDistance = Infinity;

            this.pokemons.forEach(pokemon => {
                const distance = this.levenshteinDistance(search, pokemon.name.toLowerCase());
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestMatch = pokemon;
                }
            });

            this.filteredPokemon = closestMatch;

            // Exibir os detalhes do Pokémon encontrado
            if (this.filteredPokemon) {
                this.displayPokemonDetails(this.filteredPokemon);
            }
        },
        displayPokemonDetails(pokemon) {
            alert(`Nome: ${pokemon.name}
Tipo(s): ${pokemon.types.map(type => type.type.name).join(', ')}
Peso: ${pokemon.weight}
ID: ${pokemon.id}`);
        },
        levenshteinDistance(a, b) {
            const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
            for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
            for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
            for (let i = 1; i <= a.length; i++) {
                for (let j = 1; j <= b.length; j++) {
                    const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j - 1] + cost
                    );
                }
            }
            return matrix[a.length][b.length];
        },
        getTypeClass(type1, type2) {
            if (type2) {
                return `dual-type ${type1}-${type2}`;
            }
            return type1;
        }
    }
}).mount("#app");
