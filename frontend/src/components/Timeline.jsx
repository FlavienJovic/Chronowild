/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
import { Chrono } from "react-chrono";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Timeline() {
  const [timelines, setTimelines] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/topics/${id}/cards`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimelines(
          data.map(
            ({
              title,
              card_title,
              name,
              url,
              type,
              card_subtitle,
              card_detailed_text,
            }) => ({
              title: title,
              cardTitle: card_title,
              media: {
                name: name,
                source: {
                  url: url,
                },
                type: type,
              },
              cardSubtitle: card_subtitle,
              cardDetailedText: card_detailed_text,
            })
          )
        );
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "95vh" }}>
      {timelines.length > 0 && (
        <Chrono
          items={timelines}
          mode="VERTICAL_ALTERNATING"
          cardHeight={250}
          slideShow
          enableOutline
          theme={{
            primary: "#596643",
            secondary: "#596643",
            titleColor: "black",
            titleColorActive: "white",
            cardTitleColor: "#596643",
          }}
        />
      )}
    </div>
  );
}
