function applyVoucher(btn) {
  const voucher = btn.closest(".voucher");
  const qtyEl = voucher.querySelector(".qty");
  let qty = Number(qtyEl.innerText);

  if (qty <= 0) {
    alert("Voucher đã hết lượt!");
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }

  let total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  let discountPercent = Number(voucher.dataset.discount);
  let discountAmount = Math.round(total * discountPercent / 100);

  localStorage.setItem("voucherDiscount", discountAmount);

  qty--;
  qtyEl.innerText = qty;
  if (qty === 0) btn.disabled = true;

  alert(`🎉 Đã áp dụng voucher giảm ${discountPercent}%`);
}