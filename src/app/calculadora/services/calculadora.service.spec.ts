import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CalculadoraService]
  }));

  it('O serviço deve ser injetado', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 1 + 1 é igual a 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 1, CalculadoraService.SOMA);
      expect(soma).toEqual(2);
    })
  );

  it('Deve garantir que 3 - 2 é igual a 1',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(3, 2, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(1);
    })
  );

  it('Deve garantir que 4 / 2 é igual a 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2);
    })
  );

  it('Deve garantir que 2 * 2 é igual a 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(2, 2, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(4);
    })
  );

  it('Deve retornar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(2, 2, '%');
      expect(multiplicacao).toEqual(0);
    })
  );

});
