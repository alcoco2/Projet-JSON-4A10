class Language {
  static all_languages = new Array();
    constructor(iso639_2, name) {
      this.iso639_2 = iso639_2;
      this.name = name;
      Language.all_languages.push({iso639_2 : this});
    }
    
    /**
     * Retourne toutes les langues sous forme de liste d'Objet
     * 
     * @returns {Array}
     */
    getLanguages() {
      return Language.all_languages.Array((iso639_2) => all_currencies[iso639_2]);
    }
  }
  
  