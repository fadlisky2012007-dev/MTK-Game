// function rollRNG() {
  
//   const rarity = [
//     "Common",
//     "Uncommon",
//     "Rare",
//     "Superior",
//     "Epic",
//     "Legendary",
//     "Mythic",
//     "Relic",
//     "Divine",
//     "Universe",
//     "Godly"
//   ];

// let angka = Math.floor(Math.random() * rarity.length);

//   let hasil = rarity[angka];

//   document.getElementById("hasil").innerHTML =
//   `
//   kamu mendapatkan ${angka}/100 <br>
//   Dengan Rarity: ${hasil}
//   `;
// }

let angka1;
let angka2;
let jawabanBenar;

function buatSoal() {

  angka1 = Math.floor(Math.random() * 10) + 1;
  angka2 = Math.floor(Math.random() * 10) + 1;

  jawabanBenar = angka1 * angka2;

  document.getElementById("soal").innerHTML =
    `Soal mtk: ${angka1} x ${angka2} = ?`;

}

function cekJawaban() {

  let jawabanUser =
    document.getElementById("jawaban").value;

  if (jawabanUser == jawabanBenar) {

    document.getElementById("hasil").innerHTML =
      "✅ Jawaban Benar!";

  } else {

    document.getElementById("hasil").innerHTML =
      `❌ Salah! Jawaban yang benar adalah ${jawabanBenar}`;

  }

}