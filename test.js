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


/**
 * Pays avec au moins un voisin ayant la meme langue. bi-check
 */
function withCommonLanguage() {
    let countriesWithLanguage = [];

    for (let country of countries) {
        let hasCommonLanguage = false;

        for (let neighbor of country.codeAlpha3.getBorders()) {
            for (let neighborLanguage of neighbor.codeAlpha3.languages) {
                for (let countryLanguage of country.codeAlpha3.getLanguages()) {
                    if (neighborLanguage.iso639_2 === countryLanguage.iso639_2) {
                        hasCommonLanguage = true;
                        break;
                    }
                }

                if (hasCommonLanguage) {
                    break;
                }
            }

            if (hasCommonLanguage) {
                break;
            }
        }

        if (hasCommonLanguage) {
            countriesWithLanguage.push(country);
        }
    }

    return countriesWithLanguage;
}



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

// -> antartique 1

/**
 * Recherche et retourne l'objet Country a partir du nom ou du code du pays
 * 
 * @param {String} info 
 * @param {String} type 
 * @returns {Objet} Country
 */
function getPays(info, type){
    for (let country of countries) {
        if (type == "code") {
            if (country.codeAlpha3.codeAlpha3 == info) {
                return country.codeAlpha3
            }
        }
        if (type == "nom") {
            if (country.codeAlpha3.nom == info) {
                return country.codeAlpha3
            }
        }

    }
}

/**
 * Retourne tout les pays voisins du pays entrer en parametre et iterativement avec tous les pays voisins
 * @param {String} nom_pays 
 * @returns 
 */
function veryLongTrip(nom_pays, frontalier = []) {
    let pays = getPays(nom_pays, "nom");

    if (Object.keys(pays.paysFrontaliers)) {
        for (let neighbor of pays.paysFrontaliers) {
          let nameNeighbor = getPays(neighbor, "code");
          if (!frontalier.includes(nameNeighbor.nom)) {
            frontalier.push(nameNeighbor.nom);
            if (typeof nameNeighbor.paysFrontaliers != 'undefined'){
                veryLongTrip(nameNeighbor.nom, frontalier);
            }
          }
        }
    }
  
    return frontalier;
  }

console.log(veryLongTrip("Antarctica"))