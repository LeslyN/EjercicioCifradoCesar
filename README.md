# Cifrado Cesar

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:

    *Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    *Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG


#### Consideraciones Específicas

    1. Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
    2. Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
    3. El usuario no debe poder ingresar un campo vacío o que contenga números

### Lo siguiente es el pseudocódigo del problema:
    function cipher{
        texto = prompt(Pedir al usuario el numero de tarjeta) 
        array = [text];
        array1 = [];

        si text === '' || texto === 'number'
            para (i = 0; i < array.length; i ++)
                letra = text.charCodeAt(i);
                si ((letra >= 65 && letra <= 90) || (letra >= 97 && letra <= 122)

                    numero_letra = (letra - 65 + 33) % 26 + 65
                    convertido = String.fromCharCode(numero_letra)    
                fin si
            fin para
            retorne array1.agregar(converted)
        fin si
    }fin function
