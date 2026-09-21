import { useMemo, useState } from "react";

type ToolName =
  | "discount"
  | "gst"
  | "unit"
  | "date"
  | "bmi"
  | "tip"
  | "shopping"
  | "fuel"
  | "compound"
  | "savings";

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e9f0",
  borderRadius: 18,
  padding: 18,
  marginBottom: 14,
  boxShadow: "0 5px 18px rgba(20,30,50,0.05)"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  borderRadius: 12,
  border: "1px solid #d9dee8",
  outline: "none",
  fontSize: 15,
  marginTop: 7,
  marginBottom: 12,
  boxSizing: "border-box"
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 15px",
  borderRadius: 12,
  border: 0,
  background: "#2563eb",
  color: "#ffffff",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer"
};

const resultStyle: React.CSSProperties = {
  marginTop: 14,
  padding: 15,
  borderRadius: 14,
  background: "#eef5ff",
  lineHeight: 1.7
};

function money(value: number) {
  return value.toLocaleString("en-IN", {
    maximumFractionDigits: 2
  });
}

function ToolBox({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div style={cardStyle}>
      <h2 style={{ margin: "0 0 6px", fontSize: 20 }}>{title}</h2>
      <p style={{ margin: "0 0 16px", color: "#748096", lineHeight: 1.5 }}>
        {description}
      </p>
      {children}
    </div>
  );
}

function DiscountTool() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const result = useMemo(() => {
    const p = Number(price);
    const d = Number(discount);

    if (!Number.isFinite(p) || !Number.isFinite(d) || p < 0 || d < 0) {
      return null;
    }

    const saved = (p * d) / 100;
    const finalPrice = p - saved;

    return { saved, finalPrice };
  }, [price, discount]);

  return (
    <ToolBox
      title="💰 Discount Calculator"
      description="Calculate savings and final price before buying."
    >
      <label>Original price</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter original price"
      />

      <label>Discount percentage</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Example: 20"
      />

      {result && (
        <div style={resultStyle}>
          <strong>You save: ₹{money(result.saved)}</strong>
          <br />
          Final price: <strong>₹{money(result.finalPrice)}</strong>
        </div>
      )}
    </ToolBox>
  );
}

function GSTTool() {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("18");
  const [inclusive, setInclusive] = useState(false);

  const result = useMemo(() => {
    const p = Number(price);
    const r = Number(rate);

    if (!Number.isFinite(p) || !Number.isFinite(r) || p < 0 || r < 0) {
      return null;
    }

    if (inclusive) {
      const base = p / (1 + r / 100);
      const gst = p - base;

      return {
        base,
        gst,
        total: p
      };
    }

    const gst = (p * r) / 100;

    return {
      base: p,
      gst,
      total: p + gst
    };
  }, [price, rate, inclusive]);

  return (
    <ToolBox
      title="📊 GST Calculator"
      description="Calculate GST for inclusive or exclusive prices."
    >
      <label>Amount</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter amount"
      />

      <label>GST rate (%)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />

      <button
        style={{
          ...buttonStyle,
          background: inclusive ? "#16a34a" : "#2563eb",
          marginBottom: 10
        }}
        onClick={() => setInclusive(!inclusive)}
      >
        {inclusive ? "Price includes GST" : "Price excludes GST"}
      </button>

      {result && (
        <div style={resultStyle}>
          Base amount: <strong>₹{money(result.base)}</strong>
          <br />
          GST: <strong>₹{money(result.gst)}</strong>
          <br />
          Total: <strong>₹{money(result.total)}</strong>
        </div>
      )}
    </ToolBox>
  );
}

