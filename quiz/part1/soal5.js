//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    let hasil = '';

    for (let i = 0; i < kata.length; i++) { // = 3
        let charCode = kata.charCodeAt(i); //mengambil kode ASCII tiap huruf
        let nextChar = String.fromCharCode(charCode + 1); //mengubah ke huruf berikutnya

        // jika hurug ada 'z', ubah ke 'a'
        if (kata[i] === 'z') {
            nextChar = 'a';
        }

        hasil += nextChar; //menyusn hasil akhir
    }

    return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu