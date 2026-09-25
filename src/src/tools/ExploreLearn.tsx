import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Train,
  Plane,
  Bus,
  Mic2,
  Palette,
  RotateCcw,
  Play,
  Square,
} from "lucide-react";

type ExploreSection =
  | "menu"
  | "train"
  | "plane"
  | "bus"
  | "education"
  | "singing"
  | "drawing";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is 12 × 5?",
    options: ["50", "60", "70", "80"],
    answer: "60",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which word is a noun?",
    options: ["Run", "Beautiful", "School", "Quickly"],
    answer: "School",
  },
  {
    question: "What is 100 ÷ 4?",
    options: ["20", "25", "30", "40"],
    answer: "25",
  },
  {
    question: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
];

const travelTips = {
  train: [
    "Keep your ticket or booking details ready.",
    "Carry drinking water and essential medicines if needed.",
    "Reach the station with enough time before departure.",
    "Keep your phone charged before starting the journey.",
    "Keep important belongings safely with you.",
  ],
  plane: [
    "Keep your ticket and identification documents ready.",
    "Check baggage requirements before leaving for the airport.",
    "Keep important medicines and valuables in your cabin baggage.",
    "Reach the airport early enough for check-in and security.",
    "Keep your phone charged and important travel information accessible.",
  ],
  bus: [
    "Keep your ticket or booking information ready.",
    "Carry water and essential personal items.",
    "Arrive at the boarding point early.",
    "Keep valuables close to you during the journey.",
    "Save important journey information before travelling.",
  ],
};

