function openPopup2(button) {
  const name = button.dataset.name;
  const price = button.dataset.price;
  const image = button.dataset.image;

  // Lưu dữ liệu để popup dùng
  localStorage.setItem("popupItem", JSON.stringify({
    name,
    price,
    image
  }));

  const iframe = document.getElementById("popupFrame2");
  iframe.src = "popuppizza2/addpizza2.html";

  document.getElementById("overlay").style.display = "block";
  iframe.style.display = "block";
}

function closePopup2() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupFrame2").style.display = "none";
}
