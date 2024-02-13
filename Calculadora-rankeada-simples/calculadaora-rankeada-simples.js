let jogadores = [
    {nickname: "Darude", vitoria: 90, derrotas: 20},
    {nickname: "Bartol", vitoria: 41, derrotas: 13},
    {nickname: "Zirot", vitoria: 212, derrotas: 34},
    {nickname: "Malik", vitoria: 76, derrotas: 43},
    {nickname: "Niss", vitoria: 4, derrotas: 17},
    {nickname: "Niss", vitoria: 154, derrotas: 17},
    {nickname: "Niss", vitoria: 154, derrotas: 57},
    {nickname: "Niss", vitoria: 154, derrotas: 217},
    {nickname: "Niss", vitoria: 1500, derrotas: 1300},
];

function calculaRank(jogador) {
    let saldo = jogador.vitoria - jogador.derrotas;
    let nivel;
    let taxadeVitoria = (jogador.vitoria / (jogador.vitoria + jogador.derrotas)) * 100;
    let totalPartidas = jogador.vitoria + jogador.derrotas;

    if(saldo < 10){
        nivel = 'Ferro';
    } else if(saldo >= 10 && saldo < 20){
        nivel = 'Bronze';
    } else if(saldo >= 20 && saldo < 50){
        nivel = 'Prata';
    } else if(saldo >= 50 && saldo < 80){
        nivel = 'Ouro';
    } else if(saldo >= 80 && saldo < 90){
        nivel = 'Diamante';
    } else if(saldo >= 90 && saldo < 100){
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    console.log(`O Jogador ${jogador.nickname} tem ${jogador.vitoria} vitórias e ${jogador.derrotas} derrotas, totalizando ${totalPartidas} partidas. Seu saldo é de ${saldo} e seu winrate é de ${taxadeVitoria.toFixed(2)}%, Rank atual ${nivel}`);
}

jogadores.forEach(calculaRank);
