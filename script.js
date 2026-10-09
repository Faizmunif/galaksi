// Ubah pertanyaan dan jawaban di bawah agar sesuai dengan kenangan kalian.
// Ganti satu pilihan dengan jawaban yang benar-benar hanya kalian berdua pahami.

const questions = [
  {
    question: "Seng, masih inget nggak kita awal ketemu di mana? 👀",
    answers: [
      "Di kafe, lagi nongkrong cantik",
      "Di LKMM-TM ituuu!",
      "Di planet lain, ketemu alien 👽"
    ],
    correct: 1,
    feedback:
      "Cihuyyy, LKMM-TM jadi saksi awal cerita kita. ❤️"
  },
  {
    question: "Terus, siapa nih yang ngode pengen gandengan duluan? AWOKAWOK 🤭",
    answers: [
      "Si cowok, padahal sok nahan diri",
      "Si cewek yang katanya nggak sabaran",
      "Dua-duanya malu-malu aja"
    ],
    correct: 1,
    feedback:
      "AWOKAWOKAWOK, ketahuan deh siapa yang ngebet! 🤣❤️"
  },
  {
    question: "Kalau buat perjalanan kita ke depannya, aku berharap...",
    answers: [
      "Kita punya makin banyak kenangan kecil bareng",
      "Kita nggak pernah punya masalah sama sekali",
      "Kita berhenti saling bercanda"
    ],
    correct: 0,
    feedback:
      "Aamiin. Semoga kita terus punya alasan buat ketawa dan bertumbuh bareng, Seng. ♡"
  }
];


const $ = (id) => document.getElementById(id);
let questionIndex = 0;
let answered = false;

function renderQuestion() {
  const q = questions[questionIndex];
  $("progressText").textContent = `BINTANG ${questionIndex + 1} DARI ${questions.length}`;
  $("progressBar").style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
  $("question").textContent = q.question;
  $("feedback").textContent = "";
  $("answers").innerHTML = "";
  answered = false;

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index));
    $("answers").appendChild(button);
  });
}

function chooseAnswer(index) {
  if (answered) return;
  answered = true;
  const q = questions[questionIndex];
  [...$("answers").querySelectorAll("button")].forEach((button) => button.disabled = true);
  $("feedback").textContent = index === q.correct
    ? q.feedback
    : "Tidak apa-apa, coba ingat lagi. Setiap pilihan tetap membawa kita ke bintang berikutnya. ♡";

  window.setTimeout(() => {
    questionIndex += 1;
    if (questionIndex >= questions.length) {
      $("quizArea").hidden = true;
      $("gameComplete").hidden = false;
    } else {
      renderQuestion();
    }
  }, 1300);
}


function showPage(pageId) {
  const target = document.getElementById(pageId);

  if (!target) return;

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
    page.setAttribute("aria-hidden", "true");
  });

  target.classList.add("active");
  target.setAttribute("aria-hidden", "false");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

$("startBtn").addEventListener("click", () => {showPage("journey")});

$("letterBtn").addEventListener("click", () => {
  const letter = $("letter");
  const card = letter.querySelector(".letter-card");

  showPage("letter");

  // Mulai dari kondisi sedikit mengecil
  card.animate(
    [
      {
        opacity: 0.35,
        transform: "translateY(24px) scale(0.97)"
      },
      {
        opacity: 1,
        transform: "translateY(0) scale(1)"
      }
    ],
    {
      duration: 1100,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "both"
    }
  );
});




/* =====================================
   FULL-SCREEN STAR RAIN CONTROLLER
   ===================================== */

const starLayer = document.createElement("div");
starLayer.id = "starRainLayer";
starLayer.setAttribute("aria-hidden", "true");
document.body.appendChild(starLayer);

const starSymbols = ["✦", "✧", "⋆", "✶", "✷"];
const starColors = [
  "#f4d49a",
  "#e9b8d3",
  "#ffffff",
  "#c8b8ff",
  "#b9d8ff"
];

function createStarRain() {
  // Setiap klik menambahkan gelombang bintang baru
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");

    star.className = "star-rain-particle";
    star.textContent =
      starSymbols[Math.floor(Math.random() * starSymbols.length)];

    star.style.setProperty(
      "--start-x",
      `${Math.random() * 100}vw`
    );

    star.style.setProperty(
      "--star-size",
      `${10 + Math.random() * 22}px`
    );

    star.style.setProperty(
      "--star-color",
      starColors[Math.floor(Math.random() * starColors.length)]
    );

    star.style.setProperty(
      "--fall-duration",
      `${1.8 + Math.random() * 2.2}s`
    );

    star.style.setProperty(
      "--drift-x",
      `${-100 + Math.random() * 200}px`
    );

    star.style.setProperty(
      "--rotation",
      `${Math.random() * 600 - 300}deg`
    );

    // Sedikit perbedaan waktu agar hujan bintang lebih alami
    star.style.animationDelay = `${Math.random() * 0.7}s`;

    starLayer.appendChild(star);

    star.addEventListener("animationend", () => {
      star.remove();
    }, { once: true });
  }
}

$("wishBtn").addEventListener("click", () => {
  createStarRain();

  $("wishMessage").textContent =
    "Satu harapan, seribu bintang. Semoga hal-hal baik " +
    "selalu menemukan jalan menuju kamu, Seng. ✨❤️";

  // Ikon berubah menjadi hati, tetapi tombol tetap bisa diklik
  $("wishBtn").textContent = "♡";
});


$("restartBtn").addEventListener("click", () => {
  // Kembalikan mini game ke pertanyaan pertama
  questionIndex = 0;
  answered = false;

  $("quizArea").hidden = false;
  $("gameComplete").hidden = true;

  renderQuestion();

  // Kembalikan tombol harapan ke kondisi awal
  $("wishBtn").textContent = "✦";
  $("wishBtn").disabled = false;
  $("wishBtn").setAttribute(
    "aria-label",
    "Buat harapan"
  );

  $("wishMessage").textContent =
    "Tekan bintangnya, Seng. Titipkan satu harapanmu.";

  // Kembali ke halaman pembuka
  showPage("home");
});



$("musicToggle").addEventListener("click", async () => {
  const audio = $("bgMusic");
  const button = $("musicToggle");

  // Pastikan browser memuat file audio
  audio.load();

  if (audio.paused) {
    try {
      await audio.play();

      button.textContent = "♫ Musik: nyala";
      button.setAttribute("aria-pressed", "true");

      console.log("Musik berhasil diputar.");
    } catch (error) {
      console.error("Gagal memutar musik:", error);

      button.textContent = "Musik gagal diputar";
      alert(
        "Musik gagal diputar. Periksa lokasi file, format audio, dan Console browser."
      );
    }
  } else {
    audio.pause();

    button.textContent = "♫ Musik: mati";
    button.setAttribute("aria-pressed", "false");
  }
});

$("bgMusic").addEventListener("error", () => {
  console.error(
    "Audio error:",
    $("bgMusic").error?.code,
    $("bgMusic").error?.message
  );
});


$("finalSurpriseBtn").addEventListener("click", () => {
  showPage("wish");
});

renderQuestion();
