import React from "react";

const Journal = () => {
  return (
    <div className="journal">
    

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Journal</h1>
          <p>
            Explore my thoughts, reflections, and insights on topics that inspire me.
          </p>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="journal-entries">
        <div className="entry-card">
          <h2>Post Title 1</h2>
          <p>
            A short preview of the journal entry goes here. It gives readers a glimpse of what to expect.
          </p>
          <button className="button">Read More</button>
        </div>
        <div className="entry-card">
          <h2>Post Title 2</h2>
          <p>
            Another brief excerpt for a different journal entry. This text should intrigue the reader to click through.
          </p>
          <button className="button">Read More</button>
        </div>
        {/* Add more cards as needed */}
      </section>

      {/* Reuse Footer */}
      
    </div>
  );
};

export default Journal;