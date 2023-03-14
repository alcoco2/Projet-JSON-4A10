const countries = Country.all_countries;
/**
 * Pays ayant aum oins un voisin parlant l’une des es langues. A chez aussi les pays voisins et les langues en question.
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
    for(let country of countries){
        console.log(country.codeAlpha3.paysFrontaliers)
    }
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
    
}

// Q9 - veryLongTrip(nom_pays) : Enpartantd’unpaysdonné(représentéiciparl’argumentnom_pays),listeztouslespaysquel’onpeutvisiterenpassantdel’unàl’autre. 
//     Evidemment, seuls les pays frontaliers sont accessibles depuis un pays donné.
//     Exemple : France -> Espagne -> Portugal.
// Q9 - Compléments :●En guise de test vous ajouterez un appel à la fonctionveryLongTrip(nom_pays)en utilisantFrancecomme argument.●Essayezdetrouverunexempledepaysdepuislequelonpeutainsivisiterleplusdepays.VousajouterezaussiunappelàlafonctionveryLongTrip(nom_pays)enutilisant ce pays comme argument