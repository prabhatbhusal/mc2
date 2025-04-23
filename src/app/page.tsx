import Contact from "@/components/page/landing/contact";
import PageBanner from "@/components/PageBanner";


export default function Home() {
  return (
    <main>
      <PageBanner
        title="Home Page"
        currentPage="Home"
        links={[{ title: "Home", url: "/" }]}
      />
      <Contact />
    </main>
  );}