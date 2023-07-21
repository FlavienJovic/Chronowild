/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function FormTopic({ change, setChange }) {
  const titleRef = useRef();
  const imageRef = useRef();
  const idThemeRef = useRef();

  const handleChange = () => {
    setChange(!change);
  };
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

  const addTopic = (event) => {
    event.preventDefault();

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/topics`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          image: imageRef.current.value,
          id_theme: idThemeRef.current.value,
        }),
      }
    ).then(() => handleChange());
  };
  return (
    <form onSubmit={(event) => addTopic(event)}>
      <div className="formContainer">
        <label className="formLabel" htmlFor="title">
          Nom du Topic
        </label>
        <input
          className="formInput"
          ref={titleRef}
          type="text"
          id="title"
          title="title"
        />

        <label className="add-projet-label" htmlFor="image">
          Image
        </label>
        <input ref={imageRef} type="text" id="image" title="image" />

        <label className="formLabel" htmlFor="theme">
          selectionner le theme
        </label>
        <select ref={idThemeRef} id="theme">
          <option value="">---blabla---</option>
          {themes.map((theme) => (
            <option value={theme.id}>{theme.title}</option>
          ))}
        </select>
      </div>
      <button className="formButton" type="submit">
        Valider le nouveau sujet
      </button>
    </form>
  );
}
