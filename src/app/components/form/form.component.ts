import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../services/country.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  RxwebValidators,
  ReactiveFormConfig,
  NumericValueType,
} from "@rxweb/reactive-form-validators";
import { MessageErrorsService } from "../../services/message-errors.service";

import { config } from "process";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public CountriesName: Array<any> = [];
  //
  public formulario: FormGroup;

  constructor(
    private CountryService: CountryService,
    private MessageErrorSvr: MessageErrorsService,
    private MessageErrorSvrNumerico: MessageErrorsService
  ) {
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
      // FormControl (<Valor Inicial>)
      // minlength: es el numero de valors que pide
      // pattern:
      // [Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-Z ]*$/)]
      // aplha: viene a remplazar el Validators.pattern(/^[a-zA-Z ]*$/)

      First_name: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),

      Adress: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 10 }),
      ]),

      Last_Name: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
      ]),
      Company: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 5 }),
      ]),
      state: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 4 }),
      ]),

      country: new FormControl("", [
        RxwebValidators.required(),
      ]),

      City: new FormControl(null, [
        RxwebValidators.pattern({
          expression: { onlyAlpha: /^[a-zA-Z ]+$/ },
        }),
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 5 }),
      ]),

      Phone: new FormControl(null, [
        RxwebValidators.minLength({ value: 8 }),
        RxwebValidators.maxLength({ value: 12 }),
        RxwebValidators.required(),

        RxwebValidators.numeric({
          acceptValue: NumericValueType.PositiveNumber,
          allowDecimal: false,
        }),
      ]),

      ext: new FormControl(null, [
        RxwebValidators.minLength({ value: 3 }),
        RxwebValidators.maxLength({ value: 5 }),
        RxwebValidators.required(),

        RxwebValidators.numeric({
          acceptValue: NumericValueType.PositiveNumber,
          allowDecimal: false,
        }),
      ]),

      ZipCode: new FormControl(null, [
        RxwebValidators.minLength({ value: 4 }),
        RxwebValidators.maxLength({ value: 6 }),
        RxwebValidators.required(),

        RxwebValidators.numeric({
          acceptValue: NumericValueType.PositiveNumber,
          allowDecimal: false,
        }),
      ]),

    });
  }


  public MostrarFormulario() {
    console.clear();
    console.log(this.formulario);
  }

  public ValidateForm(control: string) {
    // console.log(this.formulario.controls[control].errors);
    if(!this.formulario.controls[control].touched) return {error:undefined}

    return this.MessageErrorSvr.errorMessage(
      this.formulario.controls[control].errors
    );
  }

  public ValidateFormNumerico(control: string) {
    // touched: para saber ucando toco el input

    if(!this.formulario.controls[control].touched) return {error:undefined}

    return this.MessageErrorSvrNumerico.errorMessageNumerico(
      this.formulario.controls[control].errors
    );
  }
}
