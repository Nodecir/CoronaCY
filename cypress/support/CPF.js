/**
 * Calcula Modulo de um numero
 *
 * @param dividendo - int
 * @param divisor - int
 *
 * @return int
 */
const getModulo = (dividendo, divisor) => {
    return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
 }
 
 const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
 }
 
 /** 
  * Gera numeros Randomicos
  *
  * @param total - integer quantidade de numeros
  *
  * @return array
  */
 const getNumerosRandomicos = (total) => {
    let numbers = [];
    for (let i = 0; i < total; i++) {
       numbers[i] = getRandomNumberBetween(1, 9);
    }
    return numbers;
 }
 
 /**
  * Dado Um Array de numeros, determina o Digito Verificador para CPF
  *
  * @param numeros - array numeros
  *
  * @return int
  */
 const getDigitoVerificadorCpf = (numeros = []) => {
    let digito = 0;
    let arraySize = numeros.length + 1;
 
    numeros.map((numero, index) => {
       digito += numero * (arraySize - index);
    });
 
    digito = 11 - (getModulo(digito, 11));
    return digito >= 10 ? 0 : digito;
 }
 
 /**
  * Gera um numero de CPF Fake
  *
  * @return String - 11 digitos numericoshttps://github.com/osians/exemplosDiversos/blob/master/geradorCpfFake.php
  */
 const gerarCpfFake = () => {
    let numeros = getNumerosRandomicos(9);
    numeros.push(getDigitoVerificadorCpf(numeros));
    numeros.push(getDigitoVerificadorCpf(numeros));
 
    
    return numeros.join('');
 
 }


    console.log(gerarCpfFake());
 

