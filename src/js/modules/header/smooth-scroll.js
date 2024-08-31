['market', 'form', 'contacts'].forEach((item) => {
  const section = document.getElementById(`${item}-section`);

  if (section)
    document.getElementById(`${item}-link`).addEventListener('click', () => {
      window.scrollTo({
        top: section.getBoundingClientRect().top,
        behavior: 'smooth',
      });
    });
});
