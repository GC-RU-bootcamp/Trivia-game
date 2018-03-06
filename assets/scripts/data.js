"use strict";

var data = [
  {
    question: "What are the two major parties in the US?",
    choice: [
      "A.   The Republicans and the Democrats.",
      "B.   The Republics and the Socialists",
      "C.   The Democrats and the Socialists.",
      "D.   The Conservationists and the Democrats."
    ],
    answer: 1
  },
  {
    question:
      "This eight times married actress was created a Dame in 2000. She won Academy Awards for Butterfield 8 and Whos Afraid of Virginia Woolf?",
    choice: [
      "A.   Zsa Zsa Gabor",
      "B.   Joan Crawford",
      "C.   Elizabeth Taylor",
      "D.   Joan Collins"
    ],
    answer: 3
  },
  {
    question: "Which tennis player is known as the Superbrat?",
    choice: [
      "A.   Martina Navratilova",
      "B.   Jimmy Connors",
      "C.   John McEnroe",
      "D.   Gabriela Sabatini"
    ],
    answer: 3
  },
  {
    question: "Which of the following is not a popular boy band?",
    choice: [
      "A.   NSync",
      "B.   98 Degrees",
      "C.   Go Dogs Go",
      "D.   Backstreet Boys"
    ],
    answer: 3
  },
  {
    question:
      "Which former U.S. President did Cliff Claven of Cheers fame claim he had a potato bearing the likeness of?",
    choice: [
      "A.   Jimmy Carter",
      "B.   Gerald Ford",
      "C.   Abraham Lincoln",
      "D.   Richard M. Nixon"
    ],
    answer: 4
  },
  {
    question: "Who starred in -Dirty Dancing",
    choice: [
      "A.   Patrick Swayze and Carla Cugino",
      "B.   Patrick Swayze and Michelle Pfieffer",
      "C.   Sally Field and Ted Danson	",
      "D.   Patrick Swayze and Jennifer Gray"
    ],
    answer: 4
  },
  {
    question:
      "Who was voted the 1st Sports Illustrated Sportsman of the Year in 1954?",
    choice: [
      "A.   Mickey Mantle",
      "B.   Vince Lombardi",
      "C.   Roger Bannister",
      "D.   Paul Horning"
    ],
    answer: 3
  },
  {
    question:
      "Which of the following assassins was not attempting to kill a U.S president?",
    choice: [
      "A.   Lee Harvey Oswald",
      "B.   Sirhan Sirhan",
      "C.   John Wilkes Booth",
      "D.   Leon Czolgosz"
    ],
    answer: 2
  },
  {
    question:
      "Born Jerome Silberman he was once a fencing instructor. He came to prominence in the firecracker comedies of Mel Brooks:",
    choice: [
      "A.   Gene Wilder",
      "B.   Marty Feldman",
      "C.   Walter Matthau",
      "D.   Richard Pryor"
    ],
    answer: 1
  },
  {
    question: "What sport did Ted Turner participate in?",
    choice: ["A.   Golf", " B.   Football", "C.   Yachting", "D.   Bowling"],
    answer: 3
  },
  {
    question:
      "Who said: We hold these truths to be self evident that all men are created equal?",
    choice: [
      "A.   Richard Nixon",
      "B.   Thomas Jefferson",
      "C.   George Washington",
      "D.   Bill Clinton"
    ],
    answer: 2
  },
  // {
  //   question: "In 1999, what was annual rate of inflation?",
  //   choice: ["A.   4.26%", "B.   1.26%", "C.   2.26%", "D.   .26%"],
  //   answer: 3
  // },
  {
    question: "What planet spins on its axis at a quarter-mile per second?",
    choice: ["A.   Moon", "B.   Mars", "C.   Jupiter", "D.   Earth"],
    answer: 4
  },
  {
    question: "Lyonnaise means cooked or garnished with these:",
    choice: [
      "A.   potatoes",
      "B.   parsley sprigs",
      "C.   onions",
      "D.   beets"
    ],
    answer: 3
  },
  {
    question:
      "Approximately how long does blood take to circulate once round the average human body?",
    choice: [
      "A.   10 seconds",
      "B.   1 minute",
      "C.   1 hour",
      "D.   25 seconds"
    ],
    answer: 2
  },

  {
    question: "Who is the patron saint of Spain?",
    choice: [
      "A.  Saint James",
      "B.  Saint Peter",
      "C.  Saint John",
      "D.  Saint Percy"
    ],

    answer: 1
  },
  {
    question: "Which insect inspired the term 'computer bug'?",
    choice: ["A.  Moth", "B.  Cockroach", "C.  Fly", "D.  Beetle"],
    answer: 1
  },
  {
    question:
      "Which of these dance names is used to describe a fashionable dot?",
    choice: ["A.  Polka", "B.  Swing", "C.  Hora", "D.  Lambada"],
    answer: 1
  },
  {
    question:
      "In the children's book series, where is Paddington Bear originally from?",
    choice: ["A.  Peru", "B.  India", "C.  Canada", "D.  Sweden"],
    answer: 1
  },
  {
    question: "Nephelococcygia' is the practice of _____________________.",

    choice: [
      "A.  Finding shapes in clouds",
      "B.  Breaking glass with your voice",
      "C.  Sleeping with your eyes open",
      "D.  Doing yoga in a bathtub"
    ],
    answer: 1
  },
  {
    question:
      "In the 'Road Runner and Coyote' cartoons, what famous sound does the Road Runner make?",
    choice: [
      "A.  Beep! Beep!",
      "B.  Vroom! Vroom!",
      "C.  Ping! Ping!",
      "D.  Ooga! Ooga!"
    ],
    answer: 1
  },
  {
    question: "Which landlocked country is contained within another country?",
    choice: [
      "A.  Lesotho",
      "B.  Luxembourg",
      "C.  Burkina Faso",
      "D.  Siberia"
    ],
    answer: 1
  },
  {
    question: "Which man does NOT have a chemical element named after him?",

    choice: [
      "A.  Isaac Newton",
      "B.  Enrico Fermi",
      "C.  Albert Einstein",
      "D.  Niels Bohr"
    ],
    answer: 1
  },
  {
    question:
      "The word 'tabby,' now used to refer to a cat, is derived from the name of a district of which world capital?",
    choice: ["A.  Baghdad", "B.  New Delhi", "C.  Cairo", "D.  Moscow"],
    answer: 1
  },
  {
    question: "Which part of a chicken is commonly called the 'drumstick'?",
    choice: ["A.  Leg", "B.  Wing", "C.  Thigh", "D.  Breast"],
    answer: 1
  }
];
