import { NavItems } from "@/types/navbar.types";

export const navItems: NavItems[] = [
  {
    id: 1,
    title: "HOME",
    url: "/",
  },
  {
    id: 2,
    title: "ABOUT",
    url: "/about",
  },
  {
    id: 3,
    title: "SERVICES",
    url: "/services",
  },
  {
    id: 4,
    title: "OUR WORK",
    url: "/work",
  },
  {
    id: 5,
    title: "CONTACT",
    url: "/contact",
  },
];

export const Footercontact = [
  {
    id: 1,
    content: "(254) 393-6078",
    url: "/icons/phone.svg",
  },
  {
    id: 2,
    content: "info@polkroadsideassistance.com",
    url: "/icons/mail.svg",
  },
  {
    id: 3,
    content: "1802 Standridge St, Killeen, TX 76543, USA",
    url: "/icons/location.svg",
  },
];
export const Footerareas = [
  {
    id: 1,
    content: "KILLEEN",
  },
  {
    id: 2,
    content: "COPPERAS COVE",
  },
  {
    id: 3,
    content: "BELTON",
  },
  {
    id: 4,
    content: "TEMPLE",
  },
  {
    id: 5,
    content: "FORT CAVAZOS",
  },
  {
    id: 6,
    content: "HARKER HEIGHTS",
  },
  {
    id: 7,
    content: "MORGAN’S POINT",
  },
  {
    id: 8,
    content: "SALADO",
  },
];
export const Footerserve = [
  {
    id: 1,
    content: "TOWING",
  },
  {
    id: 2,
    content: "Roadside Assistance",
  },
  {
    id: 3,
    content: "Lock Out Services",
  },
  {
    id: 4,
    content: "Fuel Delivery",
  },
  {
    id: 5,
    content: "Car Battery Replacement",
  },
  {
    id: 6,
    content: "Jumpstarts",
  },
  {
    id: 7,
    content: "Heavy Duty Jump",
  },
  {
    id: 8,
    content: "Tire Repair",
  },
  {
    id: 9,
    content: "Mobile Battery Change",
  },
  {
    id: 10,
    content: "Air Delivery Services",
  },
];


export const reviewdata = [
  {
    id: 1,
    title: "Rinny Kaligis",
    rating: 5.0,
    content:
      "Polk Roadside Assistance Saved My Car—and My Wallet—by Covering Repairs and My Extended Rental After a Hit-and-Run!After my car was sideswiped in a hit-and-run on 01/10/25, I was devastated",
  },
  {
    id: 2,
    title: "Nasibullah Naziri",
    rating: 5.0,
    content:
      "My vehicle was into an accident, I took my car to Polk Roadside Assistance and they fixed my car way better than what it was to the smallest detail I highly recommend this shop outstanding people with great work.",
  },
  {
    id: 3,
    title: "Douglas Boner",
    rating: 5.0,
    content:
      "Great Body Shop, they worked with my insurance company after my accident and got my car back like brand new! Thank you Moe for the excellent service. True workmanship at Polk Roadside Assistances",
  },
  {
    id: 4,
    title: "Tyler Post",
    rating: 5.0,
    content:
      "Does great work will go back for all body shop needs highly recommend",
  },
  {
    id: 5,
    title: "Rinny Kaligis",
    rating: 5.0,
    content:
      "Polk Roadside Assistance Saved My Car—and My Wallet—by Covering Repairs and My Extended Rental After a Hit-and-Run!After my car was sideswiped in a hit-and-run on 01/10/25, I was devastated",
  },

];
interface ImageItem {
  src: string;
  alt?: string;
}
export const images: ImageItem[] = [
  {
    src: "/Gallery/image-1.png",
    alt: "Image 1",
  },
  {
    src: "/Gallery/image-2.png",
    alt: "Image 2",
  },
  {
    src: "/Gallery/image-3.png",
    alt: "Image 3",
  },
  {
    src: "/Gallery/image-4.png",
    alt: "Image 4",
  },
  {
    src: "/Gallery/image-6.png",
    alt: "Image 5",
  },
  {
    src: "/Gallery/image-15.png",
    alt: "Image 6",
  },
  {
    src: "/Gallery/image-8.png",
    alt: "Image 7",
  },
  {
    src: "/Gallery/image-9.png",
    alt: "Image 1",
  },
  {
    src: "/Gallery/image-10.png",
    alt: "Image 2",
  },
  {
    src: "/Gallery/image-11.png",
    alt: "Image 3",
  },
  {
    src: "/Gallery/image-12.png",
    alt: "Image 4",
  },
  {
    src: "/Gallery/image-13.png",
    alt: "Image 5",
  },
  {
    src: "/Gallery/image-5.png",
    alt: "Image 6",
  },
  {
    src: "/Gallery/image-15.png",
    alt: "Image 7",
  },
];

export const services = [
  { title: "Towing", url: "/Services/Towing.jpg" ,},
  { title: "Fuel Delivery", url: "/Services/Fueldelivery.jpg" },
  { title: "Lock Out Services", url: "/Services/lockout.jpg" },
  { title: "Roadside Assistance", url: "/Services/roadside.jpg" },
  { title: "JumpStart", url: "/Services/Jumpstart.jpg" },
  { title: "Heavy Duty Jump", url: "/Services/Heavyduty.jpg" },
  { title: "Tire Repair", url: "/Services/tirerepair.jpg" },
  { title: "Tire Change", url: "/Services/tirechange.jpg" },
  { title: "Mobile Battery Change", url: "/Services/mobile.jpg" },
  { title: "Car Battery Replacement", url: "/Services/Batteryreplace.png" },
  { title: "Air Delivery Service", url: "/Services/Towing.jpg" },
];