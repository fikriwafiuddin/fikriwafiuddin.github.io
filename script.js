const angka = [1, 2, 3, 4, 5];
// for( i = 0; i < 10; i++ ) {
//     const random = Math.round(Math.random() * 10);
//     angka.push(random);
// }



// function jumlahAngka() {
//     const angkaBaru = angka.reduce((acc, cur) => acc + cur);
//     return angkaBaru;
// }

// console.log(angka);

// const kotak = Array.from(document.querySelectorAll('.kotak'));
// kotak.forEach(function(e) {
//     e.style.color = 'red';
// });



// var arr = [];




// var jumlahAngka = 0;
// for (let index = 1; index <= 5; index++) {
//     // arr.push(Math.round(Math.random() * 100));
//     var acak = Math.round(Math.random() * 100);
//     // document.querySelector('#kotak'+index).innerHTML() = acak;
//     $('#kotak'+index).html(acak);
//     jumlahAngka += acak;
// }

// $('#akhir = setTimeout(function() {
    
// })').html(jumlahAngka);
// console.log(jumlahAngka);






// const angka1 = Math.round(Math.random() * 100);
// const angka2 = Math.round(Math.random() * 100);
// const angka3 = Math.round(Math.random() * 100);
// const angka4 = Math.round(Math.random() * 100);
// const angka5 = Math.round(Math.random() * 100);

// const kotak1 = document.querySelector('#kotak1');
// kotak1.innerHTML = angka1;

// const kotak2 = document.querySelector('#kotak2');
// kotak2.innerHTML = angka2;

// const kotak3 = document.querySelector('#kotak3');
// kotak3.innerHTML = angka3;

// const kotak4 = document.querySelector('#kotak4');
// kotak4.innerHTML = angka4;

// const kotak5 = document.querySelector('#kotak5');
// kotak5.innerHTML = angka5;

// const jumlahAngka = angka1 + angka2 + angka3 + angka4 + angka5;
// console.log(jumlahAngka);

// const akhir = setTimeout(function() {
    
// }) = document.querySelector('.hasil .kotak');
// hasil.innerHTML = jumlahAngka;

let input = document.querySelector('#tebak');
let button = document.querySelector('.button');
let jawaban = document.querySelector('#jawaban');
let check = document.querySelector('#check');
let countdown = document.querySelector('.countdown');
let hasil = document.querySelector('#hasil');
let papanScore = document.querySelector('.papanScore');

// function hasilAkhir(player, comp) {
//     if(player == comp) {
//         jawaban.innerHTML = 'BENAR';
//     } else {
//         jawaban.innerHTML = 'SALAH';
//     }
// }

// button.addEventListener('click', function() {
//     hasilAkhir(input.value, jumlahAngka);
// });



const mulai = document.querySelector('#mulai');
mulai.addEventListener('click', function() {
    hasil.innerHTML = '...';
    jawaban.innerHTML = '---'
    jawaban.style.color = 'white';
    var jumlahAngka = 0;
    for (let index = 1; index <= 5; index++) {
    // arr.push(Math.round(Math.random() * 100));
    var acak = Math.round(Math.random() * 100);
    // document.querySelector('#kotak'+index).innerHTML() = acak;
    $('#kotak'+index).html(acak);
    jumlahAngka += acak;
    // $('#hasil').html(jumlahAngka);
    }

    function hasilAkhir(player, comp) {
        if(player == comp) {
            jawaban.innerHTML = 'BENAR';
            jawaban.style.color = 'green';
            hasil.innerHTML = jumlahAngka;
        } else {
            jawaban.innerHTML = 'SALAH';
            jawaban.style.color = 'red';
        }
    }
    
    button.addEventListener('click', function() {
        hasilAkhir(input.value, jumlahAngka);
    });




    let timer = 40;

let interval = setInterval(function () {
    timer--;
    countdown.innerHTML = timer;
    if(timer == 0) {
        clearInterval(interval);
        hasil.innerHTML = jumlahAngka;
        jawaban.innerHTML = 'SELESAI';
    } else if(input.value == jumlahAngka) {
        clearInterval(interval);
        
    }
},1000 );
})

// var timer2 = "0:15";
// function hitungMundur() {
// var intervalId;
// intervalID = setInterval(function() {
//     var timer = timer2.split(':');
//     //by parsing integer, I avoid all extra string processing
//     var minutes = parseInt(timer[0], 10);
//     var seconds = parseInt(timer[1], 10);
//     --seconds;
//     minutes = (seconds < 0) ? --minutes : minutes;
//     if (minutes < 0) clearInterval(interval);
//     seconds = (seconds < 0) ? 59 : seconds;
//     seconds = (seconds < 10) ? '0' + seconds : seconds;
//     //minutes = (minutes < 10) ?  minutes : minutes;
//     $('.countdown').html(minutes + ':' + seconds);
//     timer2 = minutes + ':' + seconds; 
// }, 1000);
// }
