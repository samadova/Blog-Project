import React from 'react';
import { useParams } from 'react-router-dom';
import { articlesData } from '../data/articlesData';

const ArticleDetails = () => {
  const { id } = useParams();
  const article = articlesData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <p>{article.impact}</p>
      <h3>Analyst's Comment</h3>
      <p>{article.analystComment}</p>
    </div>
  );
};

export default ArticleDetails;
