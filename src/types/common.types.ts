export type props = {

  heading1: string;
  heading2: string;
  info: string;
  service1: string;
  service2: string;
  content: string;
};
export type innerpageprops = {
  price: string;
  heading1: string;
  heading2: string;
  info: string;
  service1: string;
  service2: string;
  content: string;
};
export interface prop{
  prop:props
}
interface ClientReview {
    id: number;
    rating: number;
    title: string;
    content: string;
}

export interface ClientReviewCardProp {
    testimonial: ClientReview;
}
export interface serviceprop{
  title:string,
   url:string ,
   info:string,
   link:string,
}