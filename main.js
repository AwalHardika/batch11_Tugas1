// kita tangkap value dari prompt dan masukan ke dalam variable
function toLowerCase(str) {
    return str.toLowerCase();
}
let bintang = prompt("Masukan bintangmu :");

// if(bintang=="Aquarius"){
//     alert("Anda suka kebebasan dan tidak suka diatur");
// }

switch(bintang.toLowerCase()){
    case("aquarius"):
    alert("Kamu suka kebebasan dan tidak suka diatur, kamu memiliki banyak ide atau pikiran sendiri dalam menjalani sebuah kehidupan.");
    break;

    case("pisces"):
    alert("Kamu mudah terharu dan labil. Karaktermu dikenal sebagai tanda yang yang cantik luar dan dalam. Kamu mudah sekali berempati, menempatkan dirimu di posisi orang lain sehingga kamu bisa lebih memahami dan merasakan penderitaan orang lain");
    break;
    
    case("aries"):
    alert("Kamu memiliki sifat murah hati yang sering kali menjadikannya sosok panutan. Meskipun memiliki sifat yang keras, kamu selalu rela untuk berkorban bagi orang terdekatnya. Tak hanya itu, karakter kamu yang mudah bergaul dengan banyak orang");
    break;

    case("taurus"):
    alert("Kamu memiliki sifat yang cerdas dan memahami semua konsekuensi atas pilihan hidupmu. Kamu mudah marah, apabila kemarahannya memuncak maka jangan pernah mencoba menasehatinya karena justru Taurus semakin membencinya.");
    break;

    case("gemini"):
    alert("Kamu sifatnya yang tidak mudah ditebak, seringkali membuat bingung orang terdekatmu. Kecerdasan kamu adalah daya tarik utama pemilik zodiak ini. Pesonamu yang menawan membuatnya banyak dikagumi oleh orang terdekatnya, ");
    break;
    
    case("leo"):
    alert("kamu memiliki sifat yang suka memerintah. Kamu tak segan marah kepada siapa saja yang menghalangi hidupnya. Bagi kamu memberi nasihat kepada orang lain adalah kesenangan bagimu, meskipun belum tentu kamu menjalaninya. ");
    break;

    case("virgo"):
    alert("Kamu penurut dan berhati lembut. kamu menyukai ketenangan. Ciri khas kamu adalah sifat egois dan keras kepalanya. kamu selalu mengutamakan kepentingannya dan tidak peduli dengan orang lain.");
    break;

    case ("libra") :
    alert("Kamu tahu cara menemukan keseimbangan dan harmoni dalam hidup. Dalam hal apapun, kamu akan selalu menjadi sosok yang seimbang dan melakukan hal sama rata. Selain itu, kamu juga dikenal sebagai penasihat yang baik.");
    break;

    case("scorpion"):
    alert("Kamu dikenal sebagai sosok yang tekun, ambisius, dan pekerja keras. kamu juga sangat dermawan, rendah hati dan setia kawan. Karakter yang paling kuat dari kamu adalah intuisinya yang selalu tepat dan selalu mengikuti kata hati");
    break;

    case("sagitarius"):
    alert("Kamu memiliki kepribadian yang bebas dan suka berpetualang. Kamu punya kemampuan membuat hal paling membosankan menjadi hal yang paling menyenangkan. Sisi kepribadian yang hangat membuat orang lain merasa nyaman saat di dekatnya.");
    break;
    
    case("capicorn"):
    alert("kamu sangat realistis dan berpikir kritis. Ciri utamanya adalah suka pekerja keras untuk mencapai tujuan hidupnya. kamu memiliki tekad yang kuat untuk melakukan segala sesuatu.");
    break;

    default:
        alert("Kamu salah memilih bintang");


    
}