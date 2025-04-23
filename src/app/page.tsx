import PageBanner from "@/components/PageBanner";


export default function Home() {
  return (
    <main>
      <PageBanner
        title="Home Page"
        currentPage="Home"
        links={[{ title: "Home", url: "/" }]}
      />
    </main>
    )}