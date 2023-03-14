class Currency {
    static all_currencies = new Array();
    constructor(code) {
        this.code = code;
        Currency.all_currencies.push(code, this);
    }

    toString() {
      return `${this.code}`;
    }
  
    getCurrencies() {
      return this.all_currencies.Array((currencyCode) => all_currencies[currencyCode]);
    }
  }

  
  