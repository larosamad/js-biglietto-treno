document.getElementById('result').style.display = 'none';

function ticketGenerator() {
    document.getElementById('result').style.display = 'block';
    // NOME
    let nome = document.getElementById('userName').value;
    // console.log(nome);
    document.getElementById('name').innerHTML = `${nome}`;

    // KM 
    let km = parseInt(document.getElementById('userKm').value);
    console.log(km);
    document.getElementById('km').innerHTML = `${km}`;

    if (isNaN(km) || km == '') {
        document.getElementById('errore').innerHTML = `Inserisci un numero`;
        document.getElementById('result').style.display = 'none';

    } else {
        document.getElementById('errore').innerHTML = '';
        // NUMERO CARROZZA
        let carrozza = Math.floor((Math.random() * 5) + 1);
        document.getElementById('carrozza').innerHTML = `${carrozza}`;
    
        // CODICE CP
        let codiceCp = Math.floor((Math.random() * 99999) + 10000);
        document.getElementById('codiceCp').innerHTML = `${codiceCp}`;
    
    
        const pricePerKm = '0.21';
        // console.log(pricePerKm);
        // console.log(km);
        
        let standardPrice = km * pricePerKm;
        // console.log(standardPrice);
        let userAge = document.getElementById('userAge').value;
        // console.log(userAge);
        let prezzoFinale;
    
        if (userAge == 'minorenne'){
            prezzoFinale = standardPrice * 0.80;
            // console.log('minorenne');
        } else if (userAge == 'over65') {
            prezzoFinale = standardPrice * 0.60;
            // console.log('over65');
        } else {
            prezzoFinale = standardPrice;
            // console.log('maggiorenne');
        }
    
        if (prezzoFinale % 2 == 0) {
            document.getElementById('prezzoFinale').innerHTML = `${prezzoFinale.toFixed(0)}`;    } else {
            document.getElementById('prezzoFinale').innerHTML = `${prezzoFinale.toFixed(2)}`;
        }

    } 

}

function cancellaCampi() {
    document.getElementById('result'.value) = '';
}

