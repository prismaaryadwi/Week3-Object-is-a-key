//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    while (angka2 !== 0) {
        let sisa = angka1 % angka2; // sisa = 4
        angka1 = angka2; //16                              // 16 % 4 = 0 / true
        angka2 = sisa; //4  
    }
    return angka1;
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1