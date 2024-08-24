import campMeeting from "./assets/Camp Meeting web.png";
import campSquare from "./assets/camp square.png";
import praiseQuakeSquare from "./assets/praise quake square.png";
import praiseQuake from "./assets/praise quake web.png";

const programs = [
  {
    id: 1,
    name: "Annual Camp Meeting",
    date: "August 25th - 28th, 2024",
    description:
      "Soldout Christian Center's annual Camp meeting is around the corner and you do not want to miss it!! For more information, go to the contacts page and contact the church in any way that's most convenient for you.",
    img: campMeeting,
    location: "Redemption Camp",
    imgSquare: campSquare,
  },
  {
    id: 2,
    name: "Praise Quake",
    date: "October 6th, 2024",
    description:
      "Praise Quake is our annual praise program that has had ministers like Frank Edwards, Victoria Orenze,Buchi, Preye Odede, Uche Unlimited and many more grace her stage. The program's main aim is to capture souls for God through truthful and soulful worship.",
    img: praiseQuake,
    location: "TBD",
    imgSquare: praiseQuakeSquare,
  },
];
export default programs;
