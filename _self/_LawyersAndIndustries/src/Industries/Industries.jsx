import React, { useEffect, useState } from "react";
import IndustryCard from "./IndustryCard";
import { useIndustries } from "../contexts/IndustriesContext";
function Industries() {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    // Get industries from localStorage on load
    const savedIndustries = JSON.parse(localStorage.getItem("industries"));
    if (savedIndustries && savedIndustries.length > 0) {
      setIndustries(savedIndustries);
    }
  }, []);

  useEffect(() => {
    const storedIndustries = JSON.parse(localStorage.getItem("industries"));
    if (storedIndustries) {
      setIndustries(storedIndustries);
    }
  }, []);

  return (
    <div>
      {industries.map((industry) => (
        <IndustryCard
          key={industry.i_id}
          i_name={industry.i_name}
          i_desc={industry.i_desc}
        />
      ))}
    </div>
  );
}
export default Industries;
