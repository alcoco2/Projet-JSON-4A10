class Currency {
    static all_currencies = new Array();
    constructor(code) {
        this.code = code;
        Currency.all_currencies.push({code: this});
    }

    /**
     * Retourne le code de la monnaie sous forme de 
     * 
     * @returns {String}
     */
    toString() {
      return `${this.code}`;
    }

    /**
     * Retourne toutes les monnaies sous forme de liste d'objet
     * 
     * @returns {Array} 
     */
    getCurrencies() {
      return Language.all_currencies.Array((currencyCode) => all_currencies[currencyCode]);
    }
  }

  
  