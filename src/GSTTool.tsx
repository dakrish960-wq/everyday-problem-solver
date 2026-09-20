import { useMemo, useState } from "react";

export default function GSTTool() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [mode, setMode] = useState<"exclusive" | "inclusive">("exclusive");

  const result = useMemo(() => {
    const value = Number(amount);
    const rate = Number(gstRate);

    if (!Number.isFinite(value) || value < 0) return null;
    if (!Number.isFinite(rate) || rate < 0) return null;

    if (mode === "exclusive") {
      const gst = (value * rate) / 100;
      return {
        base: value,
        gst,
        total: value + gst
      };
    }

    const base = value / (1 + rate / 100);
    const gst = value - base;

    return {
      base,
      gst,
      total: value
    };
  }, [amount, gstRate, mode]);

  const money = (value: number) =>
    value.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  return (
    <div className="solution-detail">
      <div className="detail-header">
        <div>
          <span className="badge">Financial Tool</span>
          <h1>GST Calculator</h1>
        </div>
      </div>

      <div className="detail-section">
        <h2>Calculation Mode</h2>

        <div style={{ display: "grid", gap: 10 }}>
          <button
            className="tool-card"
            type="button"
            onClick={() => setMode("exclusive")}
            style={{
              border:
                mode === "exclusive"
                  ? "2px solid #2563eb"
                  : undefined
            }}
          >
            <div>
              <strong>Add GST to Price</strong>
              <p>Calculate GST and the final price.</p>
            </div>
          </button>

          <button
            className="tool-card"
            type="button"
            onClick={() => setMode("inclusive")}
            style={{
              border:
                mode === "inclusive"
                  ? "2px solid #2563eb"
                  : undefined
            }}
          >
            <div>
              <strong>GST Included Price</strong>
              <p>Find the GST portion inside a final price.</p>
            </div>
          </button>
        </div>
      </div>

      <div className="detail-section">
        <label>
          <strong>
            {mode === "exclusive"
              ? "Price before GST"
              : "Price including GST"}
          </strong>

          <input
            type="number"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            style={{
              width: "100%",
              marginTop: 8,
              padding: 14,
              borderRadius: 12,
              border: "1px solid #d9dee8",
              outline: "none"
            }}
          />
        </label>
      </div>

      <div className="detail-section">
        <label>
          <strong>GST Rate (%)</strong>

          <select
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
            style={{
              width: "100%",
              marginTop: 8,
              padding: 14,
              borderRadius: 12,
              border: "1px solid #d9dee8",
              background: "white"
            }}
          >
            <option value="0">0%</option>
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </label>
      </div>

      {result && (
        <div className="quick-fix">
          <h2>Calculation Result</h2>

          <p>
            <strong>Base Price:</strong> ₹{money(result.base)}
          </p>

          <p>
            <strong>GST Amount:</strong> ₹{money(result.gst)}
          </p>

          <p>
            <strong>Final Price:</strong> ₹{money(result.total)}
          </p>
        </div>
      )}

      <div className="disclaimer-box">
        <strong>Note:</strong> GST rates can vary by product or service.
        Verify the applicable rate before using the result for official
        billing or tax purposes.
      </div>
    </div>
  );
}
