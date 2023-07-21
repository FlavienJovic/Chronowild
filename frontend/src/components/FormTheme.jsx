/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function FormTheme() {
  const titleRef = useRef();
  const imageRef = useRef();

  const addTheme = (event) => {
    event.preventDefault();
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/themes`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          image: imageRef.current.value,
        }),
      }
    );
  };
  return (
    <form onSubmit={(event) => addTheme(event)}>
      <div className="formContainer">
        <label className="formLabel" htmlFor="title">
          Nom du theme
        </label>
        <input ref={titleRef} type="text" id="title" title="title" />

        <label className="formLabel" htmlFor="title">
          Image
        </label>
        <input ref={imageRef} type="text" id="image" title="image" />
      </div>

      <button className="formButton" type="submit">
        Valider le nouveau theme
      </button>
    </form>
  );
}
