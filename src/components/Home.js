import React from 'react';
import logo from './assets/KUVO_Logo-1.png';

export default function Home() {
  return (
    <div className="page home-page">
      <h1 className="about-title">Home <img src={logo} alt="Kuvo" className="about-logo"/></h1>
      <p className="maintenance-note">Kuvo is under maintenance. We'll be back soon.</p>
      <p>This is the home section.</p>
    </div>
  );
}
