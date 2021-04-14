
function writeCards(names, event) {
    let finishedCards = [];
    for (let i=0; i < names.length; i++){
    finishedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
    
    }
    return finishedCards;
}


function countDown(i){
    while (i >= 0){
    console.log(i)
    i--

    }
}


