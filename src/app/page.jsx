import Benefit from "@/widgets/benefit/Benefit";
import Cook from "@/widgets/cookvideo/Cook";
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
    </div>
  );
};

export default page;
