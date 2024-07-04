import { drawChart } from "./js/drawChart.js";
const data = [10, 12, 45, 33, 28];

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// draw
c.fillStyle = "#DEDEDE";
c.fillRect(0, 0, 500, 500);

// draw data
drawChart(data, canvas)
