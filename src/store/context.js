import { useState, createContext, useContext } from "react";

const Context = createContext();

const WorkingJobs = [
  {
    name: "Software Engineer",
    description:
      "Create, maintain and implement the source code to develop mobile apps.",
    image: "https://www.bigshyft.com/static/media/mobile.dba84f48.svg",
  },
  {
    name: "Front end Developer",
    description:
      "Determining the structure and design of web pages and ensuring they are optimized for phones.",
    image: "https://www.bigshyft.com/static/media/frontend.53cf596a.svg",
  },
];

export const StateContext = ({ children }) => {
  const [jobs, setJobs] = useState([...WorkingJobs]);

  const onAddJob = (name, description, image) => {
    setJobs([...jobs, { name, description, image }]);
  };

  return (
    <Context.Provider value={{ jobs, onAddJob }}>{children}</Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
