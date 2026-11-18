<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';

  const currentPage = window.location.pathname.split('/').pop().toLowerCase();

  const artifacts = [
    {
      title: 'The top hat',
      meta: 'OBJECT 01 / COSTUME',
      art: '♠',
      artClass: 'hat-art',
      description: 'The top hat is one of the most recognizable symbols of stage magic. For Cardini, it helped establish the formal, eccentric character at the heart of his performance.'
    },
    {
      title: 'The deck of cards',
      meta: 'OBJECT 02 / MANIPULATION',
      artClass: 'cards-art',
      description: 'Playing cards are a classic tool of manipulation. Their small size and familiarity make appearances, vanishishes, and transformations especially astonishing.'
    },
    {
      title: 'The white gloves',
      meta: 'OBJECT 03 / COSTUME',
      art: '✧',
      artClass: 'glove-art',
      description: 'White gloves made the hands highly visible to the audience. They also became a signature part of the polished stage costume associated with Cardini.'
    },
    {
      title: 'The cane',
      meta: 'OBJECT 04 / STAGE PROP',
      art: '╱',
      artClass: 'cane-art',
      description: 'A cane can function as both a prop and an extension of a performer’s character. In a manipulation act, familiar objects become opportunities for visual surprise.'
    }
  ];

  let selectedArtifact = $state(null);

  function openArtifact(artifact) {
    selectedArtifact = artifact;
  }

  function closeArtifact() {
    selectedArtifact = null;
  }

  const questions = [
    {
      q: 'What was Cardini’s birth name?',
      a: [
        'Richard Valentine Pitchford',
        'Harry Houdini',
        'David Devant',
        'John Nevil Maskelyne'
      ],
      correct: 0,
      why: 'Cardini was the stage name of Richard Valentine Pitchford.'
    },
    {
      q: 'Which items were strongly associated with his stage character?',
      a: [
        'A top hat and white gloves',
        'A cowboy hat and boots',
        'A crown and cape',
        'A mask and a sword'
      ],
      correct: 0,
      why: 'The formal top hat and white gloves helped define his stage appearance.'
    },
    {
      q: 'What made his act especially distinctive?',
      a: [
        'He performed only dangerous stunts',
        'He mixed precise manipulation with comic character work',
        'He used large animals',
        'He never spoke or moved'
      ],
      correct: 1,
      why: 'The contrast between precise sleight of hand and comic bewilderment was central to the act.'
    },
    {
      q: 'What is manipulation in stage magic?',
      a: [
        'A type of stage lighting',
        'A musical interlude',
        'The skilled handling of objects to create magical effects',
        'A costume change'
      ],
      correct: 2,
      why: 'Manipulation uses practiced sleight of hand to make objects appear, vanish, or transform.'
    }
  ];

  let questionIndex = $state(0);
  let score = $state(0);
  let answered = $state(false);
  let selectedAnswer = $state(null);
  let quizComplete = $state(false);

  function chooseAnswer(choice) {
    if (answered || quizComplete) return;

    answered = true;
    selectedAnswer = choice;

    const question = questions[questionIndex];

    if (choice === question.correct) {
      score++;
    }
  }

  function nextQuestion() {
    if (!answered) return;

    if (questionIndex < questions.length - 1) {
      questionIndex++;
      answered = false;
      selectedAnswer = null;
    } else {
      quizComplete = true;
    }
  }

  function restartQuiz() {
    questionIndex = 0;
    score = 0;
    answered = false;
    selectedAnswer = null;
    quizComplete = false;
  }
</script>

