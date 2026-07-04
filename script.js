// Card -> modal wiring
document.querySelectorAll('.card[data-modal]').forEach(function (card) {
  var dialog = document.getElementById(card.dataset.modal);
  if (!dialog) return;

  function open() {
    dialog.showModal();
    document.body.classList.add('modal-open');
  }

  card.addEventListener('click', open);
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
});

document.querySelectorAll('dialog.modal').forEach(function (dialog) {
  dialog.querySelector('.modal-close').addEventListener('click', function () {
    dialog.close();
  });

  // Click on the backdrop closes the modal
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });

  // Fires on Escape as well
  dialog.addEventListener('close', function () {
    document.body.classList.remove('modal-open');
  });
});
