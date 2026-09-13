import { useMemo, useState } from "react";
import { solutions, type Solution } from "./data/solutions";
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
  Star
} from "lucide-react";

type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

type Solution = {
  id: number;
  title: string;
  category: string;
  quickFix: string;
  steps: string[];
};

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

const sampleSolutions: Solution[] = [
  {
    id: 1,
    title: "Phone battery draining quickly",
    category: "phone",
    quickFix: "Check battery usage and reduce unnecessary background activity.",
    steps: [
      "Open your phone Settings.",
      "Open Battery or Battery Usage.",
      "Check which apps are using the most battery.",
      "Close or uninstall unnecessary apps.",
      "Reduce screen brightness if needed.",
      "Restart the phone and monitor battery usage."
    ]
  },
  {
    id: 2,
    title: "Wi-Fi connected but internet not working",
    category: "internet",
    quickFix: "Restart the router and reconnect your device.",
    steps: [
      "Turn Wi-Fi off on your phone.",
      "Restart your Wi-Fi router.",
      "Wait for the router lights to stabilize.",
      "Turn Wi-Fi back on.",
      "Forget the network and connect again if necessary.",
      "If all devices have the same problem, contact your internet provider."
    ]
  },
  {
    id: 3,
    title: "Phone storage is full",
    category: "phone",
    quickFix: "Remove unnecessary large files, downloads and unused apps.",
    steps: [
      "Open Settings and Storage.",
      "Check which category is using the most space.",
      "Delete unnecessary downloads.",
      "Remove unused applications.",
      "Move important photos and videos to a safe backup.",
      "Clear temporary app cache when appropriate."
    ]
  },
  {
    id: 4,
    title: "TV remote is not working",
    category: "electronics",
    quickFix: "Replace the batteries and check whether the remote sensor is blocked.",
    steps: [
      "Replace both batteries with fresh batteries.",
      "Make sure the batteries are inserted correctly.",
      "Clean the remote sensor area.",
      "Point the remote directly at the TV.",
      "Try the TV's physical buttons.",
      "If the remote still fails, consider a compatible replacement."
    ]
  },
  {
    id: 5,
    title: "Clothes have a bad smell after washing",
    category: "cleaning",
    quickFix: "Dry clothes completely and clean the washing machine regularly.",
    steps: [
      "Do not leave wet clothes inside the washing machine.",
      "Dry clothes completely after washing.",
      "Clean the washing machine drum and detergent drawer.",
      "Avoid using excessive detergent.",
      "Keep the washing machine door slightly open after use.",
      "Run an appropriate machine-cleaning cycle if available."
    ]
  },
  {
    id: 6,
    title: "Car battery seems weak",
    category: "car",
    quickFix: "Check for lights or accessories left on and have the battery tested if the issue continues.",
    steps: [
      "Check whether headlights or interior lights were left on.",
      "Turn off unnecessary electrical accessories.",
      "Try starting the vehicle normally.",
      "If the vehicle struggles repeatedly, have the battery tested.",
      "Check the battery terminals for visible corrosion.",
      "Use a qualified mechanic for battery or electrical repairs."
    ]
  },
  {
    id: 7,
    title: "Plant leaves turning yellow",
    category: "garden",
    quickFix: "Check watering, drainage and light conditions.",
    steps: [
      "Check whether the soil is excessively wet.",
      "Make sure the pot has drainage holes.",
      "Check whether the plant receives suitable light.",
      "Remove badly damaged leaves if appropriate.",
      "Adjust watering according to the plant's needs.",
      "Monitor the plant for several days."
    ]
  },
  {
    id: 8,
    title: "Kitchen sink draining slowly",
    category: "kitchen",
    quickFix: "Remove visible debris and clean the drain safely.",
    steps: [
      "Remove visible food or debris from the drain.",
      "Run warm water through the drain.",
      "Clean the drain strainer.",
      "Use an appropriate household drain-cleaning method.",
      "Do not mix different chemical drain cleaners.",
      "Call a plumber if the blockage persists."
    ]
  },
  {
    id: 9,
    title: "Marriage compatibility guidance",
    category: "marriage",
    quickFix: "Use compatibility information as general guidance rather than a guaranteed prediction.",
    steps: [
      "Enter the information required by the compatibility tool.",
      "Review the general compatibility result.",
      "Consider communication, values and expectations.",
      "Discuss important financial and family matters openly.",
      "Do not make major life decisions based only on an automated result.",
      "Seek qualified professional or family guidance when appropriate."
    ]
  },
  {
    id: 10,
    title: "Property document checklist",
    category: "property",
    quickFix: "Verify property documents with the relevant official authority before making a major transaction.",
    steps: [
      "Collect the available property documents.",
      "Check the seller's ownership information.",
      "Verify relevant land or property records with the appropriate authority.",
      "Check applicable tax or registration information.",
      "Confirm that required permissions and documents are available.",
      "Use a qualified property lawyer for legal verification when needed."
    ]
  },
  {
    id: 11,
    title: "Basic astrology guidance",
    category: "astrology",
    quickFix: "Use astrology results for general guidance and entertainment, not as guaranteed predictions.",
    steps: [
      "Enter the requested birth information.",
      "Review the generated general guidance.",
      "Treat the result as informational.",
      "Avoid making important financial, medical or legal decisions based only on astrology.",
      "Consider your real-life circumstances when making decisions."
    ]
  },
  {
    id: 12,
    title: "Calculate percentage",
    category: "tools",
    quickFix: "Use the percentage calculator to quickly calculate a percentage.",
    steps: [
      "Enter the original value.",
      "Enter the percentage value.",
      "Select the calculation you need.",
      "Review the calculated result.",
      "Use the result as needed."
    ]
  }
];

