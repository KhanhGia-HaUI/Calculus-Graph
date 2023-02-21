"use strict";
var KhanhGia;
(function (KhanhGia) {
    var Graph;
    (function (Graph) {
        var Draw;
        (function (Draw) {
            function main() {
                const canvas = document.createElement('canvas');
                const graph = document.getElementById('graph');
                graph.appendChild(canvas);
                const chart = new Chart(canvas, {
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
                function addFunctionToChart(expression) {
                    const datasets = chart.data.datasets;
                    const existingLabels = datasets.map((dataset) => dataset.label);
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
                    const xRange = chart.scales.x.max - chart.scales.x.min;
                    for (let i = 0; i <= xRange; i++) {
                        const x = chart.scales.x.min + i;
                        const scope = { x };
                        const y = math.evaluate(expression, scope);
                        dataset.data.push({ x, y });
                    }
                    chart.data.datasets.push(dataset);
                    chart.update();
                }
                const inputForm = document.getElementById('add-function-button');
                inputForm.addEventListener('click', (event) => {
                    event.preventDefault();
                    const expressionInput = document.getElementById('function-input');
                    const expression = expressionInput.value;
                    try {
                        math.parse(expression);
                    }
                    catch (error) {
                        alert('Invalid expression');
                        return;
                    }
                    addFunctionToChart(expression);
                    expressionInput.value = '';
                });
                const chartContainer = document.getElementById('graph');
                chartContainer.addEventListener('scroll', () => {
                    const { scrollLeft } = chartContainer;
                    const { x, y } = chart.scales;
                    const xRange = x.max - x.min;
                    chart.options.scales.x.min = Math.round(scrollLeft / chart.width * xRange) + x.min;
                    chart.options.scales.x.max = Math.round((scrollLeft + chart.width) / chart.width * xRange) + x.min;
                    chart.update();
                });
            }
            Draw.main = main;
        })(Draw = Graph.Draw || (Graph.Draw = {}));
    })(Graph = KhanhGia.Graph || (KhanhGia.Graph = {}));
})(KhanhGia || (KhanhGia = {}));
KhanhGia.Graph.Draw.main();
