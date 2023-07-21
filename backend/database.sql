create table theme (
  id INT(11) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(80) NOT NULL UNIQUE,
  image VARCHAR(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

create table topic (
  id INT(11) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(80) NOT NULL UNIQUE,
  image VARCHAR(255) NULL,
  id_theme int(11) UNSIGNED NULL,
   FOREIGN KEY (id_theme) REFERENCES `theme`(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

create table card (
  id INT(11) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(80) NULL ,
  card_title VARCHAR(80) NULL ,
  name VARCHAR(80) NULL ,
  url VARCHAR(255) NULL ,
  type VARCHAR(80) NULL ,
  card_subtitle TEXT NULL ,
  card_detailed_text TEXT NULL ,
  id_topic int(11) UNSIGNED NULL,
  FOREIGN KEY (id_topic) REFERENCES `topic`(id)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO theme (title, image) VALUES ('Histoire','/assets/images/history.png'), ('Cinema','/assets/images/cinema.png'),('Musique','/assets/images/logo_musique.png'),('Comics','/assets/images/logo_comics.png');

INSERT INTO topic (title, image, id_theme) VALUES ('Seconde guerre mondiale','/assets/images/seconde_guerre_mondiale.jpg', 1), ('Alien','/assets/images/alien.jpg',2), ('Le Parrain','/assets/images/le_parrain.png',2);

insert into card (title, card_title, name, url,type,card_subtitle, card_detailed_text, id_topic ) VALUES 
("May 1940",
"Dunkirk",
"dunkirk beach",
"https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
"IMAGE",
"Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
"On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.",
 1),

("25 July 1940",
        "The Battle of Britain",
        "Battle of britain",
        "https://www.youtube.com/embed/gPMgYC0sXos",
        "VIDEO",
        "RAF Spitfire pilots scramble for their planes",
        "After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
          The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.",
           1),
           ("1979",
           "Alien, le huitième passager",
           "poster alien",
           "https://m.media-amazon.com/images/I/6160ipHE64L._AC_UF1000,1000_QL80_.jpg",
            "IMAGE",
            "Alien, le huitième passager (Alien) est un film de science-fiction horrifique américano-britannique réalisé par Ridley Scott, sorti en 1979. Écrit par Dan O'Bannon, il fait partie de la saga Alien, dont il constitue l'opus initial.",
            "blablallalbla",
            2),

("1986",
           "Aliens, le retour",
           "bande annonce aliens",
           "https://www.youtube.com/embed/gaJFi3LiFOQ",
            "VIDEO",
            "Aliens, le retour (Aliens) est un film de science-fiction américano-britannique réalisé par James Cameron, sorti en 1986.

Deuxième volet de la saga Alien, ce film est la suite d’Alien, le huitième passager (1979) et met en scène l'actrice Sigourney Weaver qui reprend son rôle d'Ellen Ripley, ainsi que les acteurs Michael Biehn, Bill Paxton, Lance Henriksen et Carrie Henn.",
            "Dans ce film, Ripley accompagne un détachement de Marines coloniaux qui se rendent sur la planète LV-426a, une colonie spatiale humaine terraformée qui ne donne plus de nouvelles et où la présence de la créature du premier film, l’Alien (désigné sous le terme de « xénomorphe »)b, est suspectée.",
            2),
("1972",
"Le Parrain",
"poster le parrain",
"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyO8trmFbGTJIY6MaIFqzfPB6hW8UFCAYxTqtdKWGz7EJ6Jt-d",
"IMAGE",
"Produit par les studios Paramount, le film est l'adaptation du roman du même nom (1969) écrit par le romancier Mario Puzo. L'histoire se déroule à New York sur une période allant de 1945 à 1955, et raconte les luttes de pouvoir au sein de la mafia américaine new-yorkaise, avec pour protagoniste principal la famille Corleone, l'une des cinq familles mafieuses de la ville, la famille Corleone étant menée par son patriarche, Don Vito Corleone dit le « Parrain » (Marlon Brando), un personnage puissant et influent. Son plus jeune fils, Michael Corleone (Al Pacino), qui initialement souhaitait rester en dehors des activités criminelles de sa famille, se voit contraint d'en devenir le membre le plus important et le plus impitoyable à la suite d'un enchaînement de circonstances tragiques, qui débutent quand son père est victime d'une attaque orchestrée par une famille mafieuse concurrente.",
"Le Parrain est considéré comme l'un des plus grands films du cinéma mondial1 et l'un des plus influents, spécialement dans le genre des films de gangsters2. Il est classé à la deuxième place des meilleurs films du cinéma nord-américain par l'American Film Institute (AFI), derrière Citizen Kane3. En 1990, il est sélectionné par le National Film Registry pour être conservé à la Bibliothèque du Congrès des États-Unis, en raison de son intérêt « culturel, historique ou esthétique important »4.

Le film remporta de nombreuses récompenses, notamment trois Oscars dans les catégories meilleur film, meilleur acteur (Marlon Brando, qui le refusa) et meilleur scénario adapté (Puzo et Coppola). Il reçut aussi sept nominations dans d'autres catégories, incluant les acteurs Al Pacino, James Caan et Robert Duvall pour l'Oscar du meilleur acteur dans un second rôle, et Francis Ford Coppola pour celui du meilleur réalisateur.",
3
),
(
  "1974",
  "Le Parrain, 2e partie",
  "bande annonce le parrain 2",
  "https://www.youtube.com/embed/9O1Iy9od7-A",
  "VIDEO",
  "Michael Corleone succède à son père Vito Corleone à la tête de la famille. Il dirige alors les affaires des Corleone d'une main implacable, en éliminant ses ennemis les uns après les autres. En tentant en vain de ressembler à son père, il ne fera preuve que d'une autorité dévastatrice qui peu à peu l'éloignera de tous ses proches. La deuxième partie du Parrain présente deux récits parallèles. L'un implique le chef de la mafia en 1958 et 1959 après les événements du premier film, l'autre est une suite de flashbacks relatant le parcours de son père, Vito Corleone, de sa jeunesse en Sicile à la création de la famille Corleone à New York. Le jeune Vito Corleone est interprété par Robert De Niro.",
  "Le film rencontre comme son prédécesseur un beau succès critique et commercial. Il remporte six Oscars en 1975, lors de la 47e cérémonie des Oscars, dont celui du meilleur film, du meilleur réalisateur pour Francis Ford Coppola et du meilleur second rôle pour Robert De Niro. Le film est ainsi la toute première suite à remporter l'Oscar du meilleur film.",
  3
)

