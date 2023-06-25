import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

const Index = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const articlesRef = ref(db, 'articles');

    onValue(articlesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const articlesData = Object.values(data);
        setArticles(articlesData);
      }
    });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
