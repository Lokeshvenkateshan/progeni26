import { useState, useEffect } from "react";
import axios from "axios";
import "../style/payment.css";

import { db } from "../data/firebase";
import {
  collection,
  serverTimestamp,
  doc,
  runTransaction,
} from "firebase/firestore";

export default function Payment({
  formData,
  setFormData,
  prevStep,
  onComplete,
}) {
  useEffect(() => {
    setTxnId(formData.txnId || "");
    setScreenshot(formData.screenshot || null);
  }, [formData]);
  const [txnId, setTxnId] = useState(formData.txnId || "");
  const [screenshot, setScreenshot] = useState(formData.screenshot || null);
  const [txnError, setTxnError] = useState("");
  const [screenshotError, setScreenshotError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const [proNumber, setProNumber] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    setTxnError("");
    setScreenshotError("");
    setSubmitError("");
    if (!txnId.trim()) {
      setTxnError("Please enter UPI Transaction ID");
      hasError = true;
    }
    if (!screenshot) {
      setScreenshotError("Please upload payment screenshot");
      hasError = true;
    }

    if (hasError) return;
    setLoading(true);

    try {
      // 1️⃣ Upload screenshot to Cloudinary
      const data = new FormData();
      data.append("file", screenshot);
      data.append("upload_preset", "payment_unsigned");
      data.append("cloud_name", "dpm5bl6qe");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dpm5bl6qe/image/upload",
        data,
      );

      const uploadedUrl = res.data.secure_url;

      // 2️⃣ Generate PRO number safely
      const counterRef = doc(db, "counters", "registrations");

      let newProNumber;

      await runTransaction(db, async (transaction) => {
        const counterDoc = await transaction.get(counterRef);

        if (!counterDoc.exists()) {
          throw new Error("Counter document does not exist!");
        }

        const currentNumber = counterDoc.data().currentNumber;
        newProNumber = currentNumber + 1;

        transaction.update(counterRef, {
          currentNumber: newProNumber,
        });

        const registrationRef = doc(collection(db, "registrations"));

        transaction.set(registrationRef, {
          ...formData,
          txnId,
          screenshot: uploadedUrl,
          pro_number: `PRO-${newProNumber}`,
          createdAt: serverTimestamp(),
        });
      });

      setProNumber(`PRO-${newProNumber}`);

      setFormData((prev) => ({
        ...prev,
        txnId: txnId,
        screenshot: uploadedUrl,
        pro_number: `PRO-${newProNumber}`,
      }));

      setLoading(false);

      if (onComplete) onComplete();
    } catch (err) {
      console.error(err);
      setSubmitError("Payment submission failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="pay-container">
      <h2 className="pay-title">Complete Your Payment</h2>
      <div className="pay-card">
        <div className="pay-qr-section">
          <div className="pay-qr-box">
            <img src="/payqr.jpeg" alt="UPI QR" className="pay-qr-img" />
          </div>
          <p>Scan & Pay using any UPI App</p>
        </div>

        {/* FORM SECTION */}
        <form onSubmit={handleSubmit}>
          {/* Transaction ID */}
          <div className="pay-input-group">
            <label>UPI Transaction ID</label>
            <input
              type="text"
              value={txnId}
              onChange={(e) => {
                setTxnId(e.target.value);
                setFormData((prev) => ({ ...prev, txnId: e.target.value }));
              }}
              disabled={loading}
            />
            {txnError && <div className="pay-error">{txnError}</div>}
          </div>

          {/* Screenshot Upload */}
          <div className="pay-input-group">
            <label>Upload Payment Screenshot</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshot(e.target.files[0])}
              disabled={loading}
            />
            {screenshotError && <div className="pay-error">{screenshotError}</div>}
          </div>
          {submitError && (
            <div className="pay-error pay-submit-error">
              {submitError}
            </div>
          )}
          {/* Buttons */}
          <div className="pay-button-group">
            {prevStep && (
              <button type="button" className="pay-back-btn" onClick={prevStep} disabled={loading}>
                Back
              </button>
            )}
            <button type="submit" className="pay-submit-btn" disabled={loading}>
              {loading ? "Processing..." : "Submit Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
