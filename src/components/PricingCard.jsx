import React from 'react';
import '../styles/CardStyles.css';

function PricingCard({ title, price, description, features, ctaText, highlight, ctaType }) {
  return (
    <div className={`pricing-card ${highlight ? 'highlight' : ''}`}>
      <h3 className="plan-title">{title}</h3>
      <p className="plan-price">{price}</p>
      <p className="plan-description">{description}</p>
      <ul className="plan-features">
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>
      {ctaType === 'button' ? (
        <button className="cta-button">{ctaText}</button>
      ) : (
        <a href="#" className="cta-link">{ctaText}</a>
      )}
    </div>
  );
}

export default PricingCard;
