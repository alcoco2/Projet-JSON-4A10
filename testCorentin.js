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
                break;
            }
        }
    }
    return tabNotSameRegion
}

console.log(outsideTheContinent())
outsideTheContinent();



function moreNeighbors(){
    let paysAvecVoisinsNombreux = []
    let paysActuel = 0
    for (let country of countries) {
        let paysVoisin = country.codeAlpha3.getBorders();
        if (paysVoisin.length > paysActuel) {
            paysAvecVoisinsNombreux = []
            paysAvecVoisinsNombreux.push(paysVoisin)
            paysActuel = paysVoisin.length
        }else if(paysVoisin == paysActuel){
            paysAvecVoisinsNombreux.push(paysVoisin)
        }
    }
    for(let neighbors of paysAvecVoisinsNombreux){
        console.log(neighbors)
    }
    return paysAvecVoisinsNombreux
}

console.log(moreNeighbors())
moreNeighbors();

function lessNeighbors(){
    let paysSansVoisins = []
    for (let country of countries) {
        let paysVoisin = country.codeAlpha3.getBorders();
        if (paysVoisin.length == 0) {
            paysSansVoisins.push(paysVoisin)
        }
    }
    return paysSansVoisins
}

console.log(lessNeighbors())
lessNeighbors();



function moreLanguages(){
    let paysAveclanguesNombreuses = []
    let paysActuel = 0
    for (let country of countries) {
        let paysVoisin = country.codeAlpha3.getLanguages();
        if (paysVoisin.length > paysActuel) {
            paysAveclanguesNombreuses = []
            paysAveclanguesNombreuses.push(paysVoisin)
            paysActuel = paysVoisin.length
        }else if(paysVoisin == paysActuel){
            paysAveclanguesNombreuses.push(paysVoisin)
        }
    }
    for(let languages of paysAveclanguesNombreuses){
        console.log(languages)
    }
    return paysAveclanguesNombreuses
}

console.log(moreLanguages())
moreLanguages();