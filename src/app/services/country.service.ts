import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap, mergeMap } from "rxjs/operators";
import { from } from "rxjs";

import { Country } from "../interfaces/country.interface";
@Injectable({
  providedIn: "root",
})
export class CountryService {
  private url = "https://restcountries.eu/rest/v2/all";
  constructor(private http: HttpClient) {}

  public GetCountry() {
    return this.http
      .get(this.url)
      .pipe(
        mergeMap((countries: Country[]) =>
          from(countries).pipe(map((country) => country.name))
        )
      );
  }
}
