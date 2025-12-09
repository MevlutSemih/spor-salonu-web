const calculateBtn = document.getElementById("calculateBtn");
const monthInput = document.getElementById("monthInput");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
    const aylikFiyat = 800;
    const ay = Number(monthInput.value);

    if (ay <= 0 || isNaN(ay)) {
        result.textContent = "Lütfen geçerli bir ay gir";
        result.style.color = "red";
        return;
    }

    const toplam = ay * aylikFiyat;

    result.textContent = `Toplam Ücret: ${toplam} TL`;
    result.style.color = "green";
});


