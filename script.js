let x;
x = prompt("Įveskite X koordinates");
x = + x;

let y
y = prompt("Įveskite Y koordinates");
y = + y;

let vektorius = vektoriausIlgis(x, y);
console.log ("Vektoriaus ilgis yra " + vektorius);

function vektoriausIlgis (x_koord, y_koord){
   return vektorius1 = Math.sqrt(x_koord * x_koord + y_koord + y_koord);
}

