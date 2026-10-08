import AstroBubbleHero from "../components/ui/astro-bubble-hero"
import AstroMissionBand from "../components/ui/astro-mission-band"

export default function Home() {
  return (
    <div className="w-full">
      <AstroBubbleHero defaultTheme="dark" />
      <AstroMissionBand defaultTheme="dark" />
    </div>
  )
}