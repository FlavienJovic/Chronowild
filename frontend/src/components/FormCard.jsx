/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function FormCard() {
  const titleRef = useRef();
  const cardTitleRef = useRef();
  const nameRef = useRef();
  const urlRef = useRef();
  const typeRef = useRef();
  const cardSubtitleRef = useRef();
  const cardDetailedTextRef = useRef();
  const idTopicRef = useRef();

  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/topics`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopics(data);
      });
  }, []);

  const addCard = (event) => {
    event.preventDefault();
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/cards`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          card_title: cardTitleRef.current.value,
          name: nameRef.current.value,
          url: urlRef.current.value,
          type: typeRef.current.value,
          card_subtitle: cardSubtitleRef.current.value,
          card_detailed_text: cardDetailedTextRef.current.value,
          id_topic: idTopicRef.current.value,
        }),
      }
    );
  };
  return (
    <form onSubmit={(event) => addCard(event)}>
      <div className="formContainer">
        <label className="formLabel" htmlFor="title">
          date
        </label>
        <input ref={titleRef} type="text" id="date" title="title" />

        <label className="formLabel" htmlFor="image">
          Saisir la date
        </label>
        <textarea ref={cardTitleRef} type="text" id="image" title="image" />

        <label className="formLabel" htmlFor="image">
          Titre de l'image
        </label>
        <input ref={nameRef} type="text" id="image" title="image" />

        <label className="formLabel" htmlFor="image">
          Url de l'image ou de la video (lien embed youtube)
        </label>
        <input ref={urlRef} type="text" id="image" title="image" />

        <label className="formLabel" htmlFor="image">
          le type de la video (IMAGE ou VIDEO)
        </label>
        <input ref={typeRef} type="text" id="image" title="image" />

        <label className="formLabel" htmlFor="image">
          1er texte de la date
        </label>
        <textarea ref={cardSubtitleRef} type="text" id="image" title="image" />

        <label className="formLabel" htmlFor="image">
          2eme texte de la date
        </label>
        <textarea
          className="fromTextarea"
          ref={cardDetailedTextRef}
          type="text"
          id="image"
          title="image"
        />

        <label className="formLabel" htmlFor="topic">
          selectionnez le sujet
        </label>
        <select ref={idTopicRef} id="topic">
          <option value="">---selectionnez le sujet---</option>
          {topics.map((topic) => (
            <option value={topic.id}>{topic.title}</option>
          ))}
        </select>
      </div>
      <button className="formButton" type="submit">
        Valider la nouvelle date
      </button>
    </form>
  );
}
