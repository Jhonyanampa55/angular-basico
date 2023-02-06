import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes:string[]=['Spiderman','Ironman','Hulk','Thor','Cápitan América'];
  heroesborrados:string[]=[]

  borrarHeroe(){
    const heroex= this.heroes.shift() || ''
    if (heroex!=""){
      this.heroesborrados.push(heroex);
    }else{
      this.heroesborrados=[];
    }
    
  }


}
