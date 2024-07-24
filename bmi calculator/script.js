let currentChart = null;

document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const units = document.getElementById('units').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        alert('Please enter valid values.');
        return;
    }

    let bmi = 0;
    if (units === 'metric') {
        bmi = weight / ((height / 100) ** 2); // height in cm to meters
    } else if (units === 'imperial') {
        bmi = (weight / (height ** 2)) * 703; // height in inches
    }

    displayResult(bmi);
    addToHistory(bmi, units, weight, height);
    updateChart();
});

function displayResult(bmi) {
    let result = '';

    if (bmi < 18.5) {
        result = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = `Your BMI is ${bmi.toFixed(2)}. You have a normal weight.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    } else {
        result = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
    }

    document.getElementById('result').innerText = result;
}

function addToHistory(bmi, units, weight, height) {
    const history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    const timestamp = new Date().toLocaleString();
    history.push({ bmi, units, weight, height, timestamp });
    localStorage.setItem('bmiHistory', JSON.stringify(history));
    displayHistory();
}

function displayHistory() {
    const history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '<h2>Calculation History</h2>';
    history.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('history-item');
        div.innerHTML = `Date: ${item.timestamp}<br> BMI: ${item.bmi.toFixed(2)}<br> Weight: ${item.weight} ${item.units === 'metric' ? 'kg' : 'lbs'}<br> Height: ${item.height} ${item.units === 'metric' ? 'cm' : 'in'}`;
        historyContainer.appendChild(div);
    });
}

function updateChart() {
    const history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
    const labels = history.map(item => item.timestamp);
    const data = history.map(item => item.bmi);

    const ctx = document.getElementById('bmiChart').getContext('2d');

    // Destroy the previous chart instance if it exists
    if (currentChart) {
        currentChart.destroy();
    }

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
                    beginAtZero: true
                }
            }
        }
    });
}

// Initial load
displayHistory();
updateChart();
