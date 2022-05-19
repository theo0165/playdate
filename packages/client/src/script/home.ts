import socket from './socket';

const inputField = document.querySelector('input');
const submitBtn = document.querySelector('button');

if (inputField && submitBtn) {
  submitBtn.addEventListener('click', () => {
    socket.emit('join game', {
      username: inputField.value,
      x: 0,
      y: 0,
    });
  });
}

socket.on('join ok', (data) => {
  window.localStorage.setItem('game', JSON.stringify(data));

  window.location.href = '/game.html';
});

export {};