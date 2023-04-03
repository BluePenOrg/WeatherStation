const API_KEY = "9BGI4MYLN058ZI7I";
const API_BASE_URL = "https://api.thingspeak.com/";

const basicFetch = async (endpoint) => { //Faz a requisição na API e retorna o JSON
    const req = await fetch(`${API_BASE_URL}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getLastEntry: async () => {
        return [
            {
                slug: 'teste1',
                title: 'This is a test',
                items: await basicFetch(`channels/2073568/fields/1.json?api_key=${API_KEY}&results=1`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?languague=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?languague=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&languague=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&languague=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&languague=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&languague=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&languague=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
}