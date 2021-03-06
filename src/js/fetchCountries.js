export const fetchCountries = function (name) {
    const filters = 'fields=name,capital,population,flags,languages';
    return fetch(`https://restcountries.com/v3.1/name/${name}?${filters}`).then(response => {
        if (!response.ok) {
            throw new Error(onFetchError);
        }
        return response.json();
    });
};
