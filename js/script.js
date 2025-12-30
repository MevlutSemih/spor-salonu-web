const calculateBtn = document.getElementById("calculateBtn");
const monthInput = document.getElementById("monthInput");
const result = document.getElementById("result");

const fiyatListesi = {
    1: 1500,
    2: 2800,
    3: 3700,
    4: 4500,
    5: 5200,
    6: 5500, // 6 ayda indirim yapılmış gibi düşündük
    7: 6500,
    8: 7000,
    9: 7500,
    10: 8000,
    11: 8300,
    12: 8500  // 12 ayda ciddi bir indirim
};


calculateBtn.addEventListener("click", function () {
    const girilenDeger = monthInput.value;
    const ay = Number(girilenDeger);

    // 1. Kontrol: Sayı tam sayı mı? (2.3 gibi girişleri engeller)
    if (!Number.isInteger(ay)) {
        result.textContent = "Lütfen sadece tam sayı giriniz (Örn: 3).";
        result.style.color = "orange";
        return;
    }

    // 2. Kontrol: 1-12 aralığında mı?
    if (ay < 1 || ay > 12) {
        result.textContent = "Lütfen 1 ile 12 arasında bir ay giriniz.";
        result.style.color = "red";
        return;
    }

    // Her şey yolundaysa hesapla
    const toplam = fiyatListesi[ay];
    result.textContent = `${ay} Aylık Toplam Ücret: ${toplam} TL`;
    result.style.color = "green";
});


