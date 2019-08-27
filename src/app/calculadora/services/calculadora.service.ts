/**
 * Serviço de calculadora.
 * @author Matheus Manhães
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {
  }

  /**
   * Calcula dois números dado a operação.
   * @param1 n1
   * @param2 n2
   * @param3 operacao
   */

  calcular(n1: number, n2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = n1 + n2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = n1 - n2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = n1 / n2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = n1 * n2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }

}
