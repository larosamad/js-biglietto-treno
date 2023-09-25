function ticketGenerator() {
    // NOME
    let nome = document.getElementById('userName').value;
    // console.log(nome);
    document.getElementById('name').innerHTML = `${nome}`;

    // KM 
    let km = document.getElementById('userKm').value;
    // console.log(km);
    document.getElementById('km').innerHTML = `${km}`;

    // NUMERO CARROZZA
    let carrozza = Math.floor((Math.random() * 5) + 1);
    document.getElementById('carrozza').innerHTML = `${carrozza}`;

    // CODICE CP
    let codiceCp = Math.floor((Math.random() * 99999) + 10000);
    document.getElementById('codiceCp').innerHTML = `${codiceCp}`;

    
}