function UnitConverter() {
  const [value, setValue] = useState("");
  const [type, setType] = useState("km-mi");

  const result = useMemo(() => {
    const v = Number(value);

    if (!Number.isFinite(v)) return null;

    if (type === "km-mi") return v * 0.621371;
    if (type === "mi-km") return v * 1.609344;
    if (type === "kg-lb") return v * 2.2046226218;
    if (type === "lb-kg") return v * 0.45359237;
    if (type === "c-f") return (v * 9) / 5 + 32;
    if (type === "f-c") return ((v - 32) * 5) / 9;

    return null;
  }, [value, type]);

  const labels: Record<string, string> = {
    "km-mi": "Kilometers → Miles",
    "mi-km": "Miles → Kilometers",
    "kg-lb": "Kilograms → Pounds",
    "lb-kg": "Pounds → Kilograms",
    "c-f": "Celsius → Fahrenheit",
    "f-c": "Fahrenheit → Celsius"
  };

  return (
    <ToolBox
      title="📏 Unit Converter"
      description="Convert common distance, weight and temperature units."
    >
      <select
        style={inputStyle}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        {Object.entries(labels).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>

      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />

      {result !== null && (
        <div style={resultStyle}>
          Result: <strong>{result.toFixed(2)}</strong>
        </div>
      )}
    </ToolBox>
  );
}

function DateDifferenceTool() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const result = useMemo(() => {
    if (!start || !end) return null;

    const a = new Date(start);
    const b = new Date(end);

    const diff = Math.abs(b.getTime() - a.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);

    return { days, weeks };
  }, [start, end]);

  return (
    <ToolBox
      title="📅 Date Difference"
      description="Find the number of days and weeks between two dates."
    >
      <label>Start date</label>
      <input
        style={inputStyle}
        type="date"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />

      <label>End date</label>
      <input
        style={inputStyle}
        type="date"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />

      {result && (
        <div style={resultStyle}>
          Difference: <strong>{result.days} days</strong>
          <br />
          Approximately: <strong>{result.weeks} weeks</strong>
        </div>
      )}
    </ToolBox>
  );
}

function BmiTool() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const result = useMemo(() => {
    const h = Number(height) / 100;
    const w = Number(weight);

    if (!Number.isFinite(h) || !Number.isFinite(w) || h <= 0 || w <= 0) {
      return null;
    }

    const bmi = w / (h * h);

    let category = "Healthy range";

    if (bmi < 18.5) category = "Below typical adult BMI range";
    else if (bmi >= 25 && bmi < 30) category = "Above typical adult BMI range";
    else if (bmi >= 30) category = "High BMI range";

    return { bmi, category };
  }, [height, weight]);

  return (
    <ToolBox
      title="⚖️ BMI Calculator"
      description="Calculate BMI from height and weight."
    >
      <label>Height (cm)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Example: 170"
      />

      <label>Weight (kg)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Example: 65"
      />

      {result && (
        <div style={resultStyle}>
          BMI: <strong>{result.bmi.toFixed(1)}</strong>
          <br />
          {result.category}
          <br />
          <small>
            BMI is a screening measure and is not a medical diagnosis.
          </small>
        </div>
      )}
    </ToolBox>
  );
}

function TipTool() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("10");
  const [people, setPeople] = useState("1");

  const result = useMemo(() => {
    const b = Number(bill);
    const t = Number(tip);
    const p = Number(people);

    if (
      !Number.isFinite(b) ||
      !Number.isFinite(t) ||
      !Number.isFinite(p) ||
      b < 0 ||
      t < 0 ||
      p <= 0
    ) {
      return null;
    }

    const tipAmount = (b * t) / 100;
    const total = b + tipAmount;

    return {
      tipAmount,
      total,
      each: total / p
    };
  }, [bill, tip, people]);

  return (
    <ToolBox
      title="🔢 Tip & Bill Split"
      description="Calculate tip, total bill and equal share."
    >
      <label>Bill amount</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        placeholder="Enter bill"
      />

      <label>Tip (%)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />

      <label>Number of people</label>
      <input
        style={inputStyle}
        type="number"
        min="1"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      {result && (
        <div style={resultStyle}>
          Tip: <strong>₹{money(result.tipAmount)}</strong>
          <br />
          Total: <strong>₹{money(result.total)}</strong>
          <br />
          Each person: <strong>₹{money(result.each)}</strong>
        </div>
      )}
    </ToolBox>
  );
}

