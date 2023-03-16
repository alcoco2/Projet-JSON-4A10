const countries = Country.all_countries;
/**
 * Pays ayant au moins un voisin parlant l’une des es langues. A chez aussi les pays voisins et les langues en question.
 */
function withCommonLanguage() {
    let countriesWithLanguage = [];
    
    for (let country of countries) {
        for (let neighbor of country.codeAlpha3.getBorders()) {
            if (neighbor.codeAlpha3.languages.length) {
                for (let langue of neighbor.codeAlpha3.languages) {
                    let commonLanguage = country.codeAlpha3.getLanguages().filter(lang => lang.iso639_2 == langue.iso639_2)
                    if (commonLanguage) {
                        countriesWithLanguage.push(country);
                    }
                }
            }
        }
    }

    return countriesWithLanguage.filter((x, i) => countriesWithLanguage.indexOf(x) === i);
}
console.log(withCommonLanguage())

/**
 * Pays sans aucun voisin ayant au moins une de ses monnaies. bi-check
 */
function withoutCommonCurrency() {
    let countriesWithSameCurrency = [];
    
    for (let country of countries) {
        let tabCommonCurrency = []
        for (let neighbor of country.codeAlpha3.getBorders()) {
            if (neighbor.codeAlpha3.currencies.length) {
                for (let cuurency of neighbor.codeAlpha3.currencies) {
                    let commonCurrency = country.codeAlpha3.getCurrencies().filter(curr => curr.code !== cuurency.code)
                    tabCommonCurrency.push(commonCurrency)
                }
            }
        }
        if (!tabCommonCurrency.length) {
            countriesWithSameCurrency.push(country);
        }
    }

    return countriesWithSameCurrency.filter((x, i) => countriesWithSameCurrency.indexOf(x) === i);
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