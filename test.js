async function fetchData() {
  try {
    const productCode = document.getElementById("barcode").value;

    const response = await fetch(
      `https://world.openfoodfacts.net/api/v2/product/${productCode}`
    );
    if (!response.ok) {
      throw new Error("Could not find the product");
    }
    const data = await response.json();
    const nutriScore = data.product.nutriscore_score;
    const textScore = document.getElementById("nutriScore");

    textScore.innerHTML = nutriScore;
  } catch (error) {
    console.error(error);
  }
}
