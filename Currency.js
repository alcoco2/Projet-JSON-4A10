class Currency {
    static all_currencies = new Map();
    constructor(code) {
        this.code = code;
        Currency.all_currencies.set(code, this);
    }

    toString() {
        return `${this.code}`;
      }
  
    getCurrencies() {
        return this.all_currencies.map((currencyCode) => all_currencies[currencyCode]);
      }
  }

  
  