import { useState } from "react";
import "../style/payment.css";

export default function Payment({ formData, setFormData, prevStep, onComplete }) {
  const [txnId, setTxnId] = useState(formData.txnId || "");
  const [screenshot, setScreenshot] = useState(formData.screenshot || null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!txnId.trim()) {
      return setError("Please enter UPI Transaction ID");
    }

    if (!screenshot) {
      return setError("Please upload payment screenshot");
    }

    setError("");

    // Save data to parent state
    setFormData({
      ...formData,
      txnId,
      screenshot
    });

    // Call parent completion
    if (onComplete) onComplete();
  };

  return (
    <div className="pay-container">
      <h2 className="pay-title">Complete Your Payment</h2>

      <div className="pay-card">
        {/* QR Section */}
        <div className="pay-qr-section">
          <div className="pay-qr-box">
            <img
              src="/payqr.jpeg"
              alt="raviharish296@okicici"
              className="pay-qr-img"
            />
          </div>
          <p>Scan & Pay using any UPI App</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Transaction ID */}
          <div className="pay-input-group">
            <label>UPI Transaction ID</label>
            <input
              type="text"
              value={txnId}
              onChange={(e) => setTxnId(e.target.value)}
            />
            {!txnId.trim() && error === "Please enter UPI Transaction ID" && (
              <div className="pay-error">Please enter UPI Transaction ID</div>
            )}
          </div>

          {/* Screenshot Upload */}
          <div className="pay-input-group">
            <label>Upload Payment Screenshot</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshot(e.target.files[0])}
            />
            {!screenshot && error === "Please upload payment screenshot" && (
              <div className="pay-error">Please upload payment screenshot</div>
            )}
          </div>

          {/* Buttons */}
          <div className="pay-button-group">
            {prevStep && (
              <button type="button" className="pay-back-btn" onClick={prevStep}>
                Back
              </button>
            )}
            <button type="submit" className="pay-submit-btn">
              Submit Payment
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
