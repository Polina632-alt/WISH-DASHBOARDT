const user = {
  name: "Поліна",
  surname: "Захаренко",
  userPhoto: "my-photo.jpg.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "animal.jpg.jpg", alt: "домашні улюбленці" },
    { src: "art.jpg.jpg", alt: "творчість" },
    { src: "house.jpg.jpg", alt: "власний будинок" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  800,
  1000,
  1200,
  1400,
  1600,
  1800,
  2100,
  2400,
  2700,
  3100,
  3500,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Гнучкість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
