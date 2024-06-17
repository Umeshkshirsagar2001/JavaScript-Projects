const button = document.getElementById("search-btn");
const resetButton = document.getElementById("reset-btn");
const input = document.getElementById("inputproduct");
const resultDiv = document.getElementById("result");

async function getData(inputname) {
   const proxyUrl = 'https://api.allorigins.win/get?url=';                     //due to cors issues Cross-Origin Resource Sharing security
   const apiUrl = `https://www.fruityvice.com/api/fruit/${inputname}`;          //fruityvice nutrition
   try {
      const response = await fetch(`${proxyUrl}${encodeURIComponent(apiUrl)}`);
      if (!response.ok) {
         throw new Error('Network response was not ok');
      }
      const jsonResponse = await response.json();
      const data = JSON.parse(jsonResponse.contents);
      return data;
   } catch (error) {
      console.error('Fetch error:', error);
      return null; // Return null if there's an error fetching or parsing data
   }
}

button.addEventListener('click', async () => {
   const value = input.value.trim().toLowerCase();
   if (value) {
      const result = await getData(value);
      if (result) {
         displayResult(result);
      } else {
         displayResult(null, 'No data found');
      }
   } else {
      displayResult(null, 'Please enter a valid fruit or vegetable name');
   }
});

resetButton.addEventListener('click', () => {
   input.value = '';
   resultDiv.classList.add('d-none');
   resultDiv.innerHTML = '';
});

function displayResult(data, errorMsg = 'No data found') {
   resultDiv.classList.remove('d-none');
   if (data) {
      resultDiv.innerHTML = `
         <h2>${data.name}</h2>
         <h4>Nutrition Information:</h4>
         <p><strong>Calories:</strong> ${data.nutritions.calories}</p>
         <p><strong>Carbohydrates:</strong> ${data.nutritions.carbohydrates}g</p>
         <p><strong>Fat:</strong> ${data.nutritions.fat}g</p>
         <p><strong>Protein:</strong> ${data.nutritions.protein}g</p>
         <p><strong>Sugar:</strong> ${data.nutritions.sugar}g</p>
      `;
   } else {
      resultDiv.innerHTML = `<p>${errorMsg}</p>`;
   }
}
