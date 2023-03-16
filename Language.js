class Language {
  static all_languages = new Array();
    constructor(iso639_2, name) {
      this.iso639_2 = iso639_2;
      this.name = name;
      Language.all_languages.push({iso639_2 : this});
    }
  }
  
  