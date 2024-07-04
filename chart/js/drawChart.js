/**
 *
 * @param {Array<any>} data
 * @param {HTMLCanvasElement} canvas
 */
export const drawChart = (data, canvas) => {
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const PADDING = 20

  const canvasWidthWithoutPadding = canvasWidth - PADDING;
  const canvasHeightWithoutPadding = canvasHeight - PADDING;

  const context = canvas.getContext("2d");
  const dataMax = Math.max(...data);
  // Subtract canvas height with top padding
  const multiplier = (canvasHeightWithoutPadding - PADDING) / dataMax;

  context.fillStyle = "#00bc53";
  for (let i = 0; i < data.length; i++) {
    const dataPoint = data[i];
    const dataWidth = Math.floor(canvasWidthWithoutPadding / (data.length * 2));
    const dataGap = dataWidth;

    const x = dataGap * (i + 1) + dataWidth * i;
    const y = canvasHeightWithoutPadding - dataPoint * multiplier;
    const width = dataWidth;
    const height = dataPoint * multiplier;
    console.log(x, y, width, height);
    context.fillRect(x, y, width, height);
  }
};
