import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MessageErrorsService {
  constructor() {}

  public errorMessage(errorRecibido: Object) {
    let message: string = "";
    if (errorRecibido == null) {
      return {
        error: false,
      };
    }

    switch (true) {
      case errorRecibido.hasOwnProperty("required"):
        message: "Es necesario este campo";
        break;

      case errorRecibido.hasOwnProperty("onlyAlpha"):
        message = "Este campo tiene caracteres innecesarios";
        break;

      case errorRecibido.hasOwnProperty("minLength"):
        message = "Es necesario minimo 3 caracteres";
        break;
    }
    return {
      message,
      error: true,
    };
  }

  public errorMessageNumerico(errorRecibido: Object) {
    let message: string = "";
    if (errorRecibido == null) {
      return {
        error: false,
      };
    }

    switch (true) {
      case errorRecibido.hasOwnProperty("numeric"):
        message = "El valor que ingresaste tiene que ser numerico";
        break;

      case errorRecibido.hasOwnProperty("required"):
        message: "Es necesario este campo";
        break;

      case errorRecibido.hasOwnProperty("minLength"):
        message = "Es necesario minimo 8 numeros";
        break;

      case errorRecibido.hasOwnProperty("maxLength"):
        message = "Solo se permiten 12 numeros";
        break;
    }
    return {
      message,
      error: true,
    };
  }
}
