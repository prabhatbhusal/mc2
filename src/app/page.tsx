
import Page from '@/components/page/landing/Home'
import Fasthelp from '@/components/page/landing/fasthelp';
import Servicescars from '@/components/page/landing/servicescars';
import Gallery from '@/components/page/landing/Gallery';
import Testimonials from '@/components/page/landing/testimonials';
import Service from '@/components/page/landing/service2';
import Service247 from '@/components/page/landing/service247';
import MapSection from '@/components/page/landing/MapSection';

export default function Home() {
  return (
    <main>
      <Page />
      <Service247 />
      {/* <About /> */}
      <Fasthelp />
      <Servicescars />
      <Gallery />
      <Testimonials />
      <Service />
    </main>
  );
}