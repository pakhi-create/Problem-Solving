document.getElementById("checkPriceBtn").addEventListener("click", function () {
  const category = document.getElementById("category").value;
  const resultDiv = document.getElementById("result");

  if (!category) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "⚠️ Please select a category first!";
    return;
  }

  let price;
  switch (category) {
    case "child":
      price = 50;
      break;
    case "male":
      price = 100;
      break;
    case "female":
      price = 80;
      break;
    default:
      price = 0;
  }

  const name = category.charAt(0).toUpperCase() + category.slice(1);
  resultDiv.style.color = "#2e7d32";
  resultDiv.textContent = `✅ Ticket price for ${name} is ${price} Taka.`;
});
