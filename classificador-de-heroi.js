let herois = [
    { nome: "Homem-Aranha", xp: 2000 },
    { nome: "Homem de Ferro", xp: 5000 },
    { nome: "Capitão América", xp: 7000 },
    { nome: "Hulk", xp: 8000 },
    { nome: "Thor", xp: 9000 },
    { nome: "Wolverine", xp: 10000 },
    { nome: "Feiticeira Escarlate", xp: 11000 },
    { nome: "Viúva Negra", xp: 12000 }
];

for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Saída 
    console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
}
