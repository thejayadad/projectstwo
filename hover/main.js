const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = getRandomColor();
  });

  box.addEventListener('mouseout', () => {
    box.style.backgroundColor = '#3498db';
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
