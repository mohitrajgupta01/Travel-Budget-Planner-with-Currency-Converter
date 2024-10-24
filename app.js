// Fetch currency conversion rates from an API (dummy function here)
async function getCurrencyRate(baseCurrency, targetCurrency) {
    const rates = {
      'USD': 1,
      'EUR': 0.85,
      'INR': 73.5
    };
    return rates[targetCurrency];
  }
  
  // Calculate the total budget
  document.getElementById('budget-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    // Get form inputs
    const destination = document.getElementById('destination').value;
    const duration = document.getElementById('duration').value;
    const currency = document.getElementById('currency').value;
    const accommodation = document.getElementById('accommodation').value;
    const food = document.getElementById('food').value;
    const transport = document.getElementById('transport').value;
  
    // Total cost calculation
    const totalCost = (parseFloat(accommodation) + parseFloat(food) + parseFloat(transport)) * parseInt(duration);
  
    // Convert to selected currency
    const rate = await getCurrencyRate('USD', currency); // Assume USD as base
    const convertedCost = totalCost * rate;
  
    // Update result on the page
    document.getElementById('total-cost').textContent = convertedCost.toFixed(2);
    document.getElementById('selected-currency').textContent = currency;
  });
  