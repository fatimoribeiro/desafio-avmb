function Palindromo(A) {

    let retornoFuncao = true;
    const regex = /[^A-Za-z0-9]/g;
    let retornoRegex = A.toLowerCase().replace(regex, '');
    let tamanhoString = retornoRegex.length;
    for (var i = 0; i < (tamanhoString / 2); i++) {
      if (retornoRegex[i] !== retornoRegex[tamanhoString - 1 - i]) {
        retornoFuncao = false;
      }
    }
    console.log(retornoFuncao);
}