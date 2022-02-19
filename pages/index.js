import BannerSlider from "../components/Banner";
import SectionHeader from "../components/SectionHeader";



export default function Home() {
  return (
    <div style={{width:'100%'}}>
      <BannerSlider />
      <SectionHeader txt = {"TALK SHOWS"}/>
      <SectionHeader  txt = {"MORNING SHOWS"}/>
      <SectionHeader  txt = {"AFTERNOON SHOWS"}/>
      <SectionHeader  txt = {"EVENING SHOWS"}/>
      <SectionHeader  txt = {"MUSIC SHOWS"}/>
      <SectionHeader txt = {"SCHEDULE"}/>
    </div>
  )
}
