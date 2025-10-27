document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('textForm');
  const input = document.getElementById('userText');
  const output = document.getElementById('outputArea');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();                 // spriječi reload
    const val = input.value.trim();
    if (!val) return;                    // ništa ako je prazno

    // napravi novo stilizirano prikazno polje
    const card = document.createElement('article');
    card.className = 'card';

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    // prva dva znaka u velikom
    avatar.textContent = val.slice(0,2).toUpperCase();

    const message = document.createElement('div');
    message.className = 'message';

    const text = document.createElement('div');
    text.className = 'text';
    text.textContent = val;

    const meta = document.createElement('div');
    meta.className = 'meta';
    const now = new Date();
    meta.textContent = `Prikazano: ${now.toLocaleString()}`;

    message.appendChild(text);
    message.appendChild(meta);

    card.appendChild(avatar);
    card.appendChild(message);

    // ubaci na vrh outputa
    output.prepend(card);

    // očisti input i fokusiraj za novo
    input.value = '';
    input.focus();

  });
});
