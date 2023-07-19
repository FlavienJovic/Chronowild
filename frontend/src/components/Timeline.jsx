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

  // const items = [
  //   {
  //     title: "25 July 1940",
  //     cardTitle: "The Battle of Britain",
  //     media: {
  //       name: "Battle of britain",
  //       source: {
  //         url: "https://www.youtube.com/embed/gPMgYC0sXos",
  //       },
  //       type: "VIDEO",
  //     },
  //     cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
  //     cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
  //     The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`,
  //   },
  //   {
  //     title: "25 July 1940",
  //     cardTitle: "The Battle of Britain",
  //     media: {
  //       name: "Battle of britain",
  //       source: {
  //         url: "https://www.youtube.com/embed/gPMgYC0sXos",
  //       },
  //       type: "VIDEO",
  //     },
  //     cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
  //     cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
  //     The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`,
  //   },
  // ];

  // const customContent = [
  //   <div>
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <h3>Custom Card 1</h3>
  //     <p>This is the first custom card</p>
  //   </div>,
  //   <div>
  //     <h3>Custom Card 2</h3>
  //     <p>This is the second custom card</p>
  //   </div>,
  //   <div>
  //     <h3>Custom Card 3</h3>
  //     <p>This is the second custom card</p>
  //   </div>,
  // ];

  return (
    <>
      <h1>Ceci est un titre</h1>

      <div style={{ width: "500px", height: "500px" }}>
        {timelines.length > 0 && (
          <Chrono
            items={timelines}
            mode="VERTICAL_ALTERNATING"
            cardHeight={250}
            slideShow
            enableOutline
          />
        )}
      </div>
    </>
  );
}
