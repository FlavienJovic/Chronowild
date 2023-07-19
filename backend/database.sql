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
  card_subtitle VARCHAR(255) NULL ,
  card_detailed_text TEXT NULL ,
  id_topic int(11) UNSIGNED NULL,
  FOREIGN KEY (id_topic) REFERENCES `topic`(id)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO theme (title, image) VALUES ('Histoire','/assets/images/history.webp'), ('Cinema','/assets/images/cinema.png');

INSERT INTO topic (title, image, id_theme) VALUES ('Seconde guerre mondiale','/assets/images/seconde_guerre_mondiale.jpg', 1), ('Alien','/assets/images/alien.jpg',2);

insert into card (title, card_title, name, url,type,card_subtitle, card_detailed_text, id_topic ) VALUES 
("May 1940","Dunkirk","dunkirk beach","https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg","IMAGE","Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.","On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.", 1),
("25 July 1940","The Battle of Britain","Battle of britain","https://www.youtube.com/embed/gPMgYC0sXos","VIDEO","RAF Spitfire pilots scramble for their planes","After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
          The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.", 1),
        ("25 July 1940","The Battle of Britain","Battle of britain","https://www.youtube.com/embed/gPMgYC0sXos","VIDEO","RAF Spitfire pilots scramble for their planes","After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
          The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.", 1)
