import { useMemo, useState } from "react";
import { Calculator, Copy, Check, RotateCcw } from "lucide-react";

export default function DiscountTool() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const originalPrice = Number(price);
    const discountPercent = Number(discount);

    if (
      !Number.isFinite(originalPrice) ||
      !Number.isFinite(discountPercent) ||
      originalPrice <= 0 ||
      discountPercent < 0 ||
      discountPercent > 100
    ) {
      return null;
    }

    const discountAmount =
      (originalPrice * discountPercent) / 100;

    const finalPrice =
      originalPrice - discountAmount;

    return {
      discountAmount,
      finalPrice
    };
  }, [price, discount]);

  const copyResult = async () => {
    if (!result) return;

    const text =
      `Original Price: ${Number(price).toFixed(2)}\n` +
      `Discount: ${Number(discount).toFixed(2)}%\n` +
      `You Save: ${result.discountAmount.toFixed(2)}\n` +
      `Final Price: ${result.finalPrice.toFixed(2)}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const reset = () => {
    setPrice("");
    setDiscount("");
    setCopied(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.icon}>
          <Calculator size={26} />
        </div>

        <div>
          <h2 style={styles.title}>
            Discount Calculator
          </h2>

          <p style={styles.subtitle}>
            Quickly calculate your savings and final price.
          </p>
        </div>
      </div>

      <div style={styles.card}>
        <label style={styles.label}>
          Original Price
        </label>

        <div style={styles.inputBox}>
          <span style={styles.prefix}>₹</span>

          <input
            type="number"
            inputMode="decimal"
            placeholder="Enter original price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={styles.input}
          />
        </div>

        <label style={styles.label}>
          Discount Percentage
        </label>

        <div style={styles.inputBox}>
          <input
            type="number"
            inputMode="decimal"
            placeholder="Enter discount"
            value={discount}
            onChange={(e) =>
              setDiscount(e.target.value)
            }
            style={styles.input}
          />

          <span style={styles.suffix}>%</span>
        </div>

        {discount !== "" &&
          Number(discount) > 100 && (
            <p style={styles.error}>
              Discount cannot be greater than 100%.
            </p>
          )}

        <div style={styles.buttonRow}>
          <button
            onClick={reset}
            style={styles.resetButton}
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </div>

      {result && (
        <div style={styles.resultCard}>
          <p style={styles.resultLabel}>
            Final Price
          </p>

          <div style={styles.finalPrice}>
            ₹{result.finalPrice.toFixed(2)}
          </div>

          <div style={styles.saveBox}>
            <span>You Save</span>

            <strong>
              ₹{result.discountAmount.toFixed(2)}
            </strong>
          </div>

          <div style={styles.summary}>
            <div>
              <span>Original Price</span>
              <strong>
                ₹{Number(price).toFixed(2)}
              </strong>
            </div>

            <div>
              <span>Discount</span>
              <strong>
                {Number(discount).toFixed(2)}%
              </strong>
            </div>
          </div>

          <button
            onClick={copyResult}
            style={styles.copyButton}
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy Result
              </>
            )}
          </button>
        </div>
      )}

      <div style={styles.infoCard}>
        <strong>How it works</strong>

        <p>
          Enter the original price and discount
          percentage. The calculator automatically
          shows your savings and the final price.
        </p>

        <small>
          This calculator is provided for general
          informational and calculation purposes.
        </small>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "4px 0 20px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "18px",
  },

  icon: {
    width: "52px",
    height: "52px",
    borderRadius: "15px",
    background: "#eaf1ff",
    color: "#2563eb",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
  },

  title: {
    margin: 0,
    fontSize: "23px",
    lineHeight: 1.2,
  },

  subtitle: {
    margin: "5px 0 0",
    color: "#748096",
    fontSize: "14px",
    lineHeight: 1.4,
  },

  card: {
    background: "#ffffff",
    border: "1px solid #e3e7ee",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 8px 24px rgba(20,30,50,0.05)",
  },

  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: 700,
    marginBottom: "8px",
    marginTop: "5px",
  },

  inputBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #d9dee8",
    borderRadius: "13px",
    minHeight: "52px",
    padding: "0 14px",
    marginBottom: "17px",
    background: "#fafbfd",
  },

  prefix: {
    fontSize: "18px",
    fontWeight: 700,
    marginRight: "8px",
    color: "#526075",
  },

  suffix: {
    fontSize: "17px",
    fontWeight: 700,
    color: "#526075",
  },

  input: {
    width: "100%",
    border: 0,
    outline: 0,
    background: "transparent",
    fontSize: "16px",
    color: "#172033",
  },

  error: {
    color: "#dc2626",
    fontSize: "13px",
    marginTop: "-8px",
    marginBottom: "12px",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
  },

  resetButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    padding: "10px 15px",
    borderRadius: "11px",
    background: "#f1f4f8",
    color: "#445066",
    fontWeight: 700,
  },

  resultCard: {
    marginTop: "15px",
    padding: "21px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, #eef5ff, #f5f3ff)",
    border: "1px solid #dbe5ff",
  },

  resultLabel: {
    margin: 0,
    color: "#637087",
    fontSize: "14px",
    fontWeight: 600,
  },

  finalPrice: {
    fontSize: "32px",
    fontWeight: 800,
    marginTop: "5px",
    color: "#172033",
  },

  saveBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
    padding: "13px",
    borderRadius: "12px",
    background: "#ffffff",
  },

  summary: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "12px",
  },

  summaryItem: {
    display: "flex",
    flexDirection: "column",
  },

  copyButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    marginTop: "15px",
    padding: "13px",
    borderRadius: "12px",
    background: "#2563eb",
    color: "#ffffff",
    fontWeight: 700,
  },

  infoCard: {
    marginTop: "15px",
    padding: "16px",
    borderRadius: "16px",
    background: "#f1f4f8",
    color: "#4e5a6c",
    lineHeight: 1.55,
  },
};
