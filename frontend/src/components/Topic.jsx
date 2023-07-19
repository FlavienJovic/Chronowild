import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Topic() {
  const [topics, setTopics] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/themes/${id}/topics`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopics(data);
      });
  }, []);

  return (
    <div className="gallery">
      {topics.map((topic) => (
        <Link to={`/topics/${topic.id}/timelines`}>
          <figure key={topic.id}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${topic.image}`}
              alt="topic"
            />
            <figcaption>{topic.title && <p>{topic.title}</p>}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}
