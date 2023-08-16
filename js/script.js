function hitungLuas() {
  let tinggi = document.getElementById("tinggi-input").value;
  let alas = document.getElementById("alas-input").value;
  console.log((tinggi * alas) / 2);
  let hasil = (tinggi * alas) / 2;
  const pembahasan = document.getElementById("pembahasan1");
  const pembahasanHasil =
    "L = 1/2 x a x t \n L = 1/2 x " + tinggi + " x " + alas + "\n L = " + hasil;
  pembahasan.innerHTML = pembahasanHasil
    .split("\n")
    .map((line) => `<p>${line}</p>`)
    .join("");
  pembahasan.style.display = "block";
}

var hitungKeliling = () => {
  let A = document.getElementById("A").value;
  let B = document.getElementById("B").value;
  let C = document.getElementById("C").value;
  let hasil = parseInt(A) + parseInt(B) + parseInt(C);
  console.log(hasil);
  const pembahasan = document.getElementById("pembahasan2");
  const pembahasanHasil =
    "K = S1 + S2 + S3 \n K = " + A + " + " + B + " + " + C + "\n K = " + hasil;
  pembahasan.innerHTML = pembahasanHasil
    .split("\n")
    .map((line) => `<p>${line}</p>`)
    .join("");

  pembahasan.style.display = "block";
};

var resetButton1 = () => {
  const pembahasan = document.getElementById("pembahasan1");
  pembahasan.style.display = "none";
  pembahasan.textContent = "";
  const tinggiInput = document.getElementById("tinggi-input");
  const alasInput = document.getElementById("alas-input");
  tinggiInput.value = "";
  alasInput.value = "";
};
var resetButton2 = () => {
  const pembahasan = document.getElementById("pembahasan2");
  pembahasan.style.display = "none";
  pembahasan.textContent = "";
  const A = document.getElementById("A");
  const B = document.getElementById("B");
  const C = document.getElementById("C");
  A.value = "";
  B.value = "";
  C.value = "";
};
