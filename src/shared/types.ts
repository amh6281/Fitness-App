export enum SelectedPage {
  Home = "home",
  Benefit = "benefit",
  Classes = "classes",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
