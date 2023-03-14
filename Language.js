class Language {
  static all_languages = new Map();
    constructor(iso639_2, name) {
      this.iso639_2 = iso639_2;
      Currency.all_currencies.set(iso639_2, name);
    }
  
    getLanguages() {
      return this.all_languages.map((iso639_2) => all_currencies[iso639_2]);
    }
  }
  
  