const rating = document.getElementById("rating");
const showValue = document.getElementById("rating-value");

rating.addEventListener("change", () => {
    let value = rating.value;
    showValue.textContent = value;
});