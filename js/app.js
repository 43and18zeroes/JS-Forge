const initialStartDate = '2013-10-01';
const today = new Date();
today.setDate(today.getDate() - 1);
const initialEndDate = today.toISOString().split('T')[0];
const ctx = document.getElementById('btc-chart').getContext('2d');
let bitcoinData;
let chartInstance = null;

const chartParams = {
  sevenDays: { labels: [], data: [] },
  oneMonth: { labels: [], data: [] },
  sixMonths: { labels: [], data: [] },
  max: { labels: [], data: [] },
};

function createGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 350);
  gradient.addColorStop(0, 'rgba(247, 147, 26, 1)'); // Dunklere orange Farbe am Start
  gradient.addColorStop(1, 'rgba(24, 26, 32, 0.1)'); // Hellere orange Farbe am Ende
  return gradient;
}

function drawChart(labels, data) {
  if (!chartInstance) {
    const gradient = createGradient(ctx);
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'BITCOIN - EURO (BTC - EUR)',
            data: data,
            // backgroundColor: 'rgba(247, 147, 26, 1)',
            backgroundColor: gradient,
            borderColor: 'rgba(247, 147, 26, 1)',
            borderWidth: 2,
            pointRadius: 0, // Keine Kreise anzeigen
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            grid: {
              color: '#979da8',
            },
            ticks: {
              color: '#979da8',
            },
          },
          x: {
            grid: {
              color: '#979da8',
            },
            ticks: {
              color: '#979da8',
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: '#979da8',
            },
          },
        },
      },
    });
  } else {
    chartInstance.data.labels = labels;
    chartInstance.data.datasets[0].data = data;
    chartInstance.update();
  }
}

function initChartParams() {
  chartParams.sevenDays.labels = Object.keys(bitcoinData).slice(-7);
  chartParams.sevenDays.data = Object.values(bitcoinData).slice(-7);
  chartParams.sixMonths.labels = Object.keys(bitcoinData).slice(-185);
  chartParams.sixMonths.data = Object.values(bitcoinData).slice(-185);
  for (let i = 0; i < Object.keys(bitcoinData).length; i += 48) {
    chartParams.max.labels.push(Object.keys(bitcoinData)[i]);
    chartParams.max.data.push(Object.values(bitcoinData)[i]);
  }
}

function addButtonEventListener(buttonId, labels, data) {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', () => {
    drawChart(labels, data);
  });
}

function initBtnEventlisteners() {
  addButtonEventListener(
    'seven-days-btn',
    chartParams.sevenDays.labels,
    chartParams.sevenDays.data
  );
  addButtonEventListener(
    'one-month-btn',
    chartParams.oneMonth.labels,
    chartParams.oneMonth.data
  );
  addButtonEventListener(
    'six-month-btn',
    chartParams.sixMonths.labels,
    chartParams.sixMonths.data
  );
  addButtonEventListener(
    'max-btn',
    chartParams.max.labels,
    chartParams.max.data
  );
}

async function fetchBitcoinData(startDate, endDate, currency = 'EUR') {
  const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  const data = await response.json();
  return data.bpi;
}

async function initChart() {
  try {
    bitcoinData = await fetchBitcoinData(initialStartDate, initialEndDate);
    chartParams.oneMonth.labels = Object.keys(bitcoinData).slice(-31);
    chartParams.oneMonth.data = Object.values(bitcoinData).slice(-31);
    drawChart(chartParams.oneMonth.labels, chartParams.oneMonth.data);
    initChartParams();
    initBtnEventlisteners();
  } catch (error) {
    console.error('Error fetching Bitcoin data:', error);
    alert('Error loading the Bitcoin data. Please try again later.');
  }
}

initChart();

// clone

import { useState } from 'react';
import './styles.css';

const content = [
  [
    'React is extremely popular',
    'It makes building complex, interactive UIs a breeze',
    "It's powerful & flexible",
    'It has a very active and versatile ecosystem',
  ],
  [
    'Components, JSX & Props',
    'State',
    'Hooks (e.g., useEffect())',
    'Dynamic rendering',
  ],
  [
    'Official web page (react.dev)',
    'Next.js (Fullstack framework)',
    'React Native (build native mobile apps with React)',
  ],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? 'active' : ''}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? 'active' : ''}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? 'active' : ''}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
