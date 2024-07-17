async function fetchData() {
  const errorMessage = document.getElementById("error");
  const productName = document.getElementById("productName");
  const gradeHeading = document.getElementById("gradeHeading");
  const nutriGrade = document.getElementById("grade");

  try {
    const productCode = document.getElementById("barcode").value;

    const response = await fetch(
      `https://world.openfoodfacts.net/api/v2/product/${productCode}`
    );
    if (!response.ok) {
      throw new Error("Could not find the product");
    }
    const data = await response.json();
    errorMessage.textContent = "";
    console.log(data);

    // Name of the Product
    productName.textContent = data.product.product_name || "Name not available";

    // Nutriscore grade of the Product
    gradeHeading.textContent = "Nutriscore Grade:";
    nutriGrade.textContent = data.product.nutriscore_grade || "Not available";
  } catch (error) {
    console.error(error);
    productName.textContent = "";
    gradeHeading.textContent = "";
    nutriGrade.textContent = "";
    errorMessage.textContent = "Could not find the product";
  }
}
