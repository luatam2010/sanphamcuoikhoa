const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); //Ngăn chặn sự kiện tự động reload của trình duyệt

    //Lấy dữ liệu từ form
    const fullName = registerForm.fullName.value;
    const username = registerForm.username.value;
    const email = registerForm.email.value;
    const phone = registerForm.phoneNumber.value;

    const gender = registerForm.gender.value;

    const userData = {
        fullName,
        username,
        email,
        phone,
        gender
    }

    localStorage.setItem("userData", JSON.stringify(userData)); //  lƯU OBJ VÀO LOCALSTORAGE
    alert("Dữ liệu đã được lưu vào localStorage!!!") //alert - thông báo/cảnh báo
})

window.onload = function () {
    const saved = localStorage.getItem("userData");
    if (!saved) return;

    const data = JSON.parse(saved);
    registerForm.fullName.value = data.fullName || "";
    registerForm.username.value = data.username || "";
    registerForm.email.value = data.email || "";
    registerForm.phoneNumber.value = data.phoneNumber || "";

    if (data.gender) {
        const genderInput = document.querySelector(`input[name="gender"][value="${data.gender}"]`);
        if (genderInput) genderInput.checked = true;
    }
}