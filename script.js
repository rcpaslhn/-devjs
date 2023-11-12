

// BANKA İŞLEMLERİ
// let yeni_satir= "\r\n"
// let metin = "1-Bakiye Görüntüleme" +yeni_satir
// +"2-Para Çekme" + yeni_satir
// +"3-Para Yatırma" + yeni_satir
// +"4-Çıkış"+yeni_satir
// +" Bankamıza hoşgeldiniz yapmak istediğiniz işlem için lütfen sayı seçiniz."

// let bakiye = 1000
// let isim ="recep"
// let parola = 12345

// let ad = prompt("isminizi giriniz")
// if(ad.toLowerCase()==isim){
//     let sifre =prompt("lütfen şifrenizi giriniz")
//     if(sifre==parola){
//         let değer =prompt(metin)
//         switch(değer){
//             case "1":
//                 console.log("Toplam Bakiyeniz:" + bakiye)
//                 break;
//                 case "2":
//                    let çekim = Number(prompt("Çekmek istediğiniz tutarı giriniz"))
//                    let kalan = bakiye-çekim
//                    console.log("Kalan Bakiyeniz:"+kalan)
//                    break;

//                    case"3":
//                    let yatan = Number(prompt("yatırılacak miktarı giriniz"))
//                    let sonuc =yatan+bakiye
//                    console.log("Toplam Bakiyeniz:"+sonuc)
//                    break;
//                    case "4":
//                     console.log("Güvenli çıkış yaptınız iyi günler")
//                     break;
//         default:
//             console.log("Lütfen geçerli bir rakam giriniz")

//         }
       
//     }else{
//         console.log("yanlış şifre girişi lütfen tekrar deneyin")
//     }
// }
// else{
//     console.log("Lütfen isminizi tekrar giriniz")
// }


// RENK OLUŞTURMA

// let renk =[]
// let karakter=["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]


// function rastgele_renk(){
//     for(let i=0; i<6; i++){
//         let rasgele_eleman =Math.floor(Math.random()*karakter.length)+1
//      renk.push(karakter[rasgele_eleman])
  

// }
// let sonuc = "#"+renk.join("")
// return sonuc
// }

// console.log(rastgele_renk())

// ŞİFRE UYGULAMASI----YAPAMADIM HOCAM

let pass_word = []
let karakterler =  [    "a",    "b",    "c",    "ç",    "d",    "e",    "f",    "g",    "ğ",    "h",    "ı",    "i",    "j",    "k",    "l",    "m",    "n",    "o",    "ö",    "p",    "r",    "s",    "ş",    "t",    "u",    "ü",    "v",    "y",    "z",    "q",    "w",    "x",    "A",    "B",    "C",    "Ç",    "D",    "E",    "F",    "G",    "Ğ",    "H",    "I",    "I",    "J",    "K",    "L",    "M",    "N",    "O",    "Ö",    "P",    "R",    "Ş",    "T",    "U",    "Ü",    "V",    "Y",    "Z",    "Q",    "W",    "X",    0,    1,    2,    3,    4,    5,    6,    7,    8,    9,    10,    "!",    "'",    "^",    "+",    "%",    "&",    "/",    "(",    ")",    "=",    "?",    "-", "_",    "*",    ",",    ";",    "`","{",    "}",    "[",    "]",    "@",    "|",    "<",    ">",    ".",    ":",    "é",    "$","#","£","€", "₺"]

let sifre_uzunluk=Number(prompt("Şifreniz kaç karakteli olsun"))
 function sifre_uretim(){
    for(let i =0; i<=sifre_uzunluk; i++){
    let randomnum =Math.floor(Math.random()*karakterler.length)+1
    pass_word.push(karakterler[randomnum])
    
}
let parolam = pass_word.join("")
return parolam
}
console.log(sifre_uretim)


