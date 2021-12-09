import Default from "../assets/default.png";
import Food from "../assets/food.png";
import Party from "../assets/party.png";
import Shopping from "../assets/shopping.png";
import Travel from "../assets/travel.png";
import Study from "../assets/study.png";
import Sport from "../assets/sport.png";
import Job from "../assets/job.png";
import Football from "../assets/footeball.png";

//nao existe o type 0 por isso null
export const typeIcons = [
  Default,
  Food,
  Party,
  Shopping,
  Travel,
  Study,
  Sport,
  Job,
  Football,
];

export interface IDataTask {
  _id: string;
  title: string;
  description: string;
  when: Date;
  done: boolean;
  type: number;
}
