/**
 * Affiche les pays qui ont un frontalier hors de leur continent.
*/
function outsideTheContinent(){
    for(let country of countries){
        for(let countryFrontalier of country.codeAlpha3.paysFrontaliers){
            if (countryFrontalier = country.codeAlpha3) {
                console.log(countryFrontalier)
            }
            console.log(country.codeAlpha3.paysFrontaliers)
        }
    }
}