import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to My Website</h1>
        <p>This is the home page built with React JSX.</p>
        <button onClick={() => alert('Clicked!')}>Get Started</button>
      </header>
      
      <main className="content">
        <h2>Our Features</h2>
        <p>Explore what we have to offer.</p>
      </main>
    </div>
  );
}

export default Home;