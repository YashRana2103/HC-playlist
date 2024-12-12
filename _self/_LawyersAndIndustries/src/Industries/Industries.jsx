import React, { useEffect, useState } from "react";
import IndustryCard from "./IndustryCard";
import { useIndustries } from "../contexts/IndustriesContext";
function Industries() {
  const [industries, setIndustries] = useState([]);

  // Load industries from localStorage when the component mounts
  useEffect(() => {
    const savedIndustries = JSON.parse(localStorage.getItem("industries"));
    if (savedIndustries && savedIndustries.length > 0) {
      setIndustries(savedIndustries);
    }
  }, []);

  // Save industries to localStorage whenever they change
  useEffect(() => {
    if (industries) {
      localStorage.setItem("industries", JSON.stringify(industries));
    }
  }, [industries]);

  return (
    <>
      {industries.length > 0 ? (
        industries.map((industry) => (
          <IndustryCard
            key={industry.i_id}
            i_name={industry.i_name}
            i_desc={industry.i_desc}
          />
        ))
      ) : (
        <p className="text-gray-700">No industries found. Add some!</p>
      )}
    </>
  );
}
export default Industries;
