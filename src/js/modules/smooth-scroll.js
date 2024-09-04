['products', 'portfolio', 'about-us', 'manufacture', 'contacts'].forEach(
  (item) => {
    const section = document.getElementById(`${item}-section`);
    if (section) {
      document
        .getElementById(`${item}-link`)
        .addEventListener('click', (event) => {
          event.preventDefault();
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
    }
  }
);
