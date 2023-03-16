class Country {
    static all_countries = new Array();
    constructor(nom, codeAlpha3, population, tld, drapeau, gentilé, superficie, capitale, paysFrontaliers) {
      this.nom = nom;
      this.codeAlpha3 = codeAlpha3;
      this.population = population;
      this.tld = tld;
      this.drapeau = drapeau;
      this.gentilé = gentilé;
      this.superficie= superficie;
      this.capitale = capitale;
      this.paysFrontaliers = paysFrontaliers;
      Country.all_countries.push({codeAlpha3: this});
    }

    /**
     * Retourne Les informations principales d'un pays
     * 
     * @returns {string} 
     */
    toString() {
        return `Pays : ${this.nom} , Capitale : ${this.capitale}, Population : ${this.population}, Superficie : ${this.superficie}, Monnaies : ${this.monnaies} `;
    }

    /**
     * Retourne la densité de population du pays
     * 
     * @returns {number} Density
     */
    getPopDensity(){
        return this.population/this.superficie;
    }

    /**
     * Retourne un tableau d'Object des pays frontaliers 
     * 
     * @returns {Array} 
     */
    getBorders(){
        let tabPaysFrontalier= []
        if (this.paysFrontaliers){
            for(let frontalier of this.paysFrontaliers){
                let tabrecup = Country.all_countries.filter(pays => pays.codeAlpha3.codeAlpha3 == frontalier);
                tabPaysFrontalier.push(tabrecup);
            }
        } 
        return tabPaysFrontalier;
    }
  
}

/**
 * Création de classe Country, Currency et Language a partir de la base de données countries.js
 */
function fill_db() {
    console.log("Chargement des classes ....")
    for(let country of countries){
        // Création de pays
        new Country(
            country["name"], 
            country["alpha3Code"], 
            country["population"], 
            country["topLevelDomain"], 
            country["flag"], 
            country["demonym"], 
            country["area"], 
            country["capital"], 
            country["borders"]
        );
        
        // Création de monnaies
        let currencies = Currency.all_currencies;
        if (country.currencies) {
            for (let i = 0; i < country.currencies.length; i++) {
                let currencyCode = country.currencies[i].code;
                if (!currencies[currencyCode]) {
                    new Currency(currencyCode);
                }
            }
        }

        // Création de languages
        let languages = Language.all_languages;
        if (country.languages) {
            for (let i = 0; i < country.languages.length; i++) {
                let iso639_2 = country.languages[i].iso639_2;
                if (!languages[iso639_2]) {
                    new Language(iso639_2,country.languages[i].name);
                }
            }
        }

    }
    console.log("Classes et données chargées ....")
}

fill_db()