function ShoppingTool() {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [discount, setDiscount] = useState("");

  const result = useMemo(() => {
    const p = Number(price);
    const q = Number(quantity);
    const d = Number(discount || 0);

    if (
      !Number.isFinite(p) ||
      !Number.isFinite(q) ||
      !Number.isFinite(d) ||
      p < 0 ||
      q <= 0 ||
      d < 0
    ) {
      return null;
    }

    const subtotal = p * q;
    const saving = (subtotal * d) / 100;
    const total = subtotal - saving;

    return { subtotal, saving, total };
  }, [price, quantity, discount]);

  return (
    <ToolBox
      title="🛒 Shopping Calculator"
      description="Estimate shopping cost, quantity and discount savings."
    >
      <label>Price per item</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <label>Quantity</label>
      <input
        style={inputStyle}
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <label>Discount (%)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Optional"
      />

      {result && (
        <div style={resultStyle}>
          Subtotal: <strong>₹{money(result.subtotal)}</strong>
          <br />
          Savings: <strong>₹{money(result.saving)}</strong>
          <br />
          Final cost: <strong>₹{money(result.total)}</strong>
        </div>
      )}
    </ToolBox>
  );
}

function FuelCostTool() {
  const [distance, setDistance] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");

  const result = useMemo(() => {
    const d = Number(distance);
    const m = Number(mileage);
    const f = Number(fuelPrice);

    if (
      !Number.isFinite(d) ||
      !Number.isFinite(m) ||
      !Number.isFinite(f) ||
      d <= 0 ||
      m <= 0 ||
      f < 0
    ) {
      return null;
    }

    const fuel = d / m;
    const cost = fuel * f;

    return { fuel, cost };
  }, [distance, mileage, fuelPrice]);

  return (
    <ToolBox
      title="⛽ Fuel Cost Calculator"
      description="Estimate fuel required and travel cost for a journey."
    >
      <label>Distance (km)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        placeholder="Example: 250"
      />

      <label>Vehicle mileage (km/L)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        placeholder="Example: 15"
      />

      <label>Fuel price per litre</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={fuelPrice}
        onChange={(e) => setFuelPrice(e.target.value)}
        placeholder="Example: 100"
      />

      {result && (
        <div style={resultStyle}>
          Estimated fuel: <strong>{result.fuel.toFixed(2)} L</strong>
          <br />
          Estimated cost: <strong>₹{money(result.cost)}</strong>
        </div>
      )}
    </ToolBox>
  );
}

function CompoundInterestTool() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const result = useMemo(() => {
    const p = Number(principal);
    const r = Number(rate);
    const y = Number(years);

    if (
      !Number.isFinite(p) ||
      !Number.isFinite(r) ||
      !Number.isFinite(y) ||
      p <= 0 ||
      r < 0 ||
      y <= 0
    ) {
      return null;
    }

    const amount = p * Math.pow(1 + r / 100, y);
    const interest = amount - p;

    return { amount, interest };
  }, [principal, rate, years]);

  return (
    <ToolBox
      title="📈 Compound Interest"
      description="Estimate growth using annual compound interest."
    >
      <label>Initial amount</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Example: 10000"
      />

      <label>Annual interest rate (%)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Example: 8"
      />

      <label>Time (years)</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        placeholder="Example: 5"
      />

      {result && (
        <div style={resultStyle}>
          Interest earned: <strong>₹{money(result.interest)}</strong>
          <br />
          Final amount: <strong>₹{money(result.amount)}</strong>
        </div>
      )}
    </ToolBox>
  );
}

function SavingsGoalTool() {
  const [goal, setGoal] = useState("");
  const [saved, setSaved] = useState("");
  const [months, setMonths] = useState("");

  const result = useMemo(() => {
    const g = Number(goal);
    const s = Number(saved || 0);
    const m = Number(months);

    if (
      !Number.isFinite(g) ||
      !Number.isFinite(s) ||
      !Number.isFinite(m) ||
      g <= 0 ||
      s < 0 ||
      m <= 0
    ) {
      return null;
    }

    const remaining = Math.max(0, g - s);
    const monthly = remaining / m;

    return { remaining, monthly };
  }, [goal, saved, months]);

  return (
    <ToolBox
      title="🎯 Savings Goal Planner"
      description="Work out how much to save each month for a target."
    >
      <label>Savings goal</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Example: 100000"
      />

      <label>Already saved</label>
      <input
        style={inputStyle}
        type="number"
        inputMode="decimal"
        value={saved}
        onChange={(e) => setSaved(e.target.value)}
        placeholder="Optional"
      />

      <label>Target time (months)</label>
      <input
        style={inputStyle}
        type="number"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        placeholder="Example: 12"
      />

      {result && (
        <div style={resultStyle}>
          Remaining: <strong>₹{money(result.remaining)}</strong>
          <br />
          Suggested monthly saving:{" "}
          <strong>₹{money(result.monthly)}</strong>
        </div>
      )}
    </ToolBox>
  );
}

export default function ProfessionalTools() {
  const [activeTool, setActiveTool] = useState<ToolName | null>(null);

  const tools: {
    id: ToolName;
    title: string;
    description: string;
    icon: string;
  }[] = [
    {
      id: "discount",
      title: "Discount Calculator",
      description: "Find your savings and final price.",
      icon: "💰"
    },
    {
      id: "gst",
      title: "GST Calculator",
      description: "Calculate GST for everyday purchases.",
      icon: "📊"
    },
    {
      id: "unit",
      title: "Unit Converter",
      description: "Convert distance, weight and temperature.",
      icon: "📏"
    },
    {
      id: "date",
      title: "Date Difference",
      description: "Calculate the gap between two dates.",
      icon: "📅"
    },
    {
      id: "bmi",
      title: "BMI Calculator",
      description: "Calculate BMI from height and weight.",
      icon: "⚖️"
    },
    {
      id: "tip",
      title: "Tip & Bill Split",
      description: "Split bills and calculate tips easily.",
      icon: "🔢"
    },
    {
      id: "shopping",
      title: "Shopping Calculator",
      description: "Calculate shopping cost and savings.",
      icon: "🛒"
    },
    {
      id: "fuel",
      title: "Fuel Cost Calculator",
      description: "Estimate fuel and journey cost.",
      icon: "⛽"
    },
    {
      id: "compound",
      title: "Compound Interest",
      description: "Estimate long-term money growth.",
      icon: "📈"
    },
    {
      id: "savings",
      title: "Savings Goal Planner",
      description: "Plan monthly savings for a target.",
      icon: "🎯"
    }
  ];

  if (activeTool) {
    return (
      <div style={{ paddingBottom: 30 }}>
        <button
          onClick={() => setActiveTool(null)}
          style={{
            border: 0,
            background: "transparent",
            color: "#2563eb",
            fontWeight: 700,
            fontSize: 15,
            padding: "5px 0 18px",
            cursor: "pointer"
          }}
        >
          ← Back to Tools
        </button>

        {activeTool === "discount" && <DiscountTool />}
        {activeTool === "gst" && <GSTTool />}
        {activeTool === "unit" && <UnitConverter />}
        {activeTool === "date" && <DateDifferenceTool />}
        {activeTool === "bmi" && <BmiTool />}
        {activeTool === "tip" && <TipTool />}
        {activeTool === "shopping" && <ShoppingTool />}
        {activeTool === "fuel" && <FuelCostTool />}
        {activeTool === "compound" && <CompoundInterestTool />}
        {activeTool === "savings" && <SavingsGoalTool />}
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ margin: 0, fontSize: 27 }}>
          Professional Tools
        </h1>
        <p
          style={{
            margin: "7px 0 0",
            color: "#748096",
            fontSize: 15
          }}
        >
          Practical calculators designed for everyday decisions.
        </p>
      </div>

      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => setActiveTool(tool.id)}
          style={{
            ...cardStyle,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 15,
            textAlign: "left",
            cursor: "pointer",
            color: "#172033"
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 15,
              display: "grid",
              placeItems: "center",
              background: "#eef5ff",
              fontSize: 27,
              flexShrink: 0
            }}
          >
            {tool.icon}
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 5px", fontSize: 17 }}>
              {tool.title}
            </h3>
            <p
              style={{
                margin: 0,
                color: "#748096",
                fontSize: 13,
                lineHeight: 1.45
              }}
            >
              {tool.description}
            </p>
          </div>

          <span
            style={{
              fontSize: 25,
              color: "#657187"
            }}
          >
            ›
          </span>
        </button>
      ))}
    </div>
  );
}
