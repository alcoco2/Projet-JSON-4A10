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




/**
 * Affiche les pays qui ont le plus de voisin et affiche les voisins
*/
function moreNeighbors(){
    let paysAvecVoisinsNombreux = []
    let paysAvecVoisinsNombreuxNom = []
    let paysActuel = 0
    for (let country of countries) {
        let paysVoisin = country.codeAlpha3.getBorders();
        if (paysVoisin.length > paysActuel) {
            paysAvecVoisinsNombreux = []
            paysAvecVoisinsNombreux.push(paysVoisin)
            paysAvecVoisinsNombreuxNom = []
            paysAvecVoisinsNombreuxNom.push(country.codeAlpha3.nom)
            paysActuel = paysVoisin.length
        }else if(paysVoisin == paysActuel){
            paysAvecVoisinsNombreux.push(paysVoisin)
            paysAvecVoisinsNombreuxNom.push(country.codeAlpha3.nom)
        }
    }
    for(let neighbors of paysAvecVoisinsNombreux){
        console.log(neighbors)
    }
    return paysAvecVoisinsNombreux, paysAvecVoisinsNombreuxNom
}




/**
 * Affiche les pays qui n'ont pas de voisins
*/
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






/**
 * Affiche les pays qui parle le plus de langues différentes et affiche les langues parler
*/
function moreLanguages(){
    let paysAveclanguesNombreusesNom = []
    let paysAveclanguesNombreuses = []
    let paysActuel = 0
    for (let country of countries) {
        let paysVoisin = country.codeAlpha3.getLanguages();
        if (paysVoisin.length > paysActuel) {
            paysAveclanguesNombreuses = []
            paysAveclanguesNombreuses.push(paysVoisin)
            paysAveclanguesNombreusesNom = []
            paysAveclanguesNombreusesNom.push(country.codeAlpha3.nom)
            paysActuel = paysVoisin.length
        }else if(paysVoisin == paysActuel){
            paysAveclanguesNombreuses.push(paysVoisin)
            paysAveclanguesNombreusesNom.push(country.codeAlpha3.nom)
        }
    }
    for(let languages of paysAveclanguesNombreuses){
        console.log(languages)
    }
    return paysAveclanguesNombreuses, paysAveclanguesNombreusesNom
}
