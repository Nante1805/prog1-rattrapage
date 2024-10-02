
function getMostPopularPlaces(...places) {
    let placeCount = {};
    places.forEach(place => {
        placeCount[place] = (placeCount[place] || 0) + 1;
    });

    let sortedPlaces = Object.keys(placeCount).sort((a, b) => placeCount[b] - placeCount[a]);
    return `${sortedPlaces[0]} ${sortedPlaces[1]}`;
}

export default getMostPopularPlaces;