import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  display: boolean = false;
  product_type!: String;
  product_description!: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onItemChange(value: any){
    this.display = true;
    this.product_type = value!.target!.value;
    this.product_description = this.product_type == "individual" ? "un particulier" : "une entreprise";
  }

  onButtonClicked(){
    switch (this.product_type) {
      case "individual": this.router.navigateByUrl("/adhesion/particulier"); break;
      case "entreprise": this.router.navigateByUrl("/adhesion/entreprise"); break;
      default: break;
    }
  }
}
