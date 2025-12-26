import Benefit from "@/widgets/benefit/Benefit";
import Cook from "@/widgets/cookvideo/Cook";
import Event from "@/widgets/evenets/Event";
import FakePro from "@/widgets/fakeProducts/FakePro";
import Intro from "@/widgets/intro/Intro";
import React from "react";

const page = () => {
  return (
    <div>
      <Intro />
      <Benefit />
      <Cook />
      <FakePro />
      <Event />
    </div>
  );
};

export default page;
