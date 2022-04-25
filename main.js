//Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digital_root(n) {
const numberArray = String(n).split('') //Criando um array com os dígitos em formato de string
if (numberArray.length > 1){            // Condicional da quantidade de digitos   
    let soma = 0
    for(digito of numberArray){         // Laço que percorre os digitos do array número e soma eles a variável soma
        soma += Number(digito)
    }
    while (String(soma).length > 1){    //Passando para string para usar o length e verificando que enquanto o length for maior do que 1, fazer o mesmo processo
        const somaArray = String(soma).split('')    //Criando array para a soma
        soma = 0                                    //Zerando a soma
        for(digito of somaArray){    //Repetição do processo
        soma += Number(digito)
        }
    }
    console.log(soma);
    } else console.log(n);  //Caso não obdeça a condicional de ter mais de 1 valor, o valor impresso é o proprio n
}
//testando
digital_root(456)
