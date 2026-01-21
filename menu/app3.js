function openPopup3(button) {
  const name = button.dataset.name;
  const price = button.dataset.price;
  const image = button.dataset.image;

  // Lưu dữ liệu để popup dùng
  localStorage.setItem("popupItem", JSON.stringify({
    name,
    price,
    image
  }));

  const iframe = document.getElementById("popupFrame3");
  iframe.src = "addpizza3.html";

  document.getElementById("overlay").style.display = "block";
  iframe.style.display = "block";
}

function closePopup3() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupFrame3").style.display = "none";
}
