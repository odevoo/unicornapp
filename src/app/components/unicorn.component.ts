import { Component } from '@angular/core';

import { Unicorn } from './unicorn';
import { UNICORNS } from './unicorns';
import { UnicornService } from './unicorn.service';

@Component({
  moduleId: module.id,
  selector: 'unicorn',
  templateUrl: 'unicorn.component.html',
  providers: [UnicornService]
})


export class UnicornComponent { 


  constructor(

    private unicornService: UnicornService
    ){

  }

  tabunicorns = UNICORNS;
  newUnicorn = new Unicorn;
  newLove = new Unicorn;
  newBaby = new Unicorn;


  makeLove(unicorn: any) {

    let index1 = this.tabunicorns.indexOf(unicorn);
    let index2 = this.newLove.mate;
    let gender1 = this.tabunicorns[index1].gender;
    let gender2 = this.tabunicorns[index2].gender;

    if ((gender1 == "male" && gender2 == "female") || (gender1 == "female" && gender2 == "male")) {
      let color1 = (this.tabunicorns[index1].color).slice(-3);
      let color2 = (this.tabunicorns[index2].color).slice(-3);
      let color = "#" + color1 + color2;
      let name = this.tabunicorns[index1].name + this.tabunicorns[index2].name;
      this.makeBaby(name, color);
    }
  }


  createUnicorn() { 
    this.tabunicorns.push(this.newUnicorn);
  }

  makeBaby(name: any, color: any) {
    let copy = Object.assign({}, this.newBaby);
    copy.name = name;
    copy.color = color;
    copy.gender  = "male";
    copy.age = 1;
    this.tabunicorns.push(copy);
  }
}
