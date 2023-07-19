import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Theme() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/themes`
    )
      .then((response) => response.json())
      .then((data) => {
        setThemes(data);
      });
  }, []);

  return (
    <div className="gallery">
      {themes.map((theme) => (
        <Link to={`/themes/${theme.id}/topics`}>
          <figure key={theme.id}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}${theme.image}`}
              alt="theme"
            />
            <figcaption>{theme.title && <p>{theme.title}</p>}</figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}
