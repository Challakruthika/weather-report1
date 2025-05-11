<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
  
    export let labels = [];         // Dates for the chart (x-axis)
    export let temperatures = [];   // Temps to plot (y-axis)
  
    let canvas; // This will be our chart's drawing space
  
    onMount(() => {
      // Create the chart when the component loads
      new Chart(canvas, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Temperature (°C)',
              data: temperatures,
              borderColor: 'blue',
              backgroundColor: 'lightblue',
              fill: true,
              tension: 0.3, // for smooth curves
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    });
  </script>
  
  <!-- Canvas is where Chart.js draws the chart -->
  <canvas bind:this={canvas}></canvas>
  