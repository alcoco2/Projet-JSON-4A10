const countries = Country.all_countries;
/**
 * Pays ayant au moins un voisin parlant l’une des es langues. A chez aussi les pays voisins et les langues en question.
 */
function withCommonLanguage() {
    let countriesWithLanguage = [];
    
    for (let country of countries) {
        console.log(country.codeAlpha3.getCurrencies())
        if (country.codeAlpha3.paysFrontaliers.length) {
            let neighbors = country.codeAlpha3.getBorders();
            // console.log(Language.all_languages[0])
            let countryLanguages = Language.all_languages.filter(lang => lang == "francais")
            let commonLanguage = neighbors.some(neighbor => {
                return neighbor.languages.some(lang => languages.includes(lang.iso639_1));
            });
      
            if (commonLanguage) {
                countriesWithLanguage.push(country);
            }
        }
    }
    return countriesWithLanguage;
}
withCommonLanguage()

/**
 * Pays sans aucun voisin ayant au moins une de ses monnaies.
 */
function withoutCommonCurrency() {
    let countriesWithoutCurrency = [];
    
    for (let country of countries) {
        if (country.codeAlpha3.paysFrontaliers.length) {
            let neighbors = country.codeAlpha3.getBorders();
            for (let currencyTest of Currency.all_currencies) {
                // console.log("CURRENCY CODE : " +  currencyTest.code.code + " //// COUNTRY CODE : " + country.codeAlpha3.codeAlpha3);
                console.log(currencyTest)
                if (currencyTest.code.code == country.codeAlpha3.codeAlpha3) {
                    console.log("On en a un : " + currencyTest.code.code + country.codeAlpha3.codeAlpha3)
                }
            }

            let currencies = Currency.all_currencies.filter(currency => currency.code.code == country.codeAlpha3.codeAlpha3)
        
            let commonCurrency = neighbors.some(neighbor => {
                return neighbor.currencies.some(currency => currencies.includes(currency.code));});
            
            if (!commonCurrency) {
            countriesWithoutCurrency.push(country);
        }
        }
    }
    
    return countriesWithoutCurrency;
}

/**
 * Pays triés par ordre décroissant de densité de population. bi-check
*/
function sortingDecreasingDensity() {
    let sortCountries = Country.all_countries;
    sortCountries.sort((a, b) => {
      return b.codeAlpha3.getPopDensity() - a.codeAlpha3.getPopDensity();
    });
    console.log(sortCountries)
    return sortCountries;
}

/**
 * Pays ayant plusieurs Top Level Domains Internet. bi-check
 */
function moreTopLevelDomains() {
    let countryMoreTDL = [];
    for(let country of countries){
        let tld = country.codeAlpha3.tld;
        if (tld.length > 1) {
            countryMoreTDL.push(country.codeAlpha3);
        }
    }
    return countryMoreTDL
}

// Q9 - veryLongTrip(nom_pays) : En partant d’un pays donné (représenté ici par l’argument nom_pays),listez tous les pays que l’on peut visiter en passant de l’un à l’autre. 
//     Evidemment, seuls les pays frontaliers sont accessibles depuis un pays donné.
//     Exemple : France -> Espagne -> Portugal.
// Q9 - Compléments :●En guise de test vous ajouterez un appel à la fonction veryLongTrip(nom_pays) en utilisant France comme argument.
//● Essayez de trouver un exemple de pays depuis lequel on peut ainsi visiter le plus de pays. Vous ajouterez aussi un appel à la fonction veryLongTrip(nom_pays) en utilisant ce pays comme argument