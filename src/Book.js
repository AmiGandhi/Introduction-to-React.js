import React from 'react';

export const Book = ({title="No title", author="No author", pages=0, freeBookmark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>By: {author}</p>
        <p>Pages: {pages} pages</p>
        <p>Free bookmark today: {freeBookmark ? 'yes!' : 'no!'}</p>
      </section>
    )
  }
