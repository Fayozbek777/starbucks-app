import Benefit from "@/widgets/benefit/Benefit";
import Cook from "@/widgets/cookvideo/Cook";
import Intro from "@/widgets/intro/Intro";
import React from "react";

const page = () => {
  return (
    <div>
      <Intro />
      <Benefit />
      <Cook />
    </div>
  );
};

export default page;
