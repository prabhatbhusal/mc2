export type props=
{
  heading1:string,
  heading2:string,
  info:string,
  service:string,
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