import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

 
  i = 0;

  car = [
    {
      marque: "Honda CIVIC HATCHBACK LS",
      n_immatriculation: "8945 FR",
      n_sieges: "4",
      couleur: "Yellow",
      image: "https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262",
    },
    {
      marque: "Honda Accord LX",
      n_immatriculation: "234 Ma",
      n_sieges: "4",
      couleur: "Red",
      image: "https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262",
    },
    {
      marque: "Honda Accord Hybrid LT",
      n_immatriculation: "746 MsA",
      n_sieges: "2",
      couleur: "Black",
      image: "https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262",
    }
    
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }

  goToCarsDetail(car){

    let ca = 
    {
      marque: "",
      n_immatriculation: "",
      n_sieges: "",
      couleur: "",
      image: ""
    };

    ca = car; 

    let i:number = 0;
    let check:Boolean = true;
  
    
    do{

      if(this.car[i].n_immatriculation === car.n_immatriculation){
        ca = this.car[i];
        check = false;
      }

        
      i++;
    }while(check && i <= this.car.length)
    
    this.router.navigate(["CarDetails", JSON.stringify(ca)]);

  }

}
