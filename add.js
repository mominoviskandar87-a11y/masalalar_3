// 1-masala. Imtihon natijasini aniqlash
// O‘quvchining bali score o‘zgaruvchisida berilgan.
// • 90–100 oralig‘ida: “A’lo”.
// • 70–89 oralig‘ida: “Yaxshi”.
// • 60–69 oralig‘ida: “Qoniqarli”.
// • 0–59 oralig‘ida: “Yiqildingiz”.
// • 0 dan kichik yoki 100 dan katta bo‘lsa: “Noto‘g‘ri ball kiritildi”


let ball=57
if(ball<0 || ball>100){
    console.log(`Noto‘g‘ri ball kiritildi`)
}else if(ball>=90 && ball<=100){
    console.log(`A’lo`)
}else if(ball>=70 && ball<=89){
    console.log(`Yaxshi`)
}else if(ball>=60 && ball<=69){
    console.log(`Qoniqarli`)
}else if(ball>=0 && ball<=59){
    console.log(`Yiqildingiz`)
}





// Quyidagi o‘zgaruvchilar berilgan:
// let login = "admin";
// let password = "12345";
// let isBlocked = false;
// • Foydalanuvchi bloklangan bo‘lsa: “Hisobingiz bloklangan”.
// • Login va parol to‘g‘ri hamda foydalanuvchi bloklanmagan bo‘lsa: “Xush kelibsiz!”.
// • Login noto‘g‘ri bo‘lsa: “Login noto‘g‘ri”.
// • Login to‘g‘ri, parol noto‘g‘ri bo‘lsa: “Parol noto‘g‘ri”.
// Shart: &&, || va if / else if / else dan foydalaning. Shartlar ketma-ketligiga e’tibor bering




let login = "admin";
let password = "12345";
let isBlocked = false;
let inputLogin = "adm22in";
let inputPassword = "12345";
if (isBlocked) {
  console.log("Hisobingiz bloklangan");
} else if (inputLogin === login && inputPassword === password) {
  console.log("Xush kelibsiz!");
} else if (inputLogin !== login) {
  console.log("Login noto‘g‘ri");
} else if (inputLogin === login && inputPassword !== password) {
  console.log("Parol noto‘g‘ri");
} 


// 3-masala. Chegirmali xarid
// Do‘konda xaridorning xarid summasi va mijozlik maqomi berilgan:
// let total = 650000;
// let isMember = true;
// • Xarid summasi 1 000 000 so‘m yoki undan ko‘p bo‘lsa, 20% chegirma.
// • Xarid summasi 500 000 so‘m yoki undan ko‘p va mijoz a’zo bo‘lsa, 15% chegirma.
// • Xarid summasi 500 000 so‘m yoki undan ko‘p, lekin mijoz a’zo bo‘lmasa, 10% chegirma.
// • Xarid summasi 200 000 so‘m yoki undan ko‘p bo‘lsa, 5% chegirma.
// • Boshqa holatlarda chegirma berilmaydi.
// Yakuniy to‘lov miqdori va chegirma foizini chiqaring. Shart: && ishlating va chegirmalarni to‘g‘ri
// tartibda tekshiring.



let total = 10000;
let isMember = true;
if(total>=1000000){
    console.log(`20% chegirma`)
}else if(total>=500000 && isMember === true ){
    console.log(`15% chegirma`)
} else if(total>=500000  ){
    console.log(`10% chegirma`)
} else if(total>=200000){
    console.log(`5% chegirma.`)
}else {
    console.log(`Chegirma berilmaydi`)
}





// 4-masala. Uchburchak mavjudligini tekshirish
// Uchta tomon berilgan:
// let a = 5;
// let b = 7;
// let c = 9;
// • Tomonlardan biri 0 yoki manfiy bo‘lsa: “Tomonlar noto‘g‘ri”.
// • Uchta tomon uchburchak hosil qila olsa: “Uchburchak mavjud”.
// • Aks holda: “Uchburchak mavjud emas”.
// Uchburchak hosil bo‘lishi uchun istalgan ikki tomon yig‘indisi uchinchi tomondan katta bo‘lishi
// kerak. Uchta taqqoslashni && bilan tekshiring.


let a = 5
let b = 7
let c = 10

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Tomonlar noto‘g‘ri");
} else if (a + b > c && a + c > b && b + c > a) {
  console.log("Uchburchak mavjud");
} else {
  console.log("Uchburchak mavjud emas");
}



// 5-masala. Yetkazib berish narxi
// Buyurtma summasi va yetkazib berish hududi berilgan:
// let orderPrice = 180000;
// let region = "tashkent";
// let isExpress = true;
// • Toshkentda buyurtma 200 000 so‘m yoki undan ko‘p bo‘lsa, oddiy yetkazib berish bepul.
// • Toshkentda 200 000 so‘mdan kam bo‘lsa, oddiy yetkazib berish 15 000 so‘m.
// • Boshqa hududlarda oddiy yetkazib berish 25 000 so‘m.
// • Tezkor yetkazib berish (isExpress = true) tanlansa, asosiy yetkazib berish narxiga qo‘shimcha
// 20 000 so‘m qo‘shiladi.
// Buyurtma va yetkazib berishning umumiy narxini chiqaring. Hudud, summa va yetkazib berish
// turini birgalikda tekshiring.



// 6-masala. Ishga qabul qilish
// Nomzodning ma’lumotlari berilgan:
// let age = 22;
// let experience = 2;
// let englishLevel = "B2";
// let hasCertificate = true;
// • Yoshi 18 dan kichik bo‘lsa: “Yosh talabiga mos emas”.
// • Yoshi kamida 18, tajribasi kamida 2 yil va ingliz tili darajasi B2 yoki C1 bo‘lsa: “Suhbatga taklif
// qilindi”.
// • Tajribasi kamida 1 yil va sertifikati mavjud bo‘lsa: “Qo‘shimcha ko‘rib chiqiladi”.
// • Qolgan holatlarda: “Talablarga mos emas”.
// Shart: &&, || va else if dan foydalaning. Bir nechta talabni bir vaqtda tekshiring.


let age = 22;
let experience = 2;
let englishLevel = "B2";
let hasCertificate = true;

if (age < 18) {
  console.log("Yosh talabiga mos emas");
} else if (age >= 18 && experience >= 2 && (englishLevel === "B2" || englishLevel === "C1")) {
  console.log("Suhbatga taklif qilindi");
} else if (experience >= 1 && hasCertificate) {
  console.log("Qo‘shimcha ko‘rib chiqiladi");
} else {
  console.log("Talablarga mos emas");
}

// 7-masala. Bankomatdan pul yechish
// Bank hisobidagi mablag‘, yechmoqchi bo‘lgan summa va karta holati berilgan:
// let balance = 850000;
// let amount = 300000;
// let cardBlocked = false;
// • Karta bloklangan bo‘lsa: “Karta bloklangan”.
// • Yechiladigan summa 0 yoki undan kichik bo‘lsa: “Summa noto‘g‘ri”.
// • Summa 1 000 000 so‘mdan katta bo‘lsa: “Kunlik limitdan oshdi”.
// • Hisobdagi mablag‘ yetarli bo‘lmasa: “Mablag‘ yetarli emas”.
// • Barcha shartlar bajarilsa, pul yechilsin va qolgan balans chiqarilsin.
// Shart: holatlarni to‘g‘ri ketma-ketlikda yozing.

let balance = 850000;
let amount = 300000;
let cardBlocked = false;

if (cardBlocked) {
  console.log("Karta bloklangan");
} else if (amount <= 0) {
  console.log("Summa noto‘g‘ri");
} else if (amount > 1000000) {
  console.log("Kunlik limitdan oshdi");
} else if (amount > balance) {
  console.log("Mablag‘ yetarli emas");
} else {
  balance = balance - amount;
  console.log("Pul yechildi: " + amount + " so‘m");
  console.log("Qolgan balans: " + balance + " so‘m");
}


// 8-masala. Sonlarni tahlil qilish
// Uchta son berilgan:
// let a = 12;
// let b = 12;
// let c = 5;
// • Uchala son teng bo‘lsa: “Barcha sonlar teng”.
// • Faqat ikkita son teng bo‘lsa: “Ikkita son teng”.
// • Uchala son har xil bo‘lsa: “Barcha sonlar har xil”.
// • Agar kamida bittasi manfiy bo‘lsa, “Manfiy son mavjud” holatini ham hisobga oling.
// Shart: &&, || va else if ishlatilsin. Manfiy son holati boshqa natijalarga qanday ta’sir qilishini
// o‘zingiz hal qiling va shartlar tartibini izohlang.


let aa = 12;
let bb = 12;
let cc = -5;

if (aa < 0 || bb < 0 || cc < 0) {
  console.log("Manfiy son mavjud");
} else if (aa === bb && bb === cc) {
  console.log("Barcha sonlar teng");
} else if (aa === bb || aa === cc || bb === cc) {
  console.log("Ikkita son teng");
} else {
  console.log("Barcha sonlar har xil");
}




// 9-masala. Talabaning stipendiyasi
// Talabaning o‘rtacha bali, davomati va intizom holati berilgan:
// let averageScore = 88;
// let attendance = 92;
// let hasWarning = false;
// • O‘rtacha bali 90 yoki undan yuqori, davomati kamida 90% va ogohlantirishi bo‘lmasa: “Yuqori
// stipendiya”.
// • O‘rtacha bali 75 yoki undan yuqori, davomati kamida 80% va ogohlantirishi bo‘lmasa: “Oddiy
// stipendiya”.
// • Davomati 60% dan past bo‘lsa yoki intizomiy ogohlantirish mavjud bo‘lsa: “Stipendiya
// berilmaydi”.
// • Boshqa holatlarda: “Talablar bajarilmadi”.
// Shart: && va || dan foydalaning. Ustuvor shartlarni birinchi tekshiring.