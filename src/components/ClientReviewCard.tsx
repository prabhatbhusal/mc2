import React from "react";
import { Star } from "lucide-react";

interface ClientReview {
    id: number;
    rating: number;
    title: string;
    content: string;
}

interface ClientReviewCardProp {
    testimonial: ClientReview;
}

const ClientReviewCard: React.FC<ClientReviewCardProp> = ({ testimonial }) => {
    return (
      <div className="flex flex-col gap-5 p-6 bg-black text-white rounded-lg border border-[#CCCCCC]">
        <div className="flex items-start gap-[18px]">
          <div className="flex items-start gap-2">
            {testimonial.rating === 5.0 ? (
              <div className="flex items-center gap-1.5">
                <Star className="fill-yellow-400 text-yellow-400" />
              </div>
            ) : (
              <div className="relative w-6 h-6">
                <Star className="fill-yellow-400 text-yellow-400" />
              </div>
            )}
            <span className="font-testimonials-body font-[number:var(--testimonials-body-font-weight)] text-neutral-500 text-[length:var(--testimonials-body-font-size)] tracking-[var(--testimonials-body-letter-spacing)] leading-[var(--testimonials-body-line-height)]">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 flex-1">
            <div className="font-testimonials-title font-[number:var(--testimonials-title-font-weight)] text-neutral-500  text-[length:var(--testimonials-title-font-size)] tracking-[var(--testimonials-title-letter-spacing)] leading-[var(--testimonials-title-line-height)] [font-style:var(--testimonials-title-font-style)] w-full">
              {testimonial.title}
            </div>
          </div>
        </div>
        <p className="text-neutral-500  text-base line-clamp-4">
          {testimonial.content}
        </p>
      </div>
    );
};

export default ClientReviewCard;