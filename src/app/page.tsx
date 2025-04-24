
import Page from '@/components/page/landing/Home'
import About from '@/components/page/landing/Aboutus'
import Fasthelp from '@/components/page/landing/fasthelp';
import Servicescars from '@/components/page/landing/servicescars';
import Gallery from '@/components/page/landing/Gallery';

export default function Home() {
  return (
    <main>
      <Page/>
      <About/>
      <Fasthelp/>
      <Servicescars/>
      <Gallery/>

    </main>
  );}