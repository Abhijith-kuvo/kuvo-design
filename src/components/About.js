import React from 'react';
import logo from './assets/KUVO_Logo-1.png';

export default function About() {
  return (
    <div className="page about-page">
      <h1 className="about-title">About <img src={logo} alt="Kuvo" className="about-logo"/></h1>
      <p className="maintenance-note">Kuvo is under maintenance. We'll be back soon.</p>
      <p>This is the about section.</p>
    </div>
  );
}
