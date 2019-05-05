import { Injectable } from '@angular/core';


@Injectable()
export class HistorialProvider {
  items = [
    {
      "valor": "$35.000",
      "cliente": "Netflix",
      "validacion":"A221545323202122",
      "estado":"Completado",
      "fecha":"04/05/2019 9:40 P.M.",
      "imagen":"../assets/imgs/netflix.jpg"
    },
    {
      "valor": "$23.000",
      "cliente": "Codensa",
      "validacion":"MN221545323202122",
      "estado":"Completado",
      "fecha":"01/05/2019 9:40 P.M.",
      "imagen":"../assets/imgs/codensa.jpg"
    },
    {
      "valor": "$16.000",
      "cliente": "Spotify",
      "validacion":"B221545323202122",
      "estado":"Completado",
      "fecha":"22/11/2018 9:40 P.M.",
      "imagen":"../assets/imgs/spotify.png"
    },
    {
      "valor": "$68.000",
      "cliente": "Colpatria",
      "validacion":"A221545323202122",
      "estado":"Completado",
      "fecha":"22/11/2018 9:40 P.M.",
      "imagen":"../assets/imgs/colpatria.png"
    }
  ];
  constructor() {
    console.log('Hello HistorialProvider Provider');
  }
  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(valor:any,nombre:any) {
    this.items.push({"valor":valor,"cliente":nombre,"validacion":"AB121215BNMH",
    "estado":"completado","fecha":"22/11/2018 9:40 P.M.","imagen":"../assets/imgs/colpatria.png"});
  }

  delete(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
