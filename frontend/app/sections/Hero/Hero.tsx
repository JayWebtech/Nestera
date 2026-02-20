import React from 'react';
import './Hero.css';

interface HeroStat {
  label: string;
  value: string;
}

interface HeroProps {
  headline: string[];          // each string = one line of the headline
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
  stat?: HeroStat;             // optional stat card at the bottom
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  stat,
}) => {
  return (
    <section className="hero">
      <div className="hero__container">

        {/* ── LEFT: Text Content ── */}
        <div className="hero__content">
          <h1 className="hero__headline">
            {headline.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < headline.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className="hero__subheadline">{subheadline}</p>

          <div className="hero__cta-group">
            <a href={primaryCta.href} className="hero__cta-primary">
              {primaryCta.label}
            </a>
            <a href={secondaryCta.href} className="hero__cta-secondary">
              {secondaryCta.label} →
            </a>
          </div>

          {/* Optional stat card */}
          {stat && (
            <div className="hero__stat">
              <div className="hero__stat-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <polyline
                    points="1,13 6,7 10,10 17,3"
                    stroke="#00d4c0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="13,3 17,3 17,7"
                    stroke="#00d4c0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="hero__stat-text">
                <span className="hero__stat-label">{stat.label}</span>
                <span className="hero__stat-value">{stat.value}</span>
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="hero__visual">
          <div className="hero__image-card">
            <img src={imageSrc} alt={imageAlt} className="hero__image" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