function App() {
  const [activePage, setActivePage] = useState("home");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const filteredSolutions = useMemo(() => {
    const query = search.toLowerCase().trim();

    return sampleSolutions.filter((solution) => {
      const matchesSearch =
        !query ||
        solution.title.toLowerCase().includes(query) ||
        solution.quickFix.toLowerCase().includes(query);

      const matchesCategory =
        !selectedCategory || solution.category === selectedCategory;

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
  };

  const goHome = () => {
    setSelectedSolution(null);
    setSelectedCategory(null);
    setActivePage("home");
  };

  const renderHome = () => (
    <>
      <section className="hero">
        <div className="hero-icon">
          <Wrench size={30} />
        </div>

        <h1>Everyday Problem Solver</h1>

        <p>Find the problem. Follow the steps. Solve it.</p>
      </section>

      <div className="search-box">
        <Search size={21} />
        <input
          type="text"
          placeholder="Search your problem..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <section className="section">
        <div className="section-header">
          <h2>Popular Problems</h2>
          <button onClick={() => setActivePage("categories")}>
            View all
          </button>
        </div>

        <div className="solution-list">
          {filteredSolutions.slice(0, 6).map((solution) => (
            <button
              className="solution-card"
              key={solution.id}
              onClick={() => openSolution(solution)}
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
          <button onClick={() => setActivePage("categories")}>
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
                setActivePage("categories");
              }}
            >
              <span className="category-icon">{category.icon}</span>
              <strong>{category.name}</strong>
              <small>{category.description}</small>
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
        <p>Choose a topic to find useful solutions.</p>
      </div>

      <div className="category-grid large">
        {categories.map((category) => (
          <button
            className="category-card"
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              setActivePage("category-solutions");
            }}
          >
            <span className="category-icon">{category.icon}</span>
            <strong>{category.name}</strong>
            <small>{category.description}</small>
          </button>
        ))}
      </div>
    </>
  );

  const renderCategorySolutions = () => {
    const category = categories.find((item) => item.id === selectedCategory);

    return (
      <>
        <button
          className="back-button"
          onClick={() => setActivePage("categories")}
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

        <div className="solution-list">
          {filteredSolutions.length === 0 ? (
            <div className="empty-state">
              <p>No solutions available yet.</p>
            </div>
          ) : (
            filteredSolutions.map((solution) => (
              <button
                className="solution-card"
                key={solution.id}
                onClick={() => openSolution(solution)}
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
    const favoriteSolutions = sampleSolutions.filter((solution) =>
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
            <p>Save useful solutions here for quick access.</p>
          </div>
        ) : (
          <div className="solution-list">
            {favoriteSolutions.map((solution) => (
              <button
                className="solution-card"
                key={solution.id}
                onClick={() => openSolution(solution)}
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

  const renderTools = () => (
    <>
      <div className="page-title">
        <h1>Tools</h1>
        <p>Useful calculators and everyday utilities.</p>
      </div>

      <div className="tool-card">
        <div className="tool-icon">🧮</div>
        <div>
          <h3>Percentage Calculator</h3>
          <p>Calculate percentages quickly and easily.</p>
        </div>
      </div>

      <div className="tool-card">
        <div className="tool-icon">📅</div>
        <div>
          <h3>Age Calculator</h3>
          <p>Calculate age from a date of birth.</p>
        </div>
      </div>

      <div className="tool-card">
        <div className="tool-icon">💰</div>
        <div>
          <h3>Loan Calculator</h3>
          <p>Estimate monthly loan payments.</p>
        </div>
      </div>
    </>
  );

  const renderSettings = () => (
    <>
      <div className="page-title">
        <h1>Settings</h1>
        <p>Customize your Everyday Problem Solver experience.</p>
      </div>

      <div className="settings-list">
        <button
          className="settings-item"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div>
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            <span>Dark Mode</span>
          </div>

          <strong>{darkMode ? "ON" : "OFF"}</strong>
        </button>

        <div className="settings-item">
          <div>
            <Star size={20} />
            <span>Favorites</span>
          </div>

          <strong>{favorites.length}</strong>
        </div>

        <div className="settings-item">
          <div>
            <Wrench size={20} />
            <span>Offline Content</span>
          </div>

          <strong>Available</strong>
        </div>

        <div className="settings-item">
          <div>
            <span>ℹ️</span>
            <span>About</span>
          </div>
        </div>

        <div className="settings-item">
          <div>
            <span>🔒</span>
            <span>Privacy Policy</span>
          </div>
        </div>

        <div className="settings-item">
          <div>
            <span>⚠️</span>
            <span>Disclaimer</span>
          </div>
        </div>
      </div>
    </>
  );

  const renderSolution = () => {
    if (!selectedSolution) {
      return null;
    }

    const isFavorite = favorites.includes(selectedSolution.id);

    return (
      <>
        <button className="back-button" onClick={goHome}>
          <ArrowLeft size={18} />
          Back
        </button>

        <article className="solution-detail">
          <div className="detail-header">
            <div>
              <span className="badge">
                {
                  categories.find(
                    (category) => category.id === selectedSolution.category
                  )?.name
                }
              </span>

              <h1>{selectedSolution.title}</h1>
            </div>

            <button
              className={`favorite-button ${isFavorite ? "active" : ""}`}
              onClick={() => toggleFavorite(selectedSolution.id)}
              aria-label="Save favorite"
            >
              <Heart
                size={24}
                fill={isFavorite ? "currentColor" : "none"}
              />
            </button>
          </div>

          <section className="detail-section quick-fix">
            <h2>Quick Fix</h2>
            <p>{selectedSolution.quickFix}</p>
          </section>

          <section className="detail-section">
            <h2>Step-by-Step Solution</h2>

            <ol>
              {selectedSolution.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="warning-box">
            <h2>Safety Warning</h2>
            <p>
              Do not attempt dangerous electrical, gas, fire, structural or
              vehicle repairs without appropriate knowledge. Contact a
              qualified professional when necessary.
            </p>
          </section>

          <section className="disclaimer-box">
            <h2>Important</h2>
            <p>
              Information in this app is provided for general informational
              purposes. It is not a substitute for professional medical,
              legal, financial, property or other expert advice.
            </p>
          </section>
        </article>
      </>
    );
  };

  const renderContent = () => {
    if (activePage === "solution") return renderSolution();
    if (activePage === "categories") return renderCategories();
    if (activePage === "category-solutions") return renderCategorySolutions();
    if (activePage === "favorites") return renderFavorites();
    if (activePage === "tools") return renderTools();
    if (activePage === "settings") return renderSettings();

    return renderHome();
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="top-bar">
        <button className="brand" onClick={goHome}>
          <span className="brand-icon">
            <Wrench size={22} />
          </span>

          <span>
            <strong>Everyday Problem Solver</strong>
            <small>Simple solutions for everyday problems</small>
          </span>
        </button>
      </header>

      <main className="main-content">{renderContent()}</main>

      <nav className="bottom-nav">
        <button
          className={activePage === "home" ? "active" : ""}
          onClick={goHome}
        >
          <Home size={21} />
          <span>Home</span>
        </button>

        <button
          className={
            activePage === "categories" || activePage === "category-solutions"
              ? "active"
              : ""
          }
          onClick={() => {
            setSelectedCategory(null);
            setActivePage("categories");
          }}
        >
          <Grid3X3 size={21} />
          <span>Categories</span>
        </button>

        <button
          className={activePage === "favorites" ? "active" : ""}
          onClick={() => setActivePage("favorites")}
        >
          <Heart size={21} />
          <span>Favorites</span>
        </button>

        <button
          className={activePage === "tools" ? "active" : ""}
          onClick={() => setActivePage("tools")}
        >
          <Wrench size={21} />
          <span>Tools</span>
        </button>

        <button
          className={activePage === "settings" ? "active" : ""}
          onClick={() => setActivePage("settings")}
        >
          <Settings size={21} />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
