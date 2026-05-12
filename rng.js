let angka1;
let angka2;
let jawabanBenar;

let timer;
let countdown;
let waktu = 5;

let gameOver = false;
let streak = 0;

function mulaiGame() {
  streak = 0;
  document.getElementById("streak").innerHTML =
    `Correct Streak: ${streak}`;

  buatSoal();
}
function buatSoal() {
  gameOver = false;
  // selama game berlangsung, di anggap false, setelah berhenti true
  
  // bentuk dan warna hasil{
  document.getElementById("hasil").style.backgroundColor =
    "transparent";
  document.getElementById("hasil").style.padding =
    "0px";
  document.getElementById("hasil").style.width =
    "0%";
    // bentuk dasar selesai}
  // membuat angka acak untuk variabelnya{
  angka1 = Math.floor(Math.random() * 10) + 1;
  angka2 = Math.floor(Math.random() * 10) + 1;
  jawabanBenar = angka1 * angka2;
  // selesai}

  document.getElementById("soal").innerHTML =
    `Soal mtk: ${angka1} x ${angka2} = ?`;
    
  //auto reset jawaban, soal, dll{
  document.getElementById("jawaban").value = "";
  document.getElementById("hasil").innerHTML = "";
  document.getElementById("jawaban").focus();
    // auto reset selesai}
  // interval waktu{
  waktu = 5;
   document.getElementById("timer").innerHTML =
   `Waktu: ${waktu}`;
   clearInterval(countdown);

    countdown = setInterval(function() {
    waktu--;
    document.getElementById("timer").innerHTML =
    `Waktu: ${waktu} detik`;

    if (waktu <= 0) {
    clearInterval(countdown);
    }
  }, 1000);
// interval waktu selesai}

  clearTimeout(timer);
  timer = setTimeout(function() {

  // jika game over{
   gameOver = true;
    document.getElementById("hasil").innerHTML = "Waktu habis! Game Over!";
    document.getElementById("hasil").style.backgroundColor = "red";
    document.getElementById("hasil").style.color = "white";
     document.getElementById("hasil").style.padding = "15px";
      document.getElementById("hasil").style.width = "80%";
  }, 5000);
  // gameOver}
}

function cekJawaban() {
  if (gameOver) {
    return;
  }

  let jawabanUser =
    document.getElementById("jawaban").value;
  clearTimeout(timer);

  if (jawabanUser == jawabanBenar) {
    document.getElementById("hasil").innerHTML =
      "Geloo kawan!, Jawaban mu Benar!!";
    document.getElementById("hasil").style.backgroundColor = "green";
    document.getElementById("hasil").style.color = "white";
    streak++;
  document.getElementById("streak").innerHTML =
    `Benar Beruntun: ${streak}`;
    
  } else {
    document.getElementById("hasil").innerHTML =
      `Salah woyy!! Jawaban yang benar itu ${jawabanBenar}!`;
    document.getElementById("hasil").style.backgroundColor = "red";
    document.getElementById("hasil").style.color = "white";
  }
    
    
    
    document.getElementById("hasil").style.padding = "15px";
    document.getElementById("hasil").style.width = "80%";
  
  setTimeout(function() {
    buatSoal();
  }, 1000);

}