<svelte:head>
  {#if currentPage === 'index.html' || currentPage === ''}
    <title>Cardini — The Art of Astonishment</title>
  {:else if currentPage === 'story.html'}
    <title>His Story — Cardini</title>
  {:else if currentPage === 'performances.html'}
    <title>Performances — Cardini</title>
  {:else if currentPage === 'collection.html'}
    <title>The Collection — Cardini</title>
  {:else if currentPage === 'trivia.html'}
    <title>Trivia — Cardini</title>
  {/if}
</svelte:head>

<Header />

{#if currentPage === 'index.html' || currentPage === ''}

  <!-- HOME PAGE -->

  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">THE MASTER MAGICIAN</p>
        <h1>Some things<br>must be <em>seen</em><br>to be believed.</h1>
        <p class="lead">Step into the extraordinary world of Cardini — where a simple gesture could turn the impossible into an unforgettable spectacle.</p>
        <div class="actions">
          <a class="button gold" href="story.html">Discover his story</a>
          <a class="text-link" href="performances.html">Explore the act <span>↗</span></a>
        </div>
      </div>

      <div class="hero-art" aria-label="Illustration of a magician's top hat and playing cards">
        <div class="halo"></div>
        <div class="hat">
          <div class="hat-body"></div>
          <div class="hat-brim"></div>
          <div class="hat-band"></div>
        </div>
        <div class="playing-card card-one">A<span>♠</span></div>
        <div class="playing-card card-two">Q<span>♥</span></div>
        <div class="spark s1">✦</div>
        <div class="spark s2">✧</div>
        <div class="spark s3">✦</div>
        <p class="art-caption">ILLUSION IS AN ART FORM</p>
      </div>
    </section>

    <section class="intro section-wrap">
      <div>
        <p class="eyebrow">A LIFE ON STAGE</p>
        <h2>More than a magician.<br><em>A true original.</em></h2>
      </div>
      <p class="body-copy">Cardini became celebrated for a distinctive stage persona: an elegant, slightly disheveled gentleman whose hat, gloves, and canes seemed to have a mind of their own. His act transformed sleight of hand into theatre.</p>
    </section>

    <section class="feature-grid section-wrap">
      <a class="feature" href="story.html">
        <span class="feature-number">01 / BIOGRAPHY</span>
        <h3>The man<br>behind the magic</h3>
        <span class="circle-arrow">↗</span>
      </a>
      <a class="feature feature-two" href="performances.html">
        <span class="feature-number">02 / THE ACT</span>
        <h3>A performance<br>like no other</h3>
        <span class="circle-arrow">↗</span>
      </a>
      <a class="feature feature-three" href="collection.html">
        <span class="feature-number">03 / ARCHIVE</span>
        <h3>Objects of<br>wonder</h3>
        <span class="circle-arrow">↗</span>
      </a>
    </section>

    <section class="quote-band">
      <p class="eyebrow">THE MAGIC OF CARDINI</p>
      <blockquote>“The secret is not simply what the audience sees. It is what they believe they saw.”</blockquote>
      <span class="quote-note">A thought inspired by the art of illusion</span>
    </section>
  </main>

{:else if currentPage === 'story.html'}

  <!-- STORY PAGE -->

  <main>
    <section class="page-hero">
      <p class="eyebrow">CHAPTER ONE / THE MAN</p>
      <h1>The story behind<br><em>the illusion.</em></h1>
      <p class="lead">From the world of vaudeville to the grand stages of the twentieth century, discover the performer behind the persona.</p>
    </section>

    <section class="story-layout section-wrap">
      <div class="story-aside">
        <span class="big-initial">C</span>
        <p class="eyebrow">RICHARD VALENTINE PITCHFORD</p>
        <p class="small-muted">Known to the world as Cardini</p>
      </div>

      <div class="story-text">
        <h2>A character unlike<br>any other.</h2>
        <p>Cardini was the stage name of Richard Valentine Pitchford (1895–197 Cardini), a British magician renowned for his inventive manipulation act. He developed a character that looked as if he had wandered in from another world: formal evening clothes, a top hat, white gloves, and an air of bewildered sophistication.</p>
        <p>Rather than presenting magic as a series of demonstrations, Cardini made the performer himself part of the mystery. Objects appeared, vanished, multiplied, and misbehaved while he seemed almost as surprised as the audience.</p>
        <p>His work helped establish a distinctive theatrical language for close-up manipulation on a large stage. The comedy, timing, and precision of the act made it memorable far beyond the mechanics of any single trick.</p>

        <div class="note">
          <strong>Research note</strong><br>
          This page is an introductory overview. Verify dates and biographical details against reliable historical sources before submitting your project.
        </div>
      </div>
    </section>

    <section class="timeline section-wrap">
      <p class="eyebrow">A LIFE IN MAGIC</p>
      <h2>Moments along<br><em>the way.</em></h2>

      <div class="timeline-list">
        <article>
          <span>1895</span>
          <div>
            <h3>The beginning</h3>
            <p>Richard Valentine Pitchford is born in the United Kingdom.</p>
          </div>
        </article>

        <article>
          <span>EARLY CAREER</span>
          <div>
            <h3>Finding the stage</h3>
            <p>He develops his performance style through the theatrical world and the traditions of variety entertainment.</p>
          </div>
        </article>

        <article>
          <span>1920s–30s</span>
          <div>
            <h3>A signature character</h3>
            <p>The elegant, eccentric Cardini persona becomes associated with astonishing card and object manipulation.</p>
          </div>
        </article>

        <article>
          <span>LEGACY</span>
          <div>
            <h3>An influence that remains</h3>
            <p>His act continues to be studied by magicians and remembered as a landmark of stage manipulation.</p>
          </div>
        </article>
      </div>
    </section>
  </main>

{:else if currentPage === 'performances.html'}

  <!-- PERFORMANCES PAGE -->

  <main>
    <section class="page-hero">
      <p class="eyebrow">CHAPTER TWO / THE PERFORMANCE</p>
      <h1>Precision disguised<br>as <em>pure chaos.</em></h1>
      <p class="lead">The Cardini act was a carefully choreographed dance between skill, comedy, and surprise.</p>
    </section>

    <section class="performance-intro section-wrap">
      <div class="performance-poster">
        <div class="poster-stars">✦　✧　✦</div>
        <p>TONIGHT'S<br>ENTERTAINMENT</p>
        <div class="poster-hat">♠</div>
        <strong>CARDINI</strong>
        <small>THE MASTER OF MANIPULATION</small>
      </div>

      <div>
        <p class="eyebrow">THE SIGNATURE ACT</p>
        <h2>When the props<br>steal the show.</h2>
        <p class="body-copy">A glove, a deck of cards, a cane, or a cigarette could become the center of a comic mystery. Cardini's stage character appeared to struggle with the very objects he controlled so expertly.</p>
        <p class="body-copy">That contrast — apparent clumsiness paired with extraordinary precision — was central to the act's charm. The audience laughed, wondered, and then realized they had no idea how the effect happened.</p>
      </div>
    </section>

    <section class="section-wrap">
      <p class="eyebrow">THE LANGUAGE OF THE ACT</p>
      <h2>Four ingredients<br><em>of wonder.</em></h2>

      <div class="ingredient-grid">
        <article>
          <span>01</span>
          <h3>Manipulation</h3>
          <p>Small objects appear, vanish, and transform through practiced sleight of hand.</p>
        </article>

        <article>
          <span>02</span>
          <h3>Character</h3>
          <p>The performer’s bewildered reactions make the impossible feel playful and alive.</p>
        </article>

        <article>
          <span>03</span>
          <h3>Timing</h3>
          <p>Every pause, glance, and gesture helps guide the audience’s attention.</p>
        </article>

        <article>
          <span>04</span>
          <h3>Comedy</h3>
          <p>Surprise and misdirection are balanced with a distinct sense of humour.</p>
        </article>
      </div>
    </section>
  </main>

{:else if currentPage === 'collection.html'}

  <!-- COLLECTION PAGE -->

  <main>
    <section class="page-hero">
      <p class="eyebrow">CHAPTER THREE / THE ARCHIVE</p>
      <h1>Every object<br>holds a <em>secret.</em></h1>
      <p class="lead">Explore the visual language of a classic magician's act. Select an object to learn why it matters.</p>
    </section>

    <section class="collection-grid section-wrap">
      {#each artifacts as artifact}
        <button class="artifact" onclick={() => openArtifact(artifact)}>
          <span class={`artifact-art ${artifact.artClass}`}>
            {#if artifact.artClass === 'cards-art'}
              <i>A♠</i>
              <i>Q♥</i>
            {:else}
              {artifact.art}
            {/if}
          </span>
          <span class="artifact-meta">{artifact.meta}</span>
          <strong>{artifact.title}</strong>
          <span class="artifact-open">Explore object ↗</span>
        </button>
      {/each}
    </section>

    <p class="archive-disclaimer section-wrap">These are interpretive exhibit entries, not a verified catalogue of surviving Cardini artifacts. Add sourced archival photographs and credits before presenting this as a historical collection.</p>
  </main>

  {#if selectedArtifact}
    <div
      class="modal open"
      aria-hidden="false"
      onclick={(event) => {
        if (event.target === event.currentTarget) closeArtifact();
      }}
    >
      <div
        class="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button class="modal-close" aria-label="Close" onclick={closeArtifact}>×</button>
        <p class="eyebrow">FROM THE COLLECTION</p>
        <h2 id="modal-title">{selectedArtifact.title}</h2>
        <p>{selectedArtifact.description}</p>
      </div>
    </div>
  {/if}

{:else if currentPage === 'trivia.html'}

  <!-- TRIVIA PAGE -->

  <main>
    <section class="page-hero">
      <p class="eyebrow">CHAPTER FOUR / TEST YOUR KNOWLEDGE</p>
      <h1>How well do you<br>know the <em>magic?</em></h1>
      <p class="lead">A few quick questions about Cardini's performance style and the art of stage illusion.</p>
    </section>

    <section class="quiz-wrap section-wrap">
      <div class="quiz-card">
        <div class="quiz-top">
          <span class="eyebrow">THE CARDINI QUIZ</span>
          <span>
            {#if quizComplete}
              QUIZ COMPLETE
            {:else}
              QUESTION {questionIndex + 1} OF {questions.length}
            {/if}
          </span>
        </div>

        <div class="progress-track">
          <span style={`width: ${quizComplete ? 100 : ((questionIndex + 1) / questions.length) * 100}%`}></span>
        </div>

        {#if quizComplete}
          <h2>You scored {score} out of {questions.length}.</h2>
          <div class="answers"></div>
          <p class="feedback">
            {score === 4
              ? 'A perfect performance. You know your Cardini!'
              : 'Thanks for taking the quiz. Explore the other pages to learn more.'}
          </p>
        {:else}
          <h2>{questions[questionIndex].q}</h2>

          <div class="answers">
            {#each questions[questionIndex].a as answer, i}
              <button
                class="answer"
                class:correct={answered && i === questions[questionIndex].correct}
                class:wrong={answered && i === selectedAnswer && i !== questions[questionIndex].correct}
                disabled={answered}
                onclick={() => chooseAnswer(i)}
              >
                {answer}
              </button>
            {/each}
          </div>

          <p class="feedback" aria-live="polite">
            {#if answered}
              {selectedAnswer === questions[questionIndex].correct
                ? `Correct! ${questions[questionIndex].why}`
                : `Not quite. ${questions[questionIndex].why}`}
            {/if}
          </p>
        {/if}

        <div class="quiz-bottom">
          <span>SCORE: {score}</span>

          {#if quizComplete}
            <button class="button gold" onclick={restartQuiz}>Try again</button>
          {:else}
            <button
              class="button gold"
              disabled={!answered}
              onclick={nextQuestion}
            >
              {questionIndex === questions.length - 1
                ? 'See results →'
                : 'Next question →'}
            </button>
          {/if}
        </div>
      </div>
    </section>
  </main>

{:else}

  <main>
    <section class="page-hero">
      <h1>Page not found.</h1>
      <p class="lead">The page you are looking for does not exist.</p>
      <a class="button gold" href="index.html">Return home</a>
    </section>
  </main>

{/if}

<Footer />

<svelte:window onkeydown={(event) => {
  if (event.key === 'Escape') closeArtifact();
}} />