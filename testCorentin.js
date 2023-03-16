const countries = Country.all_countries;
/**
 * Affiche les pays qui ont un frontalier hors de leur continent.
*/
function outsideTheContinent(){
    let tabNotSameRegion = []
    for (let country of countries) {
        let paysVoisin = country.codeAlpha3.getBorders();
        for (let voisin of paysVoisin) {
            if (country.codeAlpha3.continent !== voisin.codeAlpha3.continent) {
                tabNotSameRegion.push(country.codeAlpha3)
            }
        }
    }
    return tabNotSameRegion
}
console.log(outsideTheContinent())
outsideTheContinent();