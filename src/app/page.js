import CTA from '@/components/CTA'
import CarouselSwiper from '@/components/CarouselSwiper'
import ServiceItems from '@/components/ServiceItems'
import WhoWeAre from '@/components/WhoWeAre'

export default function Home() {
  return (
    <main>
      <CarouselSwiper />
      <WhoWeAre />
      <ServiceItems />
      <CTA />
    </main>
  )
}