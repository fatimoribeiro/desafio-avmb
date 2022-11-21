function chaveValor (C, V) {
    const jsonArray = {};
    jsonArray[C] = V;

    let jsonString = JSON.stringify(jsonArray);
    console.log(jsonString);
}