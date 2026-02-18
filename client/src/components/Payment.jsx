import { useState } from "react";
import axios from 'axios';
import "../style/payment.css";

export default function Payment({ formData, setFormData, prevStep, onComplete }) {
  const [txnId, setTxnId] = useState(formData.txnId || "");
  const [screenshot, setScreenshot] = useState(formData.screenshot || null);
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!txnId.trim()) {
      return setError("Please enter UPI Transaction ID");
    }

    if (!screenshot) {
      return setError("Please upload payment screenshot");
    }

    setError("");
    try {
    // Prepare form data for Cloudinary
    const data = new FormData();
    data.append("file", screenshot);
    data.append("upload_preset", "payment_unsigned"); // You should create an unsigned preset in Cloudinary
    data.append("cloud_name", "dpm5bl6qe");

    // Upload to Cloudinary
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dpm5bl6qe/image/upload",
      data
    );

    const uploadedUrl = res.data.secure_url;

    setFormData({
      ...formData,
      txnId,
      screenshot: uploadedUrl
    });

    // Optional: log or call parent completion
   /*  if (onComplete) onComplete({ txnId, screenshot: uploadedUrl }); */
    console.log("Payment data saved:", { txnId, screenshot: uploadedUrl });

  } catch (err) {
    console.error(err);
    setError("Failed to upload screenshot. Try again.");
  }
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
