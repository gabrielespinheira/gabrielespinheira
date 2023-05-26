import {
  HeroCenter,
  HeroTopLeft,
  HeroBottomRight,
  HeroCorner,
  AppIsometric,
} from '@/components'

const Content = () => {
  return (
    <div className="container-full relative z-10 flex min-h-screen items-center justify-center">
      <div id="hero-intro" className="mt-16 w-full">
        <h1 className="text-[64px] font-semibold leading-tight tracking-[0.01em] text-neutral-light drop-shadow-md">
          A software engineer with a passion to turn good ideas into aesthetic
          products.
        </h1>
      </div>

      <div
        id="isometric"
        className="mt-16 flex w-full max-w-[640px] items-center justify-end"
      >
        {/* <Image
          src="/assets/isometric.svg"
          alt="Isometric Mockup"
          width={640}
          height={660}
          priority={true}
        /> */}

        {/* <AppIsometric /> */}

        <AppIsometric />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div id="hero" className="relative min-h-screen">
      <Content />

      <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden blur-[120px]">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-white/20"></div>

        <HeroCenter className="animation-hero-center absolute h-[85vh] w-[67vw] blur-3xl" />
        <HeroTopLeft className="animation-hero-top-left absolute h-[79vh] w-[68vw] blur-3xl" />
        <HeroCorner className="animation-hero-top-right absolute h-[93vh] w-[51vw] blur-lg" />
        <HeroCorner className="animation-hero-bottom-left absolute h-[93vh] w-[51vw] blur-lg" />
        <HeroBottomRight className="animation-hero-bottom-right absolute h-[81vh] w-[46vw] blur-3xl" />
      </div>
    </div>
  )
}
