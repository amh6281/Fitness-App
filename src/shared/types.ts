export enum SelectedPage {
  Home = "home",
  Benefit = "benefit",
  Class = "class",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
