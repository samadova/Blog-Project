import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

const Detail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const articleRef = ref(db, `articles/${id}`);

    onValue(articleRef, (snapshot) => {
      const data = snapshot.val();
      setArticle(data);
    });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <p>{article.impact}</p>
      <p>{article.analystComment}</p>
    </div>
  );
};

export default Detail;