export default function ExploreLearn() {
  const [section, setSection] = useState<ExploreSection>("menu");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const [singingSeconds, setSingingSeconds] = useState(60);
  const [singingRunning, setSingingRunning] = useState(false);

  const [drawing, setDrawing] = useState(false);

  const toggleChecklist = (key: string) => {
    setChecked((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const answerQuiz = (answer: string) => {
    const current = quizQuestions[quizIndex];

    if (answer === current.answer) {
      setQuizScore((score) => score + 1);
    }

    if (quizIndex === quizQuestions.length - 1) {
      setQuizFinished(true);
    } else {
      setQuizIndex((index) => index + 1);
    }
  };

  const startSingingPractice = () => {
    if (singingRunning) return;

    setSingingRunning(true);

    let remaining = 60;

    const timer = window.setInterval(() => {
      remaining -= 1;
      setSingingSeconds(remaining);

      if (remaining <= 0) {
        window.clearInterval(timer);
        setSingingRunning(false);
      }
    }, 1000);
  };

  const resetSinging = () => {
    setSingingRunning(false);
    setSingingSeconds(60);
  };

  const drawStart = () => setDrawing(true);
  const drawEnd = () => setDrawing(false);

  const travelScreen = (
    type: "train" | "plane" | "bus",
    title: string,
    icon: React.ReactNode
  ) => (
    <>
      <button
        className="back-button"
        onClick={() => setSection("menu")}
      >
        <ArrowLeft size={19} />
        Back
      </button>

      <div className="page-title">
        <h1>
          {icon} {title}
        </h1>
        <p>Useful preparation tools for your journey.</p>
      </div>

      <div className="solution-detail">
        <div className="detail-section">
          <h2>Travel Checklist</h2>

          {travelTips[type].map((tip, index) => {
            const key = `${type}-${index}`;

            return (
              <button
                key={key}
                className="settings-item"
                onClick={() => toggleChecklist(key)}
              >
                <div>
                  <CheckCircle2
                    size={21}
                    color={checked[key] ? "#16a34a" : undefined}
                  />

                  <span>{tip}</span>
                </div>

                {checked[key] && <strong>Done</strong>}
              </button>
            );
          })}
        </div>

        <div className="quick-fix">
          <strong>Travel reminder</strong>
          <p>
            Check your ticket, timing and important belongings
            before leaving.
          </p>
        </div>
      </div>
    </>
  );

  if (section === "train") {
    return travelScreen(
      "train",
      "Train Travel",
      <Train size={25} />
    );
  }

  if (section === "plane") {
    return travelScreen(
      "plane",
      "Air Travel",
      <Plane size={25} />
    );
  }

  if (section === "bus") {
    return travelScreen(
      "bus",
      "Bus Travel",
      <Bus size={25} />
    );
  }

  if (section === "education") {
    const currentQuestion = quizQuestions[quizIndex];

    return (
      <>
        <button
          className="back-button"
          onClick={() => setSection("menu")}
        >
          <ArrowLeft size={19} />
          Back
        </button>

        <div className="page-title">
          <h1>
            <BookOpen size={25} /> Educational Quiz
          </h1>
          <p>Practice a few questions every day.</p>
        </div>

        <div className="solution-detail">
          {quizFinished ? (
            <>
              <div className="detail-section">
                <h2>Quiz Complete 🎉</h2>

                <p>
                  Your score:{" "}
                  <strong>
                    {quizScore} / {quizQuestions.length}
                  </strong>
                </p>

                <button
                  className="tool-card"
                  onClick={resetQuiz}
                >
                  <RotateCcw size={21} />
                  <div>
                    <h3>Try Again</h3>
                    <p>Start the quiz again.</p>
                  </div>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="badge">
                Question {quizIndex + 1} of{" "}
                {quizQuestions.length}
              </div>

              <div className="detail-section">
                <h2>{currentQuestion.question}</h2>

                <div className="solution-list">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      className="solution-card"
                      onClick={() => answerQuiz(option)}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }

  if (section === "singing") {
    return (
      <>
        <button
          className="back-button"
          onClick={() => setSection("menu")}
        >
          <ArrowLeft size={19} />
          Back
        </button>

        <div className="page-title">
          <h1>
            <Mic2 size={25} /> Singing Practice
          </h1>
          <p>Use a short daily warm-up routine.</p>
        </div>

        <div className="solution-detail">
          <div className="detail-section">
            <h2>1-Minute Warm-up</h2>

            <div className="hero">
              <div className="hero-icon">
                <Mic2 size={30} />
              </div>

              <h1>{singingSeconds}s</h1>

              <p>
                Breathe comfortably and practise gentle vocal
                sounds.
              </p>
            </div>

            <button
              className="tool-card"
              onClick={
                singingRunning
                  ? resetSinging
                  : startSingingPractice
              }
            >
              {singingRunning ? (
                <Square size={22} />
              ) : (
                <Play size={22} />
              )}

              <div>
                <h3>
                  {singingRunning
                    ? "Stop Practice"
                    : "Start Practice"}
                </h3>

                <p>
                  {singingRunning
                    ? "Practice timer is running."
                    : "Start your one-minute warm-up."}
                </p>
              </div>
            </button>

            <div className="quick-fix">
              <strong>Simple routine</strong>
              <p>
                Sit or stand comfortably, breathe naturally,
                and avoid forcing your voice.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (section === "drawing") {
    return (
      <>
        <button
          className="back-button"
          onClick={() => setSection("menu")}
        >
          <ArrowLeft size={19} />
          Back
        </button>

        <div className="page-title">
          <h1>
            <Palette size={25} /> Drawing Practice
          </h1>
          <p>Use the canvas for simple drawing practice.</p>
        </div>

        <div className="solution-detail">
          <canvas
            width={650}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid #dce2ea",
              borderRadius: "14px",
              background: "#ffffff",
              touchAction: "none",
              display: "block",
            }}
            onPointerDown={(event) => {
              const canvas = event.currentTarget;
              const rect = canvas.getBoundingClientRect();
              const context = canvas.getContext("2d");

              if (!context) return;

              setDrawing(true);

              context.beginPath();
              context.moveTo(
                ((event.clientX - rect.left) /
                  rect.width) *
                  canvas.width,
                ((event.clientY - rect.top) /
                  rect.height) *
                  canvas.height
              );
            }}
            onPointerMove={(event) => {
              if (!drawing) return;

              const canvas = event.currentTarget;
              const rect = canvas.getBoundingClientRect();
              const context = canvas.getContext("2d");

              if (!context) return;

              context.lineWidth = 4;
              context.lineCap = "round";

              context.lineTo(
                ((event.clientX - rect.left) /
                  rect.width) *
                  canvas.width,
                ((event.clientY - rect.top) /
                  rect.height) *
                  canvas.height
              );

              context.stroke();
            }}
            onPointerUp={drawEnd}
            onPointerLeave={drawEnd}
          />

          <button
            className="tool-card"
            onClick={() => {
              const canvas = document.querySelector(
                "canvas"
              ) as HTMLCanvasElement | null;

              const context = canvas?.getContext("2d");

              if (canvas && context) {
                context.clearRect(
                  0,
                  0,
                  canvas.width,
                  canvas.height
                );
              }
            }}
          >
            <RotateCcw size={21} />

            <div>
              <h3>Clear Drawing</h3>
              <p>Start a fresh drawing.</p>
            </div>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="page-title">
        <h1>Explore & Learn</h1>
        <p>
          Useful travel, learning and creative tools.
        </p>
      </div>

      <div className="category-grid">
        <button
          className="category-card"
          onClick={() => setSection("train")}
        >
          <span className="category-icon">🚆</span>
          <strong>Train</strong>
          <small>Travel checklist and preparation</small>
        </button>

        <button
          className="category-card"
          onClick={() => setSection("plane")}
        >
          <span className="category-icon">✈️</span>
          <strong>Plane</strong>
          <small>Flight preparation and checklist</small>
        </button>

        <button
          className="category-card"
          onClick={() => setSection("bus")}
        >
          <span className="category-icon">🚌</span>
          <strong>Bus</strong>
          <small>Bus journey preparation</small>
        </button>

        <button
          className="category-card"
          onClick={() => setSection("education")}
        >
          <span className="category-icon">📚</span>
          <strong>Educational</strong>
          <small>Daily quiz and learning practice</small>
        </button>

        <button
          className="category-card"
          onClick={() => setSection("singing")}
        >
          <span className="category-icon">🎤</span>
          <strong>Singing</strong>
          <small>Daily vocal practice</small>
        </button>

        <button
          className="category-card"
          onClick={() => setSection("drawing")}
        >
          <span className="category-icon">🎨</span>
          <strong>Drawing</strong>
          <small>Draw and practise creatively</small>
        </button>
      </div>
    </>
  );
}
