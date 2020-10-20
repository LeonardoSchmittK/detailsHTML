const container = window.document.querySelector(".container");
const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
const txt = `&nbsp&nbsp&nbsp Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas maxime vel aliquam non itaque beatae ab nesciunt ad repudiandae.`;

function addDetails() {
  let i = 0;
  while (i < planets.length) {
    let details = window.document.createElement("details");
    let summary = window.document.createElement("summary");
    let description = window.document.createElement("p");
    
    description.innerHTML = txt;
    summary.innerHTML = planets[i];
    details.className = "planetConfig ";
    summary.className = "planetTitle";
    description.className = "planetDescription";

    details.appendChild(description);
    details.appendChild(summary);
    container.appendChild(details);
    ++i;
  };
};

addDetails();
