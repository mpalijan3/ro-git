document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('textForm');
  const input = document.getElementById('userText');
  const output = document.getElementById('outputArea');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();                 // spriječi reload stranice
    const val = input.value.trim();
    if (!val) return;                    // ništa ako je prazno

    // kreiraj stilizirani prikaz (karticu)
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = val;

    // dodaj na vrh output-a
    output.prepend(card);

    // očisti input i fokusiraj
    input.value = '';
    input.focus();
  });
});
