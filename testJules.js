const countries = Country.all_countries;
/**
 * Pays ayant au moins un voisin parlant l’une des es langues. A chez aussi les pays voisins et les langues en question.
 */
function withCommonLanguage(languages) {
    const countriesWithLanguage = [];
    
    for (const country of Country.all_countries) {
        const neighbors = country.getBorders();
        const commonLanguage = neighbors.some(neighbor => {
            return neighbor.languages.some(lang => languages.includes(lang.iso639_1));
        });
      
        if (commonLanguage) {
            countriesWithLanguage.push(country);
        }
    }
    
    return countriesWithLanguage;
}

/**
 * Pays sans aucun voisin ayant au moins une de ses monnaies.
 */
function withoutCommonCurrency() {
    const countriesWithoutCurrency = [];
    
    for (const country of countries) {
        console.log(country)
        const neighbors = country.getBorders();
        const currencies = country.currencies.map(currency => currency.code);
        const commonCurrency = neighbors.some(neighbor => {
        return neighbor.currencies.some(currency => currencies.includes(currency.code));
    });
      
      if (!commonCurrency) {
            countriesWithoutCurrency.push(country);
        }
    }
    
    return countriesWithoutCurrency;
}
withoutCommonCurrency()
/**
 * Pays triés par ordre décroissant de densité de population.
*/
function sortingDecreasingDensity() {
    const countries = Country.all_countries;
    countries.sort((a, b) => {
      return b.getPopDensity() - a.getPopDensity();
    });
    return countries;
}
  
/**
 * Pays ayant plusieurs Top Level Domains Internet. 
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