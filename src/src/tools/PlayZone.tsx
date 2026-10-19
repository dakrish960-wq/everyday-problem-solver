import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Award,
  Brain,
  Check,
  Gift,
  Flame,
  Lightbulb,
  Lock,
  RotateCcw,
  Star,
  Trophy,
  Zap
} from "lucide-react";
import { solutions } from "../../data/solutions";

type PlaySection =
  | "menu"
  | "challenge"
  | "reward"
  | "mystery"
  | "puzzle"
  | "speed"
  | "achievements";

type Challenge = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const XP_KEY = "everyday-problem-solver-play-xp";
const STREAK_KEY = "everyday-problem-solver-play-streak";
const LAST_PLAY_DATE_KEY =
  "everyday-problem-solver-play-last-date";
const DAILY_REWARD_KEY =
  "everyday-problem-solver-daily-reward";
const DAILY_CHALLENGE_KEY =
  "everyday-problem-solver-daily-challenge";
const DAILY_PUZZLE_KEY =
  "everyday-problem-solver-daily-puzzle";
const BEST_SPEED_KEY =
  "everyday-problem-solver-best-speed";
const COMPLETED_CHALLENGES_KEY =
  "everyday-problem-solver-completed-challenges";
const ACHIEVEMENTS_KEY =
  "everyday-problem-solver-achievements";

const challenges: Challenge[] = [
  {
    question:
      "What is usually the first safe step when a phone suddenly becomes slow?",
    options: [
      "Restart the phone",
      "Open many more apps",
      "Delete system files",
      "Remove the battery"
    ],
    answer: 0,
    explanation:
      "A simple restart can clear temporary system issues and background processes."
  },
  {
    question:
      "What should you normally check first when Wi-Fi is connected but there is no internet?",
    options: [
      "Restart the router",
      "Break the phone",
      "Delete every app",
      "Change the screen"
    ],
    answer: 0,
    explanation:
      "Restarting the router is a simple first troubleshooting step."
  },
  {
    question:
      "What is a useful first step when a remote control stops working?",
    options: [
      "Check or replace the batteries",
      "Throw away the TV",
      "Open the TV",
      "Remove the screen"
    ],
    answer: 0,
    explanation:
      "Weak or exhausted batteries are one of the most common causes."
  },
  {
    question:
      "What is usually better for a slow-draining sink?",
    options: [
      "Check and clear the blockage safely",
      "Pour random chemicals immediately",
      "Ignore it forever",
      "Break the pipe"
    ],
    answer: 0,
    explanation:
      "A blockage should be checked and cleared using an appropriate safe method."
  },
  {
    question:
      "If a car battery seems weak, what should you avoid doing?",
    options: [
      "Ignoring repeated starting problems",
      "Checking the battery",
      "Checking connections",
      "Seeking professional help"
    ],
    answer: 0,
    explanation:
      "Repeated starting problems can indicate a battery or charging-system issue."
  },
  {
    question:
      "What is a good way to save phone storage?",
    options: [
      "Remove unnecessary files and apps",
      "Download more large videos",
      "Duplicate photos",
      "Install more games"
    ],
    answer: 0,
    explanation:
      "Removing unnecessary files, downloads and unused apps can free storage."
  },
  {
    question:
      "What should you do if an electrical repair seems dangerous?",
    options: [
      "Stop and contact a qualified professional",
      "Touch exposed wires",
      "Try random repairs",
      "Use wet hands"
    ],
    answer: 0,
    explanation:
      "Electrical hazards can cause serious injury. Stop and seek qualified help."
  },
  {
    question:
      "What is useful when clothes smell bad after washing?",
    options: [
      "Check washing, drying and machine cleanliness",
      "Keep wet clothes in a closed bag",
      "Never dry them",
      "Add unlimited detergent"
    ],
    answer: 0,
    explanation:
      "Poor drying and a dirty washing machine can contribute to musty smells."
  }
];

const puzzles: Challenge[] = [
  {
    question:
      "You have 3 apples and take 2 away. How many apples do you have?",
    options: ["1", "2", "3", "5"],
    answer: 1,
    explanation:
      "You took 2 apples, so the 2 apples you took are the ones you have."
  },
  {
    question:
      "Which comes next: 2, 4, 6, 8, ?",
    options: ["9", "10", "11", "12"],
    answer: 1,
    explanation:
      "The numbers increase by 2 each time."
  },
  {
    question:
      "Which item is different: Phone, Tablet, Laptop, Banana?",
    options: ["Phone", "Tablet", "Laptop", "Banana"],
    answer: 3,
    explanation:
      "Banana is food; the others are electronic devices."
  },
  {
    question:
      "If today is Monday, what day is tomorrow?",
    options: ["Sunday", "Tuesday", "Wednesday", "Friday"],
    answer: 1,
    explanation:
      "The day after Monday is Tuesday."
  },
  {
    question:
      "Which is normally used to measure temperature?",
    options: ["Thermometer", "Ruler", "Compass", "Hammer"],
    answer: 0,
    explanation:
      "A thermometer is designed to measure temperature."
  },
  {
    question:
      "What comes next: 5, 10, 15, 20, ?",
    options: ["21", "23", "25", "30"],
    answer: 2,
    explanation:
      "The sequence increases by 5."
  },
  {
    question:
      "Which one is normally used to cut paper?",
    options: ["Scissors", "Spoon", "Cup", "Pillow"],
    answer: 0,
    explanation:
      "Scissors are designed for cutting materials such as paper."
  }
];

const achievementList = [
  {
    id: "first",
    title: "First Step",
    description: "Complete your first Play Zone activity.",
    icon: "🌱",
    requirement: 1
  },
  {
    id: "five",
    title: "Getting Started",
    description: "Earn 5 XP.",
    icon: "⭐",
    requirement: 5
  },
  {
    id: "twentyfive",
    title: "Problem Solver",
    description: "Earn 25 XP.",
    icon: "🧠",
    requirement: 25
  },
  {
    id: "fifty",
    title: "Smart Thinker",
    description: "Earn 50 XP.",
    icon: "💡",
    requirement: 50
  },
  {
    id: "hundred",
    title: "Solution Master",
    description: "Earn 100 XP.",
    icon: "🏆",
    requirement: 100
  },
  {
    id: "streak3",
    title: "3-Day Streak",
    description: "Play on 3 consecutive days.",
    icon: "🔥",
    requirement: 3
  }
];

function getDateKey() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDayNumber() {
  const now = new Date();

  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now.getTime() -
    start.getTime();

  return Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );
}

function getStoredNumber(
  key: string,
  fallback = 0
) {
  try {
    const value = Number(
      localStorage.getItem(key)
    );

    return Number.isFinite(value)
      ? value
      : fallback;
  } catch {
    return fallback;
  }
}

function getStoredString(
  key: string,
  fallback = ""
) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function setStored(
  key: string,
  value: string | number
) {
  try {
    localStorage.setItem(
      key,
      String(value)
    );
  } catch {
    // Ignore local storage errors.
  }
}

function getLevel(xp: number) {
  if (xp >= 200) return 5;
  if (xp >= 100) return 4;
  if (xp >= 50) return 3;
  if (xp >= 25) return 2;
  return 1;
}

function getLevelName(level: number) {
  switch (level) {
    case 5:
      return "Solution Master";
    case 4:
      return "Problem Solver";
    case 3:
      return "Smart Thinker";
    case 2:
      return "Getting Started";
    default:
      return "Beginner";
  }
}

export default function PlayZone() {
  const [section, setSection] =
    useState<PlaySection>("menu");

  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestSpeed, setBestSpeed] = useState(0);

  const [completedChallenges, setCompletedChallenges] =
    useState(0);

  const [rewardClaimed, setRewardClaimed] =
    useState(false);

  const [challengeCompletedToday, setChallengeCompletedToday] =
  useState(false);

  const [puzzleCompletedToday, setPuzzleCompletedToday] =
  useState(false);
  
  const [selectedAnswer, setSelectedAnswer] =
    useState<number | null>(null);

  const [showAnswer, setShowAnswer] =
    useState(false);

  const [speedScore, setSpeedScore] =
    useState(0);

  const [speedTime, setSpeedTime] =
    useState(60);

  const [speedRunning, setSpeedRunning] =
    useState(false);

  const [speedQuestion, setSpeedQuestion] =
    useState<Challenge | null>(null);

  const [speedIndex, setSpeedIndex] =
    useState(0);

  const [speedAnswers, setSpeedAnswers] =
    useState<Challenge[]>([]);

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    setXp(
      getStoredNumber(XP_KEY)
    );

    setStreak(
      getStoredNumber(STREAK_KEY)
    );

    setBestSpeed(
      getStoredNumber(BEST_SPEED_KEY)
    );

    setCompletedChallenges(
      getStoredNumber(
        COMPLETED_CHALLENGES_KEY
      )
    );

    const today = getDateKey();

    setRewardClaimed(
      getStoredString(
        DAILY_REWARD_KEY
      ) === today
    );

    setChallengeCompletedToday(
  getStoredString(
    DAILY_CHALLENGE_KEY
  ) === today
);
  setPuzzleCompletedToday(
  getStoredString(
    DAILY_PUZZLE_KEY
  ) === today
);
    updateStreak();
  }, []);

  useEffect(() => {
    if (!speedRunning) {
      return;
    }

    if (speedTime <= 0) {
      finishSpeedChallenge();
      return;
    }

    const timer = window.setInterval(() => {
      setSpeedTime((current) =>
        current > 0
          ? current - 1
          : 0
      );
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    speedRunning,
    speedTime
  ]);

  const dayNumber = getDayNumber();

  const dailyChallenge =
    challenges[
      dayNumber %
        challenges.length
    ];

  const dailyPuzzle =
    puzzles[
      dayNumber %
        puzzles.length
    ];

  const mysteryProblem = useMemo(() => {
    const index =
      (dayNumber * 7) %
      solutions.length;

    return solutions[index];
  }, [dayNumber]);

  const level = getLevel(xp);

  const xpForNextLevel =
    level === 1
      ? 25
      : level === 2
        ? 50
        : level === 3
          ? 100
          : level === 4
            ? 200
            : 200;

  const levelStartXp =
    level === 1
      ? 0
      : level === 2
        ? 25
        : level === 3
          ? 50
          : level === 4
            ? 100
            : 200;

  const levelProgress =
    level === 5
      ? 100
      : Math.min(
          100,
          Math.round(
            ((xp - levelStartXp) /
              (xpForNextLevel -
                levelStartXp)) *
              100
          )
        );

  function updateStreak() {
    const today = getDateKey();

    const lastDate =
      getStoredString(
        LAST_PLAY_DATE_KEY
      );

    if (!lastDate) {
      setStored(
        LAST_PLAY_DATE_KEY,
        today
      );

      setStreak(1);
      setStored(STREAK_KEY, 1);
      return;
    }

    if (lastDate === today) {
      return;
    }

    const previous = new Date(
      `${lastDate}T00:00:00`
    );

    const current = new Date(
      `${today}T00:00:00`
    );

    const difference =
      Math.round(
        (current.getTime() -
          previous.getTime()) /
          (1000 * 60 * 60 * 24)
      );

    if (difference === 1) {
      const next =
        getStoredNumber(
          STREAK_KEY
        ) + 1;

      setStreak(next);
      setStored(
        STREAK_KEY,
        next
      );
    } else {
      setStreak(1);
      setStored(
        STREAK_KEY,
        1
      );
    }

    setStored(
      LAST_PLAY_DATE_KEY,
      today
    );
  }

  function addXp(amount: number) {
    const nextXp = xp + amount;

    setXp(nextXp);
    setStored(
      XP_KEY,
      nextXp
    );
  }

  function startActivity(
    target: PlaySection
  ) {
    setSelectedAnswer(null);
    setShowAnswer(false);
    setMessage("");
    setSection(target);
  }

  function answerQuestion(
  question: Challenge,
  answer: number
) {
  if (
  showAnswer ||
  (section === "challenge" &&
    challengeCompletedToday) ||
  (section === "puzzle" &&
    puzzleCompletedToday)
) {
  return;
}

  setSelectedAnswer(answer);
  setShowAnswer(true);

  if (answer === question.answer) {
    addXp(5);

    const nextCompleted =
      completedChallenges + 1;

    setCompletedChallenges(
      nextCompleted
    );

    setStored(
      COMPLETED_CHALLENGES_KEY,
      nextCompleted
    );

    const today = getDateKey();

    setChallengeCompletedToday(true);

    setStored(
      DAILY_CHALLENGE_KEY,
      today
    );

    setMessage(
      "Correct! +5 XP — Today's challenge completed."
    );
  } else {
    setMessage(
      "Not quite. Check the explanation and try again tomorrow."
    );
  }
}

  function claimDailyReward() {
    if (rewardClaimed) {
      setMessage(
        "Today's reward has already been claimed."
      );
      return;
    }

    const today = getDateKey();

    setStored(
      DAILY_REWARD_KEY,
      today
    );

    setRewardClaimed(true);

    addXp(10);

    setMessage(
      "Daily Reward claimed! +10 XP"
    );
  }

  function startSpeedChallenge() {
    setSpeedScore(0);
    setSpeedTime(60);
    setSpeedIndex(0);
    setSpeedAnswers([]);
    setSpeedRunning(true);
    setMessage("");

    setSpeedQuestion(
      challenges[0]
    );
  }

  function answerSpeedQuestion(
    answer: number
  ) {
    if (
      !speedRunning ||
      !speedQuestion
    ) {
      return;
    }

    if (
      answer ===
      speedQuestion.answer
    ) {
      setSpeedScore(
        (current) =>
          current + 1
      );
    }

    const nextIndex =
      speedIndex + 1;

    if (
      nextIndex >=
      challenges.length
    ) {
      setSpeedIndex(0);
      setSpeedQuestion(
        challenges[0]
      );
    } else {
      setSpeedIndex(
        nextIndex
      );

      setSpeedQuestion(
        challenges[nextIndex]
      );
    }
  }

  function finishSpeedChallenge() {
    if (!speedRunning) {
      return;
    }

    setSpeedRunning(false);

    const finalScore =
      speedScore;

    if (
      finalScore >
      bestSpeed
    ) {
      setBestSpeed(
        finalScore
      );

      setStored(
        BEST_SPEED_KEY,
        finalScore
      );
    }

    const earnedXp =
      Math.min(
        20,
        finalScore * 2
      );

    if (earnedXp > 0) {
      addXp(earnedXp);
    }

    setMessage(
      `Time's up! Score: ${finalScore}. +${earnedXp} XP`
    );
  }

  function resetSpeedChallenge() {
    setSpeedRunning(false);
    setSpeedTime(60);
    setSpeedScore(0);
    setSpeedIndex(0);
    setSpeedQuestion(null);
  }

  function renderBackButton() {
    return (
      <button
        className="back-button"
        onClick={() => {
          resetSpeedChallenge();
          setSection("menu");
        }}
      >
        <ArrowLeft size={18} />
        Back to Play Zone
      </button>
    );
  }

  function renderQuestion(
    question: Challenge,
    title: string,
    icon: React.ReactNode
  ) {
    return (
      <>
        {renderBackButton()}

        <div className="page-title">
          <h1>
            {icon} {title}
          </h1>

          <p>
            Think carefully and choose the
            best answer.
          </p>
        </div>

        <div className="play-question-card">
          <div className="play-question-number">
            Challenge
          </div>

          <h2>
            {question.question}
          </h2>

          <div className="play-options">
            {question.options.map(
              (option, index) => {
                const isSelected =
                  selectedAnswer ===
                  index;

                const isCorrect =
                  index ===
                  question.answer;

                let className =
                  "play-option";

                if (
                  showAnswer &&
                  isCorrect
                ) {
                  className +=
                    " correct";
                }

                if (
                  showAnswer &&
                  isSelected &&
                  !isCorrect
                ) {
                  className +=
                    " incorrect";
                }

                return (
                  <button
                    key={option}
                    className={className}
                    onClick={() =>
                      answerQuestion(
                        question,
                        index
                      )
                    }
                    disabled={
                      showAnswer
                    }
                  >
                    <span>
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <strong>
                      {option}
                    </strong>

                    {showAnswer &&
                      isCorrect && (
                        <Check
                          size={20}
                        />
                      )}
                  </button>
                );
              }
            )}
          </div>

          {showAnswer && (
            <div className="play-explanation">
              <strong>
                {selectedAnswer ===
                question.answer
                  ? "Correct!"
                  : "Explanation"}
              </strong>

              <p>
                {question.explanation}
              </p>
            </div>
          )}

          {message && (
            <div className="play-message">
              {message}
            </div>
          )}
        </div>
      </>
    );
  }

  function renderMenu() {
    return (
      <>
        <div className="page-title">
          <h1>🎮 Play Zone</h1>

          <p>
            Have fun, solve problems and
            build your problem-solving skills.
          </p>
        </div>

        <div className="play-stats-card">
          <div>
            <span>Level</span>
            <strong>
              {level}
            </strong>
          </div>

          <div>
            <span>XP</span>
            <strong>
              {xp}
            </strong>
          </div>

          <div>
            <span>Streak</span>
            <strong>
              🔥 {streak}
            </strong>
          </div>
        </div>

        <div className="play-progress-card">
          <div className="play-progress-header">
            <strong>
              {getLevelName(level)}
            </strong>

            <span>
              {level === 5
                ? "Max Level"
                : `${xp}/${xpForNextLevel} XP`}
            </span>
          </div>

          <div className="play-progress-track">
            <div
              className="play-progress-fill"
              style={{
                width: `${levelProgress}%`
              }}
            />
          </div>
        </div>

        <div className="play-grid">
          <button
            className="play-card"
            onClick={() =>
              startActivity(
                "challenge"
              )
            }
          >
            <span className="play-card-icon">
              🔥
            </span>

            <strong>
              Daily Challenge
            </strong>

            <small>
              Solve today's practical
              problem.
            </small>
          </button>

          <button
            className="play-card"
            onClick={() =>
              startActivity(
                "reward"
              )
            }
          >
            <span className="play-card-icon">
              🎁
            </span>

            <strong>
              Daily Reward
            </strong>

            <small>
              Claim today's fixed XP reward.
            </small>
          </button>

          <button
            className="play-card"
            onClick={() =>
              startActivity(
                "mystery"
              )
            }
          >
            <span className="play-card-icon">
              🕵️
            </span>

            <strong>
              Mystery Problem
            </strong>

            <small>
              Discover a useful problem
              from the solution library.
            </small>
          </button>

          <button
            className="play-card"
            onClick={() =>
              startActivity(
                "puzzle"
              )
            }
          >
            <span className="play-card-icon">
              🧩
            </span>

            <strong>
              Daily Puzzle
            </strong>

            <small>
              Test your logic with a
              short puzzle.
            </small>
          </button>

          <button
            className="play-card"
            onClick={() =>
              startActivity(
                "speed"
              )
            }
          >
            <span className="play-card-icon">
              ⚡
            </span>

            <strong>
              60-Second Challenge
            </strong>

            <small>
              Answer as many questions as
              you can in one minute.
            </small>
          </button>

          <button
            className="play-card"
            onClick={() =>
              startActivity(
                "achievements"
              )
            }
          >
            <span className="play-card-icon">
              🏆
            </span>

            <strong>
              My Achievements
            </strong>

            <small>
              See your XP, streak and
              unlocked badges.
            </small>
          </button>
        </div>

        <div className="disclaimer-box">
          <h2>Play Zone Rules</h2>

          <p>
            Play Zone is designed for
            entertainment, learning and
            problem-solving practice.
            It does not use betting,
            gambling, cash prizes or paid
            random rewards.
          </p>
        </div>
      </>
    );
  }

  function renderReward() {
    return (
      <>
        {renderBackButton()}

        <div className="page-title">
          <h1>🎁 Daily Reward</h1>

          <p>
            A simple fixed reward for
            returning to the app.
          </p>
        </div>

        <div className="play-reward-card">
          <div className="play-big-icon">
            {rewardClaimed
              ? "✅"
              : "🎁"}
          </div>

          <h2>
            {rewardClaimed
              ? "Reward Claimed"
              : "Today's Reward"}
          </h2>

          <p>
            {rewardClaimed
              ? "You have already claimed today's reward. Come back tomorrow."
              : "Claim 10 XP today. The reward is fixed and does not depend on chance."}
          </p>

          <button
            className="primary-button"
            onClick={
              claimDailyReward
            }
            disabled={
              rewardClaimed
            }
          >
            {rewardClaimed
              ? "Already Claimed"
              : "Claim +10 XP"}
          </button>

          {message && (
            <div className="play-message">
              {message}
            </div>
          )}
        </div>
      </>
    );
  }

  function renderMystery() {
    return (
      <>
        {renderBackButton()}

        <div className="page-title">
          <h1>
            🕵️ Mystery Problem
          </h1>

          <p>
            A surprise problem from
            today's solution library.
          </p>
        </div>

        <div className="play-mystery-card">
          <span className="badge">
            Mystery Problem
          </span>

          <h2>
            {mysteryProblem.title}
          </h2>

          <p>
            {mysteryProblem.quickFix}
          </p>

          <div className="play-mystery-meta">
            <span>
              Category:{" "}
              {mysteryProblem.category}
            </span>

            <span>
              Steps:{" "}
              {mysteryProblem.steps.length}
            </span>
          </div>

          <div className="play-message">
            Open this problem in the
            main solution library to learn
            the complete solution.
          </div>
        </div>
      </>
    );
  }

  function renderSpeed() {
    if (
      !speedRunning &&
      speedQuestion === null
    ) {
      return (
        <>
          {renderBackButton()}

          <div className="page-title">
            <h1>
              ⚡ 60-Second Challenge
            </h1>

            <p>
              Answer as many practical
              questions as possible in
              one minute.
            </p>
          </div>

          <div className="play-speed-start">
            <div className="play-big-icon">
              ⚡
            </div>

            <h2>
              Ready?
            </h2>

            <p>
              You will have 60 seconds.
              Correct answers earn XP.
            </p>

            <div className="play-speed-best">
              Best Score:{" "}
              <strong>
                {bestSpeed}
              </strong>
            </div>

            <button
              className="primary-button"
              onClick={
                startSpeedChallenge
              }
            >
              Start Challenge
            </button>
          </div>

          {message && (
            <div className="play-message">
              {message}
            </div>
          )}
        </>
      );
    }

    return (
      <>
        {renderBackButton()}

        <div className="page-title">
          <h1>
            ⚡ 60-Second Challenge
          </h1>

          <p>
            Keep going until the timer
            reaches zero.
          </p>
        </div>

        <div className="play-speed-header">
          <div>
            <span>Time</span>
            <strong>
              {speedTime}s
            </strong>
          </div>

          <div>
            <span>Score</span>
            <strong>
              {speedScore}
            </strong>
          </div>
        </div>

        {speedQuestion && (
          <div className="play-question-card">
            <h2>
              {speedQuestion.question}
            </h2>

            <div className="play-options">
              {speedQuestion.options.map(
                (option, index) => (
                  <button
                    key={option}
                    className="play-option"
                    onClick={() =>
                      answerSpeedQuestion(
                        index
                      )
                    }
                  >
                    <span>
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <strong>
                      {option}
                    </strong>
                  </button>
                )
              )}
            </div>
          </div>
        )}

        <button
          className="secondary-button"
          onClick={
            finishSpeedChallenge
          }
        >
          End Challenge
        </button>
      </>
    );
  }

  function renderAchievements() {
    return (
      <>
        {renderBackButton()}

        <div className="page-title">
          <h1>
            🏆 My Achievements
          </h1>

          <p>
            Keep solving and unlock new
            milestones.
          </p>
        </div>

        <div className="achievement-summary">
          <div>
            <Trophy size={24} />
            <strong>
              Level {level}
            </strong>
          </div>

          <div>
            <Star size={24} />
            <strong>
              {xp} XP
            </strong>
          </div>

          <div>
            <Flame size={24} />
            <strong>
              {streak} Day Streak
            </strong>
          </div>
        </div>

        <div className="achievement-list">
          {achievementList.map(
            (achievement) => {
              const unlocked =
                achievement.id ===
                "streak3"
                  ? streak >=
                    achievement.requirement
                  : xp >=
                    achievement.requirement;

              return (
                <div
                  key={achievement.id}
                  className={`achievement-card ${
                    unlocked
                      ? "unlocked"
                      : "locked"
                  }`}
                >
                  <div className="achievement-icon">
                    {unlocked
                      ? achievement.icon
                      : "🔒"}
                  </div>

                  <div>
                    <strong>
                      {achievement.title}
                    </strong>

                    <p>
                      {
                        achievement.description
                      }
                    </p>
                  </div>

                  {unlocked ? (
                    <Check size={22} />
                  ) : (
                    <Lock size={20} />
                  )}
                </div>
              );
            }
          )}
        </div>
      </>
    );
  }

  function renderContent() {
    switch (section) {
      case "challenge":
        return renderQuestion(
          dailyChallenge,
          "Daily Challenge",
          <Flame size={22} />
        );

      case "reward":
        return renderReward();

      case "mystery":
        return renderMystery();

      case "puzzle":
        return renderQuestion(
          dailyPuzzle,
          "Daily Puzzle",
          <Brain size={22} />
        );

      case "speed":
        return renderSpeed();

      case "achievements":
        return renderAchievements();

      default:
        return renderMenu();
    }
  }

  return (
    <div className="play-zone">
      {renderContent()}
    </div>
  );
}
