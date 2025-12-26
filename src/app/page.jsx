import Benefit from "@/widgets/benefit/Benefit";
import Cook from "@/widgets/cookvideo/Cook";
import Event from "@/widgets/evenets/Event";
import FakePro from "@/widgets/fakeProducts/FakePro";
import Intro from "@/widgets/intro/Intro";
import AOS from "aos";

export default function Home() {
  return (
    <div className="home-page">
      <Intro />
      <Benefit />
      <Cook />
      <FakePro />
      <Event />
    </div>
  );
}
