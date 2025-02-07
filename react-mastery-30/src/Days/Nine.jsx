import React from "react";

const Nine = () => {
  const devQuotes = [
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Your code should be simple enough to work and complex enough to be useful.",
    "Great web development is not about writing code; it’s about solving problems.",
    "Web development is a journey of continuous learning—embrace the errors, they teach you the best lessons.",
    "The best way to predict the future is to create it—one commit at a time.",
  ];

  const getRandomQuote = Math.floor(Math.random() * devQuotes.length);

  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <p className="font-bold text-2xl leading-3">
        {devQuotes[getRandomQuote]}
      </p>
    </div>
  );
};

export default Nine;

// Print the quote
