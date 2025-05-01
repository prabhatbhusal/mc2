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
    title: "GALLERY",
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
  {
    title: "Towing",
    url: "/Services/Towing.jpg",
    info: "Polk Roadside Experts are reliable when it comes to towing services. Their offerings include both emergency and general vehicle towing. When you find yourself with a broken-down car, they have the expertise to help. Along with towing, they provide tire repair and jump-start solutions, making them a one-stop service for motorists in need. Their dedication to assisting drivers ensures that you’ll be back on the road in no time. ",
    link: "/services/towing",
  },
  {
    title: "Fuel Delivery",
    url: "/Services/Fueldelivery.jpg",
    info: "Running out of fuel is inconvenient, but Polk Roadside Assistance is here to help. They provide quick fuel delivery directly to wherever you are. This allows you to get back on track without waiting long. As part of their comprehensive roadside services, fuel delivery ensures you are never stuck for too long. Their efficient and timely assistance helps you resume your journey with ease.",
    link: "/services/fuel",
  },
  {
    title: "Lock Out Services",
    url: "/Services/lockout.jpg",
    info: "Getting locked out of your car can be frustrating. Polk Roadside Assistance ensures a smooth resolution to such situations. Their lockout services are swift, making sure you regain access without hassle. They aim to resolve the issue without needing to tow the vehicle, adding convenience for drivers. This efficient service means that getting back into your car is easier than ever, letting you continue your day smoothly. ",
    link: "/services/lockout",
  },
  {
    title: "Roadside Assistance",
    url: "/Services/roadside.jpg",
    info: "With Polk Roadside Experts, you get comprehensive roadside assistance to tackle any vehicle issue. Whether it's a flat tire, a dead battery, or getting locked out, their team is ready. They provide reliable mobile battery services, allowing you to quickly resume your journey. Fuel delivery is another essential service they offer, ensuring you never stay stranded for long. Their roadside services are tailored to keep drivers moving with minimal delay.",
    link: "/services/roadside",
  },
  {
    title: "JumpStart",
    url: "/Services/Jumpstart.jpg",
    info: "No one likes dealing with a dead battery, but with the jump start services of Polk Roadside Assistance, it's a quick fix. If you accidentally left your lights on, they can get your car running again. Their team provides reliable jump-start assistance, ensuring your car is operational swiftly. This essential service ensures peace of mind, helping you get back on the road with minimal stress.",
    link: "/services/jumpstart",
  },
  {
    title: "Heavy Duty Jump Start",
    url: "/Services/Heavyduty.jpg",
    info: "For those times when a regular jump start isn't enough, Polk Roadside Experts offer Heavy Duty Jump Start services. This service is ideal for larger vehicles or stubborn batteries. They provide a rapid solution for vehicles with completely discharged batteries. Their expertise ensures drivers receive prompt and efficient service for battery-related issues. With presence across Texas, they bring peace of mind to drivers requiring extra assistance.",
    link: "/services/heavyduty",
  },
  {
    title: "Tire Repair",
    url: "/Services/tirerepair.jpg",
    info: "When a tire issue arises, Polk Roadside Experts are ready to help. They offer comprehensive tire repair services across Texas, including flat tire repair and replacement. With their mobile tire repair solutions, drivers receive efficient help right on the roadside. Whether it’s a quick air delivery or replacing a flat tire, Polk Roadside Experts ensure you're back on the road without unnecessary delays.",
    link: "/services/tirerepair",
  },
  {
    title: "Tire Change",
    url: "/Services/tirechange.jpg",
    info: "Polk Roadside Assistance specializes in prompt tire changes to keep your journey uninterrupted. If you have a flat tire, they provide efficient and reliable tire repair services, from plugging to replacing. Operating across numerous counties in Texas, their tire services ensure peace of mind for drivers. Their goal is to get you moving again quickly, making roadside emergencies feel manageable.",
    link: "/services/tirechange",
  },
  {
    title: "Mobile Battery Change",
    url: "/Services/mobile.jpg",
    info: "For drivers stranded with a dead battery, Polk Roadside Assistance offers Mobile Battery service. This service provides swift and reliable assistance, ensuring a quick response. Technicians are equipped to replace batteries right on the roadside, minimizing your downtime. Available 24/7, their mobile battery service is part of comprehensive roadside support, offering constant help throughout Texas.",
    link: "/services/mobbattery",
  },
  {
    title: "Car Battery Replacement",
    url: "/Services/Batteryreplace.png",
    info: "Polk Roadside Assistance features a responsive Car Battery Replacement service to address battery malfunctions. If your battery fails, their skilled technicians will assist with prompt solutions. Equipped with necessary tools for roadside service, they minimize disruptions to your travel plans. This crucial service ensures that drivers receive timely help, enabling them to get back on the road quickly. ",
    link: "/services/carbattery",
  },
  {
    title: "Air Delivery Service",
    url: "/Services/Towing.jpg",
    info: "Tire issues are no match for Polk Roadside Experts and their Air Delivery Service. It provides on-site tire inflation to quickly solve flat tire incidents. Part of their comprehensive roadside assistance, this service aims to reduce your downtime efficiently. Available alongside other amenities, the Air Delivery Service ensures you receive timely support, helping your journey continue without a hitch. ",
    link: "/services/airdelivery",
  },
];

export const aboutdata = [
  {
    id: 1,
    title: "MISSION",
    content:
      "Our Mission is Simple-To deliver fast, dependable, and top-quality roadside assistance services that get you back on the road safely. We strive to be the trusted first call for anyone facing a roadside emergency—providing quick, effective, and stress-free solutions anytime, anywhere.",
  },
  {
    id: 2,
    title: "VISION",
    content:
      "Our Vision-To become the most trusted roadside assistance provider by setting the standard for rapid response, exceptional service, and customer-first care. We envision a future where every driver feels safe and supported on the road, no matter the situation.",
  },
  {
    id: 3,
    title: "OUR TEAM",
    content:
      "Behind every service call is a dedicated team of trained and experienced professionals who know how to handle all types of roadside challenges. From tire changes to towing, our experts are equipped with modern tools, in-depth knowledge, and a genuine commitment to helping you when you need it most.",
  },
];

export const galleryimg = [
  {
    src: "/Services/Towing.jpg",
    alt: "Image 1",
  },
  { src: "/Services/mobile.jpg", alt: "Image 1" },
  { src: "/Services/Batteryreplace.png", alt: "Image 1" },
  { src: "/Services/tirerepair.jpg", alt: "Image 1" },
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
    src: "/Services/Jumpstart.jpg",
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
  {
    src: "/Services/lockout.jpg",
    alt: "Image 7",
  },
  {
    src: "/Services/Heavyduty.jpg",
    alt: "Image 7",
  },
  {
    src: "/Services/roadside.jpg",
    alt: "Image 7",
  },
];
