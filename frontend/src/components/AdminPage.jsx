/* eslint-disable prettier/prettier */
import { useState } from "react";
import FormTheme from "./FormTheme";
import FormTopic from "./FormTopic";
import FormCard from "./FormCard";

export default function AdminPage() {
  const [change, setChange] = useState(true);
  return (
    <section className="adminSection">
      <h1>Page administrateur</h1>

      <article>
        <h1>Ajoutez un thème</h1>
        <FormTheme change={change} setChange={setChange} />
      </article>

      <article>
        <h1>Ajoutez un sujet à un thème</h1>
        <FormTopic change={change} setChange={setChange} />
      </article>
      <article>
        <h1>Ajoutez une nouvelle date à un sujet</h1>
        <FormCard change={change} setChange={setChange} />
      </article>
    </section>
  );
}
