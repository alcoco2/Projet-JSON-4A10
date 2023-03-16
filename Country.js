class Country {
    static all_countries = new Array();
    constructor(nom, codeAlpha3, population, tld, drapeau, gentilé, superficie, capitale, continent, paysFrontaliers, currencies, languages) {
      this.nom = nom;
      this.codeAlpha3 = codeAlpha3;
      this.population = population;
      this.tld = tld;
      this.drapeau = drapeau;
      this.gentilé = gentilé;
      this.superficie= superficie;
      this.capitale = capitale;
      this.continent = continent;
      this.paysFrontaliers = paysFrontaliers;
      this.currencies = currencies;
      this.languages= languages;
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
                tabPaysFrontalier.push(tabrecup[0]);
            }
        } 
        return tabPaysFrontalier;
    }

    /**
     * Retourne toutes les langues sous forme de liste d'Objet
     * 
     * @returns {Array}
     */
    getLanguages() {
        let languagesOfThis = []
        if (this.languages.length){
            for(let langue of this.languages){
                let tabLang = Language.all_languages.filter(lang => lang.iso639_2.iso639_2 == langue.iso639_2);
                languagesOfThis.push(tabLang[0].iso639_2);
            }
        } 
        return languagesOfThis
    }

    /**
     * Retourne toutes les monnaies sous forme de liste d'objet
     * 
     * @returns {Array} 
     */
    getCurrencies() {
        let currenciesOfThis = []
        if (this.currencies.length){
            for(let currency of this.currencies){
                let tabCurrencie = Currency.all_currencies.filter(curr => curr.code.code == currency.code);
                currenciesOfThis.push(tabCurrencie[0].code);
            }
        } 
        return currenciesOfThis
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
            country["region"],
            country["borders"],
            country["currencies"],
            country["languages"]
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