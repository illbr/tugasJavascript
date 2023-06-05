//Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data

let biodata= {
    name: "moh ilham ramadhan",
    age: 25,
    hobby: ["memancing","bermain musik","futsal"],
    isMaried: false,
    schoolList: [
        {nameShcoll: "mima 09 keting", yearIn: 2005, yearOut: 2011, major: null},
        {nameShcoll: "smp islam yosowilangun", yearIn: 2011, yearOut: 2014, major: null},
        {nameShcoll: "smkn 1 lumajang", yearIn: 2014, yearOut: 2017, major: "tkj"}
    ],
    skill: [
        {skillName: "play drum", level: "advance"},
        {skillName: "fishing", level: "advance"}
    ],
    interestInCoding: true
}
console.log(biodata)




/*Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia,
 Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut
  harus diisi, dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
90 - 100 = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
0 - 59 = E
*/


function hitungRataRataUN(matematika, bahasaIndonesia, bahasaInggris, ipa) {
    if (!matematika || !bahasaIndonesia || !bahasaInggris || !ipa) {
      return "Semua nilai harus diisi!";
    }
  
    let rataRata = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4
 
    let grade = rataRata > 89 && rataRata <= 100 ? "A":
                rataRata > 79 && rataRata < 90 ? "B":
                rataRata > 69 && rataRata < 80 ? "C":
                rataRata > 59 && rataRata < 70 ? "D": 
                rataRata >= 0 && rataRata < 60 ? "E": 
                "yang anda masukan bukan nilai rata rata";
  
    return "Rata-rata = " + rataRata + "\nGrade = " + grade;
  }
  console.log(hitungRataRataUN(90,80,50,90))
  



/*Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number
 yang menghasilkan output segitiga terbalik yang berisi angka
 */

 function printSegitiga(angka) {
    if (typeof angka !== "number") {
      console.log("Data harus angka");
    } else {
      for (let v = angka; v >= 1; v--) {
        let baris = " ";
        for (let h = 1; h <= v; h++) {
          baris += h + " ";
        }
        console.log(baris);
      }
    }
  }
printSegitiga(5);
  
  
  
  
  
  
  

/*Ubahlah data  tersebut menggunakan spread operator menjadi: 
name: nama anda
email: email anda
hobby: hobi anda
*/



let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let data1 = {
    ...data,
     name:"ilham",
     email: "ilhamr560@gmail.com",
     hoby: "futsal"

}
console.log(data1)


//Ambilah data “street dan city” tersebut menggunakan destructuring

const {street, city} = data.address

console.log(street)
console.log(city)



