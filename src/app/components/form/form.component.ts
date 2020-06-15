import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../services/country.service";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public CountriesName: Array<any> = [];
  //
  public formulario: FormGroup;

  constructor(private CountryService: CountryService) {
    this.CountryService.GetCountry().subscribe((country) =>
      this.CountriesName.push(country)
    );
  }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    // esto recibe un objeto de formcontrols
    /*****
    que son los encargados de controlar los inputs o elementos que existen en el formulario
    ******/
    this.formulario = new FormGroup({
      First_name: new FormControl("")
    });
  }
}
