export default (): void =>
  document
    .querySelectorAll('.nav-link.active')
    .forEach(el => el.classList.remove('active'));
