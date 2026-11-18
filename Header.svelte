<script>
  let menuOpen = $state(false);

  let currentPage = window.location.pathname.split('/').pop().toLowerCase();

  if (currentPage === '') {
    currentPage = 'index.html';
  }
</script>

<header class="site-header">
  <a class="brand" href="index.html">
    <span class="brand-mark">C</span>
    <span>
      CARDINI
      <small>THE ART OF ASTONISHMENT</small>
    </span>
  </a>

  <button
    class="menu-toggle"
    aria-label="Open menu"
    onclick={() => menuOpen = !menuOpen}
  >
    ☰
  </button>

  <nav class:open={menuOpen}>
    <a class:active={currentPage === 'index.html'} href="index.html">Home</a>
    <a class:active={currentPage === 'story.html'} href="story.html">His Story</a>
    <a class:active={currentPage === 'performances.html'} href="performances.html">Performances</a>
    <a class:active={currentPage === 'collection.html'} href="collection.html">The Collection</a>
    <a class:active={currentPage === 'trivia.html'} href="trivia.html">Trivia</a>
  </nav>
</header>