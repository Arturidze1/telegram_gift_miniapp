function spin() {
  const strip = document.getElementById("roulette-strip");
  const items = strip.children;
  const itemWidth = 100;

  // Генерация массива из призов
  const extended = Array(50).fill(null).map(() => {
    return items[Math.floor(Math.random() * items.length)].outerHTML;
  });

  strip.innerHTML = extended.join("");

  // Выбираем место остановки
  const stopIndex = Math.floor(Math.random() * extended.length);
  const offset = stopIndex * -itemWidth + 100; // чтобы по центру

  strip.style.transition = "transform 2s ease-out";
  strip.style.transform = `translateX(${offset}px)`;

  setTimeout(() => {
    const prize = strip.children[stopIndex].innerText;
    document.getElementById("prize").innerText = "🎁 Тебе выпало: " + prize;
  }, 2000);
}
