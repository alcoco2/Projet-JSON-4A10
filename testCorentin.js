const countries = Country.all_countries;
/**
 * Affiche les pays qui ont un frontalier hors de leur continent.
*/
function outsideTheContinent(){
    for (let country of countries) {
        let paysVoisin = country.codeAlpha3.getBorders();
        console.log(paysVoisin.paysFrontalier)
    }
}
outsideTheContinent();