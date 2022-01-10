import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutocompleteService } from '../autocomplete.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  form = new FormGroup({
    search: new FormControl()
  })

  // For SVG  Width and Heigth
  svgWidth = "25px";
  svgHeigth = "25px";

  // url = "http://localhost:8000/predict"
  url = "http://52.224.19.57:8000/predict"

  options: string[] = []

  constructor(private autocompleteService: AutocompleteService,
    private router: Router) { }

  ngOnInit(): void {
  }


  search(input_Element: HTMLInputElement) {

    console.log("Searching ....");

    this.router.navigate(['/news/' + input_Element.value]);

    input_Element.value = ""
  }

  predict_next(input_Element: HTMLInputElement) {


    if (input_Element.value.slice(-1) == " ") {
      console.log(input_Element.value);
      
      this.autocompleteService.predict_next_words(this.url, input_Element.value)
        .subscribe(res => {
          this.options = res['output']
          console.log(res);

        }, error => {
          console.log(error);

        })
    }

    else
      this.options = []
  }


  optionSelcted(input_Element:HTMLInputElement ,optionSelcted :string){

    console.log("Option optionSelcted" , optionSelcted);
    input_Element.value  = input_Element.value + optionSelcted
    this.options  = []

  }

}
