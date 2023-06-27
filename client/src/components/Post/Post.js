import React from 'react';

const Post = () => {
  return (
      <div className="post">
          <div className="post-image">
              <img
                  src="https://techcrunch.com/wp-content/uploads/2021/10/GettyImages-1249853438.jpg?w=730&crop=1"
                  alt="poster"/>
          </div>
          <div className="post-text">
              <h2>This week in AI: Big tech bets billions on machine learning tools</h2>
              <p className="info">
                  <a href="" className="author">Alex Nosovka</a>
                  <time>26-06-2023 13:34</time>
              </p>
              <p className="summary">Keeping up with an industry as fast-moving as AI is a tall order. So until an AI can do it for
                  you, here’s a handy roundup of the last week’s stories in the world of machine learning, along
                  with no...
              </p>
          </div>
      </div>
  );
 }

export {Post};
