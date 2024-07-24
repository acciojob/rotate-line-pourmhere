const line = document.getElementById('line');
let angle = 0;

function rotateLine() {
  angle += 2; // Increase the angle by 2 degrees
  line.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotateLine); // Call rotateLine at the next frame
}

// Start the rotation
rotateLine();