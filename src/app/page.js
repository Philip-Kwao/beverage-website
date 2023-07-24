import CTA from '@/components/CTA'
import CarouselSwiper from '@/components/CarouselSwiper'
import Contact from '@/components/Contact'
import NeedHelp from '@/components/NeedHelp'
import ServiceItems from '@/components/ServiceItems'
import ServiceRendered from '@/components/ServiceRendered'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import WhoWeAre from '@/components/WhoWeAre'

export default function Home() {
  return (
    <main>
      <CarouselSwiper />
      <WhoWeAre />
      <ServiceRendered />
      {/* <ServiceItems /> */}
      <CTA />
      <Testimonial />
      <NeedHelp />
      <Team />
      <Contact />
    </main>
  )
}