"use strict";
namespace KhanhGia.Graph.Draw {
  export function main() {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const graph: HTMLElement = document.getElementById('graph')!;
    graph.appendChild(canvas);

    const chart: any = new Chart(canvas, {
      type: 'scatter',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            min: -10,
            max: 10,
            ticks: {
              stepSize: 1,
              precision: 0
            }
          },
          y: {
            min: -10,
            max: 10,
            ticks: {
              stepSize: 1,
              precision: 0
            }
          }
        },
        plugins: {
          annotation: {
            annotations: [{
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y',
              value: 0,
              borderColor: 'black',
              borderWidth: 1
            }, {
              type: 'line',
              mode: 'vertical',
              scaleID: 'x',
              value: 0,
              borderColor: 'black',
              borderWidth: 1
            }]
          }
        }
      }
    });


    function addFunctionToChart(expression: string) {
      const datasets: any = chart.data.datasets!;
      const existingLabels: Array<any> = datasets.map((dataset: any) => dataset.label);

      if (existingLabels.includes(expression)) {
        alert('Function already added');
        return;
      }

      const dataset = {
        label: expression,
        data: [],
        borderColor: 'black',
        borderWidth: 1,
        fill: true,
        showLine: true
      };

      const xRange = chart.scales.x!.max! - chart.scales.x!.min!;

      for (let i: number = 0; i <= xRange; i++) {
        const x: any = chart.scales.x!.min! + i;
        const scope: any = { x };
        const y: any = math.evaluate(expression, scope);
        dataset.data.push({ x, y });
      }

      chart.data.datasets!.push(dataset);
      chart.update();
    }

    const inputForm = document.getElementById('add-function-button')!;
    inputForm.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      const expressionInput = document.getElementById('function-input') as HTMLInputElement;
      const expression = expressionInput.value;

      try {
        math.parse(expression);
      } catch (error: any) {
        alert('Invalid expression');
        return;
      }

      addFunctionToChart(expression);
      expressionInput.value = '';
    });

    const chartContainer = document.getElementById('graph')!;
    chartContainer.addEventListener('scroll', () => {
      const { scrollLeft } = chartContainer;
      const { x, y } = chart.scales;
      const xRange = x!.max! - x!.min!;

      chart.options.scales.x!.min = Math.round(scrollLeft / chart.width! * xRange) + x!.min!;
      chart.options.scales.x!.max = Math.round((scrollLeft + chart.width!) / chart.width! * xRange) + x!.min!;
      chart.update();
    });

  }
}
KhanhGia.Graph.Draw.main()