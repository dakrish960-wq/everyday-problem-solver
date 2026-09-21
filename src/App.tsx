import { useEffect, useMemo, useState } from "react";
import { solutions, type Solution } from "./data/solutions";
import DiscountTool from "./tools/DiscountTool";
import GSTTool from "./GSTTool";
import ProfessionalTools from "./tools/ProfessionalTools";
import {
  Search,
  Home,
  Grid3X3,
  Heart,
  Settings,
  Wrench,
  ChevronRight,
  Moon,
  Sun,
  ArrowLeft,
  Star,
  Calculator,
  Calendar,
  DollarSign,
  Info,
  ShieldCheck,
  AlertTriangle,
  Database,
  Share2,
  Copy,
  Check,
  Clock,
  Trash2
} from "lucide-react";
type ToolId =
  | "percentage"
  | "discount"
  | "gst"
  | "unit"
  | "age"
  | "date"
  | "emi"
  | "bmi"
  | "tip"
  | "shopping";

type ToolDefinition = {
  id: ToolId;
  title: string;
  description: string;
  icon: string;
};

const toolDefinitions: ToolDefinition[] = [
  {
    id: "percentage",
    title: "Percentage Calculator",
    description: "Calculate percentages, increases and decreases.",
    icon: "🧮"
  },
  {
    id: "discount",
    title: "Discount Calculator",
    description: "Calculate discount amount and final price.",
    icon: "💰"
  },
  {
    id: "gst",
    title: "GST Calculator",
    description: "Calculate GST amount and inclusive or exclusive price.",
    icon: "📊"
  },
  {
    id: "unit",
    title: "Unit Converter",
    description: "Convert common length, weight and temperature units.",
    icon: "📏"
  },
  {
    id: "age",
    title: "Age Calculator",
    description: "Calculate exact age in years, months and days.",
    icon: "🎂"
  },
  {
    id: "date",
    title: "Date Difference",
    description: "Find the exact difference between two dates.",
    icon: "📅"
  },
  {
    id: "emi",
    title: "Loan / EMI Calculator",
    description: "Estimate monthly EMI, interest and total payment.",
    icon: "💵"
  },
  {
    id: "bmi",
    title: "BMI Calculator",
    description: "Calculate BMI using height and weight.",
    icon: "⚖️"
  },
  {
    id: "tip",
    title: "Tip & Bill Split",
    description: "Calculate tip and split a bill between people.",
    icon: "🔢"
  },
  {
    id: "shopping",
    title: "Shopping Calculator",
    description: "Calculate quantity, price, discount and final shopping cost.",
    icon: "🛒"
  }
];
type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

type Page =
  | "home"
  | "categories"
  | "category-solutions"
  | "favorites"
  | "history"
  | "tools"
  | "percentage"
  | "age"
  | "loan"
  | "settings"
  | "about"
  | "privacy"
  | "disclaimer"
  | "offline"
  | "solution";

const categories: Category[] = [
  {
    id: "phone",
    name: "Phone & Android",
    description: "Common smartphone and Android problems",
    icon: "📱"
  },
  {
    id: "internet",
    name: "Internet & Wi-Fi",
    description: "Wi-Fi, mobile data and internet problems",
    icon: "🌐"
  },
  {
    id: "home",
    name: "Home Problems",
    description: "Useful solutions for everyday home problems",
    icon: "🏠"
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "TV, charger, battery and electronic problems",
    icon: "🔌"
  },
  {
    id: "car",
    name: "Car & Bike",
    description: "Basic vehicle troubleshooting",
    icon: "🚗"
  },
  {
    id: "kitchen",
    name: "Kitchen & Food",
    description: "Kitchen and food-related solutions",
    icon: "🍳"
  },
  {
    id: "cleaning",
    name: "Cleaning",
    description: "Cleaning, clothes and household tips",
    icon: "🧹"
  },
  {
    id: "diy",
    name: "DIY & Repair",
    description: "Simple repair and DIY solutions",
    icon: "🔧"
  },
  {
    id: "garden",
    name: "Garden & Plants",
    description: "Plant and garden solutions",
    icon: "🌱"
  },
  {
    id: "astrology",
    name: "Astrology",
    description: "General astrology tools and guidance",
    icon: "🔮"
  },
  {
    id: "property",
    name: "Land & Property",
    description: "General property information and checklists",
    icon: "🏡"
  },
  {
    id: "marriage",
    name: "Marriage & Wedding",
    description: "Marriage planning and general compatibility guidance",
    icon: "💍"
  },
  {
    id: "tools",
    name: "Calculators & Tools",
    description: "Useful everyday calculators and utilities",
    icon: "🧮"
  }
];

const FAVORITES_KEY = "everyday-problem-solver-favorites";
const HISTORY_KEY = "everyday-problem-solver-history";
const DARK_MODE_KEY = "everyday-problem-solver-dark-mode";

function App() {
  const [activePage, setActivePage] = useState<Page>("home");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] =
    useState<Solution | null>(null);

  const [favorites, setFavorites] = useState<number[]>([]);
  const [history, setHistory] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const [percentageValue, setPercentageValue] = useState("");
  const [percentageNumber, setPercentageNumber] = useState("");

  const [birthDate, setBirthDate] = useState("");

  const [loanAmount, setLoanAmount] = useState("");
  const [loanRate, setLoanRate] = useState("");
  const [loanYears, setLoanYears] = useState("");

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_KEY);
      const savedHistory = localStorage.getItem(HISTORY_KEY);
      const savedDarkMode = localStorage.getItem(DARK_MODE_KEY);

      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }

      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }

      if (savedDarkMode) {
        setDarkMode(JSON.parse(savedDarkMode));
      }
    } catch {
      // Ignore invalid local storage data.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem(DARK_MODE_KEY, JSON.stringify(darkMode));
  }, [darkMode]);

  const filteredSolutions = useMemo(() => {
    const query = search.toLowerCase().trim();

    return solutions.filter((solution) => {
      const searchableText = [
        solution.title,
        solution.category,
        solution.quickFix,
        ...(solution.steps || [])
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query || searchableText.includes(query);

      const matchesCategory =
        !selectedCategory ||
        solution.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const openSolution = (solution: Solution) => {
    setSelectedSolution(solution);
    setActivePage("solution");
    setCopied(false);

    setHistory((current) => [
      solution.id,
      ...current.filter((id) => id !== solution.id)
    ].slice(0, 20));
  };

  const goHome = () => {
    setSelectedSolution(null);
    setSelectedCategory(null);
    setSearch("");
    setActivePage("home");
  };

  const goBack = (page: Page) => {
    setSelectedSolution(null);
    setCopied(false);
    setActivePage(page);
  };

  const calculatePercentage = () => {
    const value = Number(percentageValue);
    const percentage = Number(percentageNumber);

    if (
      !Number.isFinite(value) ||
      !Number.isFinite(percentage)
    ) {
      return null;
    }

    return (value * percentage) / 100;
  };

  const calculateAge = () => {
    if (!birthDate) return null;

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) return null;

    let years =
      today.getFullYear() - birth.getFullYear();

    let months =
      today.getMonth() - birth.getMonth();

    let days =
      today.getDate() - birth.getDate();

    if (days < 0) {
      months--;

      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const calculateLoan = () => {
    const principal = Number(loanAmount);
    const annualRate = Number(loanRate);
    const years = Number(loanYears);

    if (
      !Number.isFinite(principal) ||
      !Number.isFinite(annualRate) ||
      !Number.isFinite(years) ||
      principal <= 0 ||
      years <= 0 ||
      annualRate < 0
    ) {
      return null;
    }

    const months = years * 12;
    const monthlyRate = annualRate / 100 / 12;

    let monthlyPayment: number;

    if (monthlyRate === 0) {
      monthlyPayment = principal / months;
    } else {
      monthlyPayment =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest
    };
  };

  const copySolution = async () => {
    if (!selectedSolution) return;

    const text = [
      selectedSolution.title,
      "",
      "Quick Fix:",
      selectedSolution.quickFix,
      "",
      "Steps:",
      ...(selectedSolution.steps || []).map(
        (step, index) => `${index + 1}. ${step}`
      )
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareSolution = async () => {
    if (!selectedSolution) return;

    const text = `${selectedSolution.title}\n\n${selectedSolution.quickFix}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedSolution.title,
          text
        });
      } catch {
        // User cancelled sharing.
      }
    } else {
      await copySolution();
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const renderHome = () => (
    <>
      <section className="hero">
        <div className="hero-icon">
          <Wrench size={30} />
        </div>

        <h1>Everyday Problem Solver</h1>

        <p>
          Find the problem. Follow the steps. Solve it.
        </p>
      </section>

      <div className="search-box">
        <Search size={21} />

        <input
          type="text"
          placeholder="Search your problem..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      {search.trim() && (
        <section className="section">
          <div className="section-header">
            <h2>Search Results</h2>
            <span>{filteredSolutions.length}</span>
          </div>

          <div className="solution-list">
            {filteredSolutions.length === 0 ? (
              <div className="empty-state">
                <Search size={36} />
                <h3>No solutions found</h3>
                <p>
                  Try another keyword or problem.
                </p>
              </div>
            ) : (
              filteredSolutions.slice(0, 10).map(
                (solution) => (
                  <button
                    className="solution-card"
                    key={solution.id}
                    onClick={() =>
                      openSolution(solution)
                    }
                  >
                    <div>
                      <h3>{solution.title}</h3>
                      <p>{solution.quickFix}</p>
                    </div>

                    <ChevronRight size={20} />
                  </button>
                )
              )
            )}
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-header">
          <h2>Popular Problems</h2>

          <button
            onClick={() => {
              setSelectedCategory(null);
              setSearch("");
              setActivePage("categories");
            }}
          >
            View all
          </button>
        </div>

        <div className="solution-list">
          {solutions.slice(0, 6).map((solution) => (
            <button
              className="solution-card"
              key={solution.id}
              onClick={() =>
                openSolution(solution)
              }
            >
              <div>
                <h3>{solution.title}</h3>
                <p>{solution.quickFix}</p>
              </div>

              <ChevronRight size={20} />
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Categories</h2>

          <button
            onClick={() => {
              setSelectedCategory(null);
              setActivePage("categories");
            }}
          >
            View all
          </button>
        </div>

        <div className="category-grid">
          {categories.slice(0, 6).map((category) => (
            <button
              className="category-card"
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setSearch("");
                setActivePage(
                  "category-solutions"
                );
              }}
            >
              <span className="category-icon">
                {category.icon}
              </span>

              <strong>{category.name}</strong>

              <small>
                {category.description}
              </small>
            </button>
          ))}
        </div>
      </section>
    </>
  );

  const renderCategories = () => (
    <>
      <div className="page-title">
        <h1>Categories</h1>

        <p>
          Choose a topic to find useful solutions.
        </p>
      </div>

      <div className="category-grid large">
        {categories.map((category) => {
          const count = solutions.filter(
            (solution) =>
              solution.category === category.id
          ).length;

          return (
            <button
              className="category-card"
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setSearch("");
                setActivePage(
                  "category-solutions"
                );
              }}
            >
              <span className="category-icon">
                {category.icon}
              </span>

              <strong>{category.name}</strong>

              <small>
                {category.description}
              </small>

              <small>
                {count} solution
                {count !== 1 ? "s" : ""}
              </small>
            </button>
          );
        })}
      </div>
    </>
  );

  const renderCategorySolutions = () => {
    const category = categories.find(
      (item) => item.id === selectedCategory
    );

    return (
      <>
        <button
          className="back-button"
          onClick={() => {
            setSelectedCategory(null);
            setSearch("");
            setActivePage("categories");
          }}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="page-title">
          <h1>
            {category?.icon} {category?.name}
          </h1>

          <p>{category?.description}</p>
        </div>

        <div className="search-box">
          <Search size={21} />

          <input
            type="text"
            placeholder={`Search in ${
              category?.name || "category"
            }...`}
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>

        <div className="solution-list">
          {filteredSolutions.length === 0 ? (
            <div className="empty-state">
              <Search size={38} />

              <h3>No solutions available</h3>

              <p>
                Try another search or choose another
                category.
              </p>
            </div>
          ) : (
            filteredSolutions.map((solution) => (
              <button
                className="solution-card"
                key={solution.id}
                onClick={() =>
                  openSolution(solution)
                }
              >
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.quickFix}</p>
                </div>

                <ChevronRight size={20} />
              </button>
            ))
          )}
        </div>
      </>
    );
  };

  const renderFavorites = () => {
    const favoriteSolutions = solutions.filter(
      (solution) =>
        favorites.includes(solution.id)
    );

    return (
      <>
        <div className="page-title">
          <h1>Favorites</h1>
          <p>Your saved solutions.</p>
        </div>

        {favoriteSolutions.length === 0 ? (
          <div className="empty-state">
            <Heart size={42} />

            <h3>No favorites yet</h3>

            <p>
              Open a solution and tap the heart icon
              to save it here.
            </p>
          </div>
        ) : (
          <div className="solution-list">
            {favoriteSolutions.map((solution) => (
              <button
                className="solution-card"
                key={solution.id}
                onClick={() =>
                  openSolution(solution)
                }
              >
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.quickFix}</p>
                </div>

                <ChevronRight size={20} />
              </button>
            ))}
          </div>
        )}
      </>
    );
  };

  const renderHistory = () => {
    const historySolutions = history
      .map((id) =>
        solutions.find(
          (solution) => solution.id === id
        )
      )
      .filter(
        (solution): solution is Solution =>
          Boolean(solution)
      );

    return (
      <>
        <div className="page-title">
          <h1>Recently Viewed</h1>
          <p>Your recently opened solutions.</p>
        </div>

        {historySolutions.length === 0 ? (
          <div className="empty-state">
            <Clock size={42} />

            <h3>No recent solutions</h3>

            <p>
              Solutions you open will appear here.
            </p>
          </div>
        ) : (
          <>
            <div className="section-header">
              <span>
                {historySolutions.length} recent
              </span>

              <button onClick={clearHistory}>
                <Trash2 size={16} />
                Clear
              </button>
            </div>

            <div className="solution-list">
              {historySolutions.map((solution) => (
                <button
                  className="solution-card"
                  key={solution.id}
                  onClick={() =>
                    openSolution(solution)
                  }
                >
                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.quickFix}</p>
                  </div>

                  <ChevronRight size={20} />
                </button>
              ))}
            </div>
          </>
        )}
      </>
    );
  };

  const renderTools = () => (
    <>
      <div className="page-title">
        <h1>Calculators & Tools</h1>

        <p>
          Useful calculators and everyday utilities.
        </p>
      </div>

      <button
        className="tool-card"
        onClick={() =>
          setActivePage("percentage")
        }
      >
        <div className="tool-icon">
          <Calculator size={28} />
        </div>

        <div>
          <h3>Percentage Calculator</h3>

          <p>
            Calculate percentages quickly and
            easily.
          </p>
        </div>

        <ChevronRight size={20} />
      </button>

      <button
        className="tool-card"
        onClick={() => setActivePage("age")}
      >
        <div className="tool-icon">
          <Calendar size={28} />
        </div>

        <div>
          <h3>Age Calculator</h3>

          <p>
            Calculate age from a date of birth.
          </p>
        </div>

        <ChevronRight size={20} />
      </button>

      <button
        className="tool-card"
        onClick={() => setActivePage("loan")}
      >
        <div className="tool-icon">
          <DollarSign size={28} />
        </div>

        <div>
          <h3>Loan Calculator</h3>

          <p>
            Estimate monthly loan payments.
          </p>
        </div>

        <ChevronRight size={20} />
      </button>
    </>
  );

  const renderPercentage = () => {
    const result = calculatePercentage();

    return (
      <>
        <button
          className="back-button"
          onClick={() => goBack("tools")}
        >
          <ArrowLeft size={18} />
          Back to Tools
        </button>

        <div className="page-title">
          <h1>Percentage Calculator</h1>

          <p>
            Calculate a percentage of any number.
          </p>
        </div>

        <div className="calculator-card">
          <label>Number</label>

          <input
            type="number"
            inputMode="decimal"
            placeholder="Enter number"
            value={percentageValue}
            onChange={(event) =>
              setPercentageValue(
                event.target.value
              )
            }
          />

          <label>Percentage (%)</label>

          <input
            type="number"
            inputMode="decimal"
            placeholder="Enter percentage"
            value={percentageNumber}
            onChange={(event) =>
              setPercentageNumber(
                event.target.value
              )
            }
          />

          <div className="result-box">
            <span>Result</span>

            <strong>
              {result === null
                ? "Enter values"
                : result.toLocaleString()}
            </strong>
          </div>
        </div>
      </>
    );
  };

  const renderAge = () => {
    const age = calculateAge();

    return (
      <>
        <button
          className="back-button"
          onClick={() => goBack("tools")}
        >
          <ArrowLeft size={18} />
          Back to Tools
        </button>

        <div className="page-title">
          <h1>Age Calculator</h1>

          <p>
            Calculate your age from your date of
            birth.
          </p>
        </div>

        <div className="calculator-card">
          <label>Date of Birth</label>

          <input
            type="date"
            value={birthDate}
            onChange={(event) =>
              setBirthDate(event.target.value)
            }
          />

          <div className="result-box">
            <span>Age</span>

            <strong>
              {age === null
                ? "Select your birth date"
                : `${age.years} years, ${age.months} months, ${age.days} days`}
            </strong>
          </div>
        </div>
      </>
    );
  };

  const renderLoan = () => {
    const result = calculateLoan();

    return (
      <>
        <button
          className="back-button"
          onClick={() => goBack("tools")}
        >
          <ArrowLeft size={18} />
          Back to Tools
        </button>

        <div className="page-title">
          <h1>Loan Calculator</h1>

          <p>
            Estimate your monthly loan payment.
          </p>
        </div>

        <div className="calculator-card">
          <label>Loan Amount</label>

          <input
            type="number"
            inputMode="decimal"
            placeholder="Example: 100000"
            value={loanAmount}
            onChange={(event) =>
              setLoanAmount(event.target.value)
            }
          />

          <label>Annual Interest Rate (%)</label>

          <input
            type="number"
            inputMode="decimal"
            placeholder="Example: 8.5"
            value={loanRate}
            onChange={(event) =>
              setLoanRate(event.target.value)
            }
          />

          <label>Loan Term (Years)</label>

          <input
            type="number"
            inputMode="decimal"
            placeholder="Example: 5"
            value={loanYears}
            onChange={(event) =>
              setLoanYears(event.target.value)
            }
          />

          {result === null ? (
            <div className="result-box">
              <span>Monthly Payment</span>

              <strong>
                Enter valid loan details
              </strong>
            </div>
          ) : (
            <>
              <div className="result-box">
                <span>Monthly Payment</span>

                <strong>
                  {result.monthlyPayment.toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2
                    }
                  )}
                </strong>
              </div>

              <div className="result-box">
                <span>Total Payment</span>

                <strong>
                  {result.totalPayment.toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2
                    }
                  )}
                </strong>
              </div>

              <div className="result-box">
                <span>Total Interest</span>

                <strong>
                  {result.totalInterest.toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2
                    }
                  )}
                </strong>
              </div>
            </>
          )}
        </div>

        <div className="disclaimer-box">
          <h2>Important</h2>

          <p>
            Loan calculations are estimates for
            general informational purposes. Actual
            payments may differ because of lender
            fees, taxes, insurance and other charges.
          </p>
        </div>
      </>
    );
  };

  const renderAbout = () => (
    <>
      <button
        className="back-button"
        onClick={() => goBack("settings")}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="page-title">
        <h1>About</h1>
        <p>About Everyday Problem Solver.</p>
      </div>

      <div className="info-card">
        <div className="info-icon">
          <Info size={28} />
        </div>

        <h2>Everyday Problem Solver</h2>

        <p>
          Everyday Problem Solver is a practical
          utility app designed to provide simple,
          easy-to-follow solutions for common
          everyday problems.
        </p>

        <p>
          The app includes troubleshooting guides,
          categories, search, favorites, recently
          viewed solutions, useful calculators and
          other everyday utilities.
        </p>

        <p>
          Current offline content:
          <strong> {solutions.length} solutions</strong>.
        </p>

        <p>
          Version: <strong>1.0.0</strong>
        </p>
      </div>
    </>
  );

  const renderPrivacy = () => (
    <>
      <button
        className="back-button"
        onClick={() => goBack("settings")}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="page-title">
        <h1>Privacy Policy</h1>
        <p>Your privacy matters to us.</p>
      </div>

      <div className="info-card">
        <div className="info-icon">
          <ShieldCheck size={28} />
        </div>

        <h2>Privacy Policy</h2>

        <p>
          Everyday Problem Solver is designed to be
          simple and privacy-friendly.
        </p>

        <h3>Information We Collect</h3>

        <p>
          The app does not require an account or
          password to use its main features.
        </p>

        <h3>Search, Favorites and History</h3>

        <p>
          Search terms, favorite selections and
          recently viewed solutions are used only
          to provide app features. These selections
          are stored locally on the device.
        </p>

        <h3>Advertising</h3>

        <p>
          This app may display advertisements from
          third-party advertising services. Those
          services may process information according
          to their own privacy policies.
        </p>

        <h3>Children's Privacy</h3>

        <p>
          The app is not designed to knowingly collect
          personal information from children.
        </p>

        <h3>Changes to This Policy</h3>

        <p>
          This Privacy Policy may be updated when the
          app's features or services change.
        </p>

        <h3>Contact</h3>

        <p>
          For privacy questions, please contact the
          app publisher through the contact information
          provided with the app.
        </p>
      </div>
    </>
  );

  const renderDisclaimer = () => (
    <>
      <button
        className="back-button"
        onClick={() => goBack("settings")}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="page-title">
        <h1>Disclaimer</h1>

        <p>
          Please read this information before using
          the app.
        </p>
      </div>

      <div className="info-card">
        <div className="info-icon">
          <AlertTriangle size={28} />
        </div>

        <h2>General Disclaimer</h2>

        <p>
          The information provided by Everyday
          Problem Solver is for general informational
          and educational purposes only.
        </p>

        <h3>Professional Advice</h3>

        <p>
          The app does not replace qualified
          professional advice. For medical, legal,
          financial, property, electrical, gas,
          structural or vehicle-related issues, seek
          appropriate professional assistance when
          necessary.
        </p>

        <h3>Safety</h3>

        <p>
          Do not attempt dangerous repairs or
          procedures without appropriate knowledge,
          tools and safety equipment.
        </p>

        <h3>Astrology</h3>

        <p>
          Astrology-related information is provided
          for general guidance and entertainment. It
          should not be treated as a guaranteed
          prediction or professional advice.
        </p>

        <h3>Marriage Guidance</h3>

        <p>
          Marriage and compatibility information is
          general guidance only and does not guarantee
          compatibility or future outcomes.
        </p>

        <h3>Property Information</h3>

        <p>
          Property and land information is general
          information and is not legal advice. Always
          verify documents and records with the
          appropriate official authority or qualified
          professional.
        </p>

        <h3>Calculators</h3>

        <p>
          Calculator results are estimates and may not
          match actual results from professionals,
          lenders or official authorities.
        </p>

        <h3>Use at Your Own Risk</h3>

        <p>
          Users are responsible for evaluating their
          own situation and taking appropriate safety
          precautions.
        </p>
      </div>
    </>
  );

  const renderOffline = () => (
    <>
      <button
        className="back-button"
        onClick={() => goBack("settings")}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="page-title">
        <h1>Offline Content</h1>

        <p>
          Solutions stored inside the app.
        </p>
      </div>

      <div className="info-card">
        <div className="info-icon">
          <Database size={28} />
        </div>

        <h2>
          {solutions.length} Solutions Available
        </h2>

        <p>
          These solutions are included directly in
          the app, so the main solution content can be
          viewed without requiring an internet
          connection.
        </p>

        <div className="result-box">
          <span>Total Solutions</span>
          <strong>{solutions.length}</strong>
        </div>

        <h3>Available Categories</h3>

        <div className="offline-category-list">
          {categories.map((category) => {
            const count = solutions.filter(
              (solution) =>
                solution.category === category.id
            ).length;

            return (
              <button
                key={category.id}
                className="settings-item"
                onClick={() => {
                  setSelectedCategory(
                    category.id
                  );
                  setSearch("");
                  setActivePage(
                    "category-solutions"
                  );
                }}
              >
                <div>
                  <span>
                    {category.icon}
                  </span>

                  <span>
                    {category.name}
                  </span>
                </div>

                <strong>{count}</strong>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );

  const renderSettings = () => (
    <>
      <div className="page-title">
        <h1>Settings</h1>

        <p>
          Customize your Everyday Problem Solver
          experience.
        </p>
      </div>

      <div className="settings-list">
        <button
          className="settings-item"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          <div>
            {darkMode ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}

            <span>Dark Mode</span>
          </div>

          <strong>
            {darkMode ? "ON" : "OFF"}
          </strong>
        </button>

        <button
          className="settings-item"
          onClick={() =>
            setActivePage("favorites")
          }
        >
          <div>
            <Star size={20} />
            <span>Favorites</span>
          </div>

          <strong>{favorites.length}</strong>
        </button>

        <button
          className="settings-item"
          onClick={() =>
            setActivePage("history")
          }
        >
          <div>
            <Clock size={20} />
            <span>Recently Viewed</span>
          </div>

          <strong>{history.length}</strong>
        </button>

        <button
          className="settings-item"
          onClick={() =>
            setActivePage("offline")
          }
        >
          <div>
            <Database size={20} />
            <span>Offline Content</span>
          </div>

          <strong>
            {solutions.length} Solutions
          </strong>
        </button>

        <button
          className="settings-item"
          onClick={() =>
            setActivePage("about")
          }
        >
          <div>
            <Info size={20} />
            <span>About</span>
          </div>

          <ChevronRight size={18} />
        </button>

        <button
          className="settings-item"
          onClick={() =>
            setActivePage("privacy")
          }
        >
          <div>
            <ShieldCheck size={20} />
            <span>Privacy Policy</span>
          </div>

          <ChevronRight size={18} />
        </button>

        <button
          className="settings-item"
          onClick={() =>
            setActivePage("disclaimer")
          }
        >
          <div>
            <AlertTriangle size={20} />
            <span>Disclaimer</span>
          </div>

          <ChevronRight size={18} />
        </button>
      </div>
    </>
  );

  const renderSolution = () => {
    if (!selectedSolution) {
      return null;
    }

    const isFavorite = favorites.includes(
      selectedSolution.id
    );

    const categoryName =
      categories.find(
        (category) =>
          category.id ===
          selectedSolution.category
      )?.name ||
      selectedSolution.category;

    const relatedSolutions = solutions
      .filter(
        (solution) =>
          solution.category ===
            selectedSolution.category &&
          solution.id !== selectedSolution.id
      )
      .slice(0, 3);

    const solutionWithDisclaimer =
      selectedSolution as Solution & {
        disclaimer?: string;
      };

    return (
      <>
        <button
          className="back-button"
          onClick={() => {
            setSelectedSolution(null);

            setActivePage(
              selectedCategory
                ? "category-solutions"
                : "home"
            );
          }}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <article className="solution-detail">
          <div className="detail-header">
            <div>
              <span className="badge">
                {categoryName}
              </span>

              <h1>
                {selectedSolution.title}
              </h1>
            </div>

            <button
              className={`favorite-button ${
                isFavorite ? "active" : ""
              }`}
              onClick={() =>
                toggleFavorite(
                  selectedSolution.id
                )
              }
              aria-label="Save favorite"
            >
              <Heart
                size={24}
                fill={
                  isFavorite
                    ? "currentColor"
                    : "none"
                }
              />
            </button>
          </div>

          <section className="detail-section quick-fix">
            <h2>Quick Fix</h2>

            <p>
              {selectedSolution.quickFix}
            </p>
          </section>

          <section className="detail-section">
            <h2>Step-by-Step Solution</h2>

            <ol>
              {(selectedSolution.steps || []).map(
                (step, index) => (
                  <li key={index}>
                    {step}
                  </li>
                )
              )}
            </ol>
          </section>

          {selectedSolution.safety && (
            <section className="warning-box">
              <h2>Safety Warning</h2>

              <p>
                {selectedSolution.safety}
              </p>
            </section>
          )}

          {selectedSolution.professional && (
            <section className="info-card">
              <h2>When to Call a Professional</h2>

              <p>
                {selectedSolution.professional}
              </p>
            </section>
          )}

          {solutionWithDisclaimer.disclaimer && (
            <section className="disclaimer-box">
              <h2>Important</h2>

              <p>
                {solutionWithDisclaimer.disclaimer}
              </p>
            </section>
          )}

          <section className="warning-box">
            <h2>General Safety Warning</h2>

            <p>
              Do not attempt dangerous electrical,
              gas, fire, structural or vehicle
              repairs without appropriate knowledge.
              Contact a qualified professional when
              necessary.
            </p>
          </section>

          <section className="disclaimer-box">
            <h2>General Information</h2>

            <p>
              Information in this app is provided
              for general informational purposes. It
              is not a substitute for professional
              medical, legal, financial, property or
              other expert advice.
            </p>
          </section>

          <div className="solution-actions">
            <button
              className="tool-card"
              onClick={copySolution}
            >
              {copied ? (
                <Check size={22} />
              ) : (
                <Copy size={22} />
              )}

              <div>
                <h3>
                  {copied
                    ? "Copied"
                    : "Copy Solution"}
                </h3>

                <p>
                  Copy the solution to your
                  clipboard.
                </p>
              </div>
            </button>

            <button
              className="tool-card"
              onClick={shareSolution}
            >
              <Share2 size={22} />

              <div>
                <h3>Share Solution</h3>

                <p>
                  Share this solution with
                  others.
                </p>
              </div>
            </button>
          </div>

          {relatedSolutions.length > 0 && (
            <section className="section">
              <div className="section-header">
                <h2>Related Problems</h2>
              </div>

              <div className="solution-list">
                {relatedSolutions.map(
                  (solution) => (
                    <button
                      className="solution-card"
                      key={solution.id}
                      onClick={() =>
                        openSolution(solution)
                      }
                    >
                      <div>
                        <h3>
                          {solution.title}
                        </h3>

                        <p>
                          {solution.quickFix}
                        </p>
                      </div>

                      <ChevronRight size={20} />
                    </button>
                  )
                )}
              </div>
            </section>
          )}
        </article>
      </>
    );
  };

  const renderContent = () => {
    switch (activePage) {
      case "solution":
        return renderSolution();

      case "categories":
        return renderCategories();

      case "category-solutions":
        return renderCategorySolutions();

      case "favorites":
        return renderFavorites();

      case "history":
        return renderHistory();

      case "tools":
        return renderTools();

      case "percentage":
        return renderPercentage();

      case "age":
        return renderAge();

      case "loan":
        return renderLoan();

      case "settings":
        return renderSettings();

      case "about":
        return renderAbout();

      case "privacy":
        return renderPrivacy();

      case "disclaimer":
        return renderDisclaimer();

      case "offline":
        return renderOffline();

      default:
        return renderHome();
    }
  };

  return (
    <div
      className={
        darkMode ? "app dark" : "app"
      }
    >
      <header className="top-bar">
        <button
          className="brand"
          onClick={goHome}
        >
          <span className="brand-icon">
            <Wrench size={22} />
          </span>

          <span>
            <strong>
              Everyday Problem Solver
            </strong>

            <small>
              Simple solutions for everyday
              problems
            </small>
          </span>
        </button>
      </header>

      <main className="main-content">
        {renderContent()}
      </main>

      <nav className="bottom-nav">
        <button
          className={
            activePage === "home"
              ? "active"
              : ""
          }
          onClick={goHome}
        >
          <Home size={21} />
          <span>Home</span>
        </button>

        <button
          className={
            activePage === "categories" ||
            activePage ===
              "category-solutions"
              ? "active"
              : ""
          }
          onClick={() => {
            setSelectedCategory(null);
            setSelectedSolution(null);
            setSearch("");
            setActivePage("categories");
          }}
        >
          <Grid3X3 size={21} />
          <span>Categories</span>
        </button>

        <button
          className={
            activePage === "favorites"
              ? "active"
              : ""
          }
          onClick={() => {
            setSelectedSolution(null);
            setActivePage("favorites");
          }}
        >
          <Heart size={21} />
          <span>Favorites</span>
        </button>

        <button
          className={
            activePage === "tools" ||
            activePage === "percentage" ||
            activePage === "age" ||
            activePage === "loan"
              ? "active"
              : ""
          }
          onClick={() => {
            setSelectedSolution(null);
            setActivePage("tools");
          }}
        >
          <Wrench size={21} />
          <span>Tools</span>
        </button>

        <button
          className={
            activePage === "settings" ||
            activePage === "about" ||
            activePage === "privacy" ||
            activePage === "disclaimer" ||
            activePage === "offline" ||
            activePage === "history"
              ? "active"
              : ""
          }
          onClick={() => {
            setSelectedSolution(null);
            setActivePage("settings");
          }}
        >
          <Settings size={21} />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
