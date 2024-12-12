import React from "react";
import { createContext, useContext } from "react";

export const IndustriesContext = createContext({
  industries: [
    // {
    //   i_id: 1,
    //   i_name: "Real Estate",
    //   i_desc:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, tempore iure a repellendus laborum modi exercitationem deleniti, ex adipisci assumenda odio maxime mollitia voluptas qui accusamus fugiat, maiores accusantium? Ratione?",
    // },
  ],
  addIndustries: (industry) => {},
});

export const useIndustries = () => {
  return useContext(IndustriesContext);
};

export const IndustriesProvider = IndustriesContext.Provider;
