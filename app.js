// Query Activity

// create team objects
let realmadrid = {
  name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  topscorers: ["Ronaldo", "Benzema", "Hazard"],
  fans: 798,
};

let barcelona = {
  name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  topscorers: ["Messi", "Suarez", "Puyol"],
  fans: 738,
};

let manchesteru = {
  name: "Manchester United",
  city: "Manchester",
  country: "England",
  topscorers: ["Cantona", "Rooney", "Ronaldo"],
  fans: 755,
};

let manchesterc = {
  name: "Manchester City",
  city: "Manchester",
  country: "England",
  topscorers: ["Sterling", "Aguero", "Haaland"],
  fans: 537,
};

let brazil = {
  name: "Brazil National Team",
  city: "Not applicable",
  country: "Brazil",
  topscorers: ["Ronaldinho", "Cafu", "Bebeto"],
  fans: 950,
};

let argentina = {
  name: "Argentina national team",
  city: "Not applicable",
  country: "Argentina",
  topscorers: ["Messi", "Batistuta", "Maradona"],
  fans: 738,
};

let atletico = {
  name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  topscorers: ["Aragonés", "Griezmann", "Torez"],
  fans: 400,
};

// add teams to db

// db.collection("teams").add(realmadrid);
// db.collection("teams").add(barcelona);
// db.collection("teams").add(manchesteru);
// db.collection("teams").add(manchesterc);
// db.collection("teams").add(brazil);
// db.collection("teams").add(argentina);
// db.collection("teams").add(atletico);

// generate team queries onto html

db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      document.querySelector("#spain").innerHTML += `${d.data().name}<br>`;
    });
  });

db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      document.querySelector("#madrid").innerHTML += `${d.data().name}<br>`;
    });
  });

db.collection("teams")
  .where("city", "==", "Not applicable")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      document.querySelector("#national").innerHTML += `${d.data().name}<br>`;
    });
  });

db.collection("teams")
  .where("country", "!=", "Spain")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      document.querySelector("#notspain").innerHTML += `${d.data().name}<br>`;
    });
  });

db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let mydocs = data.docs;

    mydocs.forEach((d) => {
      document.querySelector("#notspainengland").innerHTML += `${
        d.data().name
      }<br>`;
    });
  });

db.collection("teams")
  .where("country", "==", "Spain")
  .where("fans", ">", 700)
  .get()
  .then((data) => {
    let mydocs = data.docs;

    mydocs.forEach((d) => {
      document.querySelector("#spain700").innerHTML += `${d.data().name}<br>`;
    });
  });

db.collection("teams")
  .where("country", "==", "Spain")
  .where("fans", ">=", 500)
  .where("fans", "<=", 600)
  .get()
  .then((data) => {
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      document.querySelector("#spain500600").innerHTML += `${
        d.data().name
      }<br>`;
    });
  });

// update team names

// db.collection("teams").doc("tb1Vy82wIqEROtQUagy6").update({
//   fans: 811,
//   name: "Real Madrid FC",
// });

// db.collection("teams").doc("NZP3UPQNm4i1N4T6kzxS").update({
//   fans: 747,
//   name: "FC Barcelona",
// });

// update team top scorers

// db.collection("teams")
//   .doc("tb1Vy82wIqEROtQUagy6")
//   .update({
//     topscorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
//   });

// db.collection("teams")
//   .doc("tb1Vy82wIqEROtQUagy6")
//   .update({
//     topscorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
//   });

// db.collection("teams")
//   .doc("NZP3UPQNm4i1N4T6kzxS")
//   .update({
//     topscorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
//   });

// db.collection("teams")
//   .doc("NZP3UPQNm4i1N4T6kzxS")
//   .update({
//     topscorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
//   });

// create jersey colors

let color = {
  home: "white",
  away: "black",
};

// db.collection("teams").doc("tb1Vy82wIqEROtQUagy6").update({
//   jerseycolor: color,
// });

color = {
  home: "red",
  away: "gold",
};
// db.collection("teams").doc("NZP3UPQNm4i1N4T6kzxS").update({
//   jerseycolor: color,
// });

// update away jersey colors

// db.collection("teams").doc("tb1Vy82wIqEROtQUagy6").update({
//   "jerseycolor.away": "purple",
// });

// db.collection("teams").doc("NZP3UPQNm4i1N4T6kzxS").update({
//   "jerseycolor.away": "pink",
// });
