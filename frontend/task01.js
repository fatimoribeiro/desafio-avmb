function paresImpares(N) {

    let numerosImpares = "";
    let nArray = N.split(",");
    if(nArray.length > 0) {
        for(i = 0; i < nArray.length; i++) {
            if((nArray[i] % 2) != 0) {
                numerosImpares += nArray[i] + ",";
            }
        }
    }

    if (numerosImpares.length > 0) {
        console.log(numerosImpares.substring(0, (numerosImpares.length - 1)));
    }
}