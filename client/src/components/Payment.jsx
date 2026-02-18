import { useState } from "react";
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
  const [txnId, setTxnId] = useState(formData.txnId || "");
  const [screenshot, setScreenshot] = useState(formData.screenshot || null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [proNumber, setProNumber] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!txnId.trim()) {
      return setError("Please enter UPI Transaction ID");
    }

    if (!screenshot) {
      return setError("Please upload payment screenshot");
    }

    setError("");
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
      setError("Failed to submit. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="pay-container">
      <h2 className="pay-title">Complete Your Payment</h2>

      <div className="pay-card">
        {/* SUCCESS MESSAGE */}
        {/*         {proNumber && (
          <div className="success-box">
            🎉 Registration Successful! <br />
            Your Progeni ID: <strong>{proNumber}</strong>
          </div>
        )}
 */}
        {/* QR SECTION */}
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

          {error && <div className="pay-error">{error}</div>}

          {/* Buttons */}
          <div className="pay-button-group">
            {prevStep && (
              <button type="button" className="pay-back-btn" onClick={prevStep}>
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
