const input = document.getElementById("inputText");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

input.addEventListener("input", () => {
  const text = input.value;
  charCount.textContent = text.length;

  const words = text.trim().split(/\s+/).filter(Boolean);
  wordCount.textContent = words.length;
});
