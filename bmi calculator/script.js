let currentChart = null; // Holds the current BMI chart instance to avoid duplicate charts

// Event listener for BMI form submission
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission behavior

    // Get user input values
    const units = document.getElementById('units').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate input values to ensure they are positive numbers
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Please enter valid values.');
        return;
    }

    let bmi = 0; // Variable to store the calculated BMI

    // Calculate BMI based on selected unit system
    if (units === 'metric') {
        bmi = weight / ((height / 100) ** 2); // Convert height from cm to meters and compute BMI
    } else if (units === 'imperial') {
        bmi = (weight / (height ** 2)) * 703; // Convert height to inches and compute BMI
    }

    displayResult(bmi); // Display the calculated BMI result
    addToHistory(bmi, units, weight, height); // Store the BMI record in history
    updateChart(); // Update the BMI trend chart
});

// Function to display the BMI result along with a health category
function displayResult(bmi) {
    let result = '';

    // Determine BMI category based on standard BMI ranges
    if (bmi < 18.5) {
        result = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = `Your BMI is ${bmi.toFixed(2)}. You have a normal weight.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    } else {
        result = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
    }

    // Display the BMI result in the webpage
    document.getElementById('result').innerText = result;
}

// Function to save the BMI calculation history in local storage
function addToHistory(bmi, units, weight, height) {
    const history = JSON.parse(localStorage.getItem('bmiHistory')) || []; // Retrieve existing history or initialize an empty array
    const timestamp = new Date().toLocaleString(); // Get current date and time
    history.push({ bmi, units, weight, height, timestamp }); // Add new BMI record to history
    localStorage.setItem('bmiHistory', JSON.stringify(history)); // Save updated history in local storage
    displayHistory(); // Refresh the displayed history
}

// Function to display stored BMI calculation history
function displayHistory() {
    const history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '<h2>Calculation History</h2>'; // Set title for history section

    // Iterate through history and create elements for each entry
    history.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('history-item');
        div.innerHTML = `Date: ${item.timestamp}<br> BMI: ${item.bmi.toFixed(2)}<br> Weight: ${item.weight} ${item.units === 'metric' ? 'kg' : 'lbs'}<br> Height: ${item.height} ${item.units === 'metric' ? 'cm' : 'in'}`;
        historyContainer.appendChild(div);
    });
}

// Function to update the BMI trend chart
function updateChart() {
    const history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    const labels = history.map(item => item.timestamp); // Extract timestamps for X-axis
    const data = history.map(item => item.bmi); // Extract BMI values for Y-axis

    const ctx = document.getElementById('bmiChart').getContext('2d');

    // Destroy the previous chart instance if it exists to avoid duplicate charts
    if (currentChart) {
        currentChart.destroy();
    }

    // Create a new line chart showing BMI trends over time
    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'BMI over time',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Ensure Y-axis starts from zero
                }
            }
        }
    });
}

// **Initial Load**
displayHistory(); // Display saved history when the page loads
updateChart(); // Initialize the BMI trend chart
