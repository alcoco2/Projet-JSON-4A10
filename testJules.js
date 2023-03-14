const countries = Country.all_countries;
/**
 * Pays ayant au moins un voisin parlant l’une des es langues. A chez aussi les pays voisins et les langues en question.
 */
function withCommonLanguage() {
    
}

/**
 * Pays sans aucun voisin ayant au moins une de ses monnaies.
 */
function withoutCommonCurrency() {
}

/**
 * Pays triés par ordre décroissant de densité de population.
*/
function sortingDecreasingDensity() {
    console.log(countries[1].codeAlpha3)
    // Trier les pays par densité de population décroissante
    // let sortCountriesDensity = countries.sort();
  
    // Afficher la liste triée
    // console.log(sortCountries)
    // for (let i = 0; i < countries.length; i++) {
    //     console.log(countries[i].name + ' - ' + countries[i].population_density + ' habitants/km²');
    // }
    
}

sortingDecreasingDensity()

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
    console.log(countryMoreTDL)
}

// Q9 - veryLongTrip(nom_pays) : En partant d’un pays donné (représenté ici par l’argument nom_pays),listez tous les pays que l’on peut visiter en passant de l’un à l’autre. 
//     Evidemment, seuls les pays frontaliers sont accessibles depuis un pays donné.
//     Exemple : France -> Espagne -> Portugal.
// Q9 - Compléments :●En guise de test vous ajouterez un appel à la fonction veryLongTrip(nom_pays) en utilisant France comme argument.
//● Essayez de trouver un exemple de pays depuis lequel on peut ainsi visiter le plus de pays. Vous ajouterez aussi un appel à la fonction veryLongTrip(nom_pays) en utilisant ce pays comme argument