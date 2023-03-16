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
  }

  
  