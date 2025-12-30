function openModal() {
    document.getElementById("messageModal").style.display = "block";
}

function closeModal() {
    document.getElementById("messageModal").style.display = "none";
    document.getElementById("modalSuccess").style.display = "none";
}

function sendModalMessage() {
    document.getElementById("modalSuccess").style.display = "block";

    document.getElementById("modalName").value = "";
    document.getElementById("modalEmail").value = "";
    document.getElementById("modalMessage").value = "";
}
