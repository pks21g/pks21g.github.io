const weddingCard = [
  {
    image:
    "https://source.unsplash.com/woman-in-white-wedding-dress-mLIurLmSRAY",
    activityDesc: "Complete all the steps from Getting Started wizard",
  },
  {
    image:
      "https://source.unsplash.com/smiling-newly-wed-couple-about-to-kiss-in-green-field-WJc87MVcDaA",
    activityDesc: "Called interested in March fundraising Sponsorship",
  },
  { image: "Gary Busy", activityDesc: "Get approval for price quote" },
];

const html = weddingCard.map((obj) => {
  return `<div class="wedding-card">
  <img src=${obj.image}></img>
  <h2>${obj.activityDesc}<h2>
  </div>`;
});
document.querySelector(".wedding-cards").innerHTML = html.join("");
