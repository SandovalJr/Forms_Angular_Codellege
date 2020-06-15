import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../services/country.service";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public CountriesName: Array<any> = [];

  constructor(private CountryService: CountryService) {
    this.CountryService.GetCountry().subscribe((country) =>
      this.CountriesName.push(country)
    );
  }

  ngOnInit(): void {}
}
