"use client"

import Sidebar from "./components/Sidebar";
import TemplateContainer from "./components/TemplateContainer";
const TemplateHomePage = () => {
  return (
    <div className="h-[100vh] w-[100%] flex ">
      <Sidebar />
      <TemplateContainer />
    </div>
  );
};
export default TemplateHomePage;
