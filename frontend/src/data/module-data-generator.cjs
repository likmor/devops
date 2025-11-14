const fs = require("fs");
let path = "src/data/module-data.js"
if (fs.existsSync(path)) {
  console.log("module-data.js exists.");
  return;
}
const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = []; // tablica z obiektami

fs.readFile("src/data/names.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //podział łańcucha z imionami na wiersze.
  names = data
    .split("\n")
    .map((s) => s.trim())
    .filter((n) => n.length != 0);
  let content = "export const people = [";
  for (let i = 0; i < count; i++) {
    let name = names[~~((Math.random() * names.length) / 1)];
    let birthDate = 1995 + Math.floor(Math.random() * 10);
    let birthMonth = 1 + + Math.floor(Math.random() * 11)
    if (birthMonth < 10) birthMonth = `0${birthMonth}`;
    let birthDay = 1 + + Math.floor(Math.random() * 28)
    if (birthDay < 10) birthDay = `0${birthDay}`;

    let email = `${name.toLocaleLowerCase()}${i}@gmail.com`;
    let phone = `${Math.floor(Math.random() * 999)}-${Math.floor(
      Math.random() * 999
    )}-${Math.floor(Math.random() * 999)}`;
    //losowanie imienia z bilioteki imion
    let json = JSON.stringify({
      id: i,
      name: name,
      birthDate: `${birthDate}-${birthMonth}-${birthDay}`,
      email: email,
      phone: phone,
      rating: Math.floor(Math.random() * 10),
      url: null,
    });
    content += json;
    content += ",";
    // content += `"$}",`;
  }
  content += "];";
  //zapis łańcucha do pliku
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("module-data.js generated");
  });
});
