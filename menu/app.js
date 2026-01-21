// function openPopup(name, price, image) {
//     const popupData = { name, price, image };
//     localStorage.setItem("popupData", JSON.stringify(popupData));

//     document.getElementById("overlay").style.display = "block";
//     document.getElementById("popupFrame").style.display = "block";
// }

// function openPopup2(name, price, image) {
//     const popupData2 = { name, price, image };
//     localStorage.setItem("popupData2", JSON.stringify(popupData2));

//     document.getElementById("overlay").style.display = "block";
//     document.getElementById("popupFrame2").style.display = "block";
// }

// function openPopup3(name, price, image) {
//     const popupData3 = { name, price, image };
//     localStorage.setItem("popupData3", JSON.stringify(popupData3));

//     document.getElementById("overlay").style.display = "block";
//     document.getElementById("popupFrame3").style.display = "block";
// }

// function closePopup() {
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById("popupFrame").style.display = "none";
// }

// function closePopup2() {
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById("popupFrame2").style.display = "none";
// }

// function closePopup3() {
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById("popupFrame3").style.display = "none";
// }
//----------------------------------------------
// function openPopup(name, price) {
//     const iframe = document.getElementById("popupFrame");
//     const overlay = document.getElementById("overlay");

//     // truyền dữ liệu qua URL
//     iframe.src = `addtocart.html?name=${encodeURIComponent(name)}&price=${price}`;

//     overlay.style.display = "block";
//     iframe.style.display = "block";
// }

// function closePopup() {
//     document.getElementById("overlay").style.display = "none";
//     document.getElementById("popupFrame").style.display = "none";
// }

// function openPopup(button) {
//   const name = button.dataset.name;
//   const price = button.dataset.price;
//   const image = button.dataset.image;

//   // Lưu dữ liệu để popup dùng
//   localStorage.setItem("popupItem", JSON.stringify({
//     name,
//     price,
//     image
//   }));

//   document.getElementById("overlay").style.display = "block";
//   document.getElementById("popupFrame").style.display = "block";
// }



function openPopup(button) {
  const name = button.dataset.name;
  const price = button.dataset.price;
  const image = button.dataset.image;

  // Lưu dữ liệu để popup dùng
  localStorage.setItem("popupItem", JSON.stringify({
    name,
    price,
    image
  }));

  const iframe = document.getElementById("popupFrame");
  iframe.src = "addtocart.html";

  document.getElementById("overlay").style.display = "block";
    iframe.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
    document.getElementById("popupFrame").style.display = "none";
    document.body.style.overflow = "auto";
}


