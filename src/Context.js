import React, { useState } from "react";
import { createContext } from "react";
export const globalState = createContext();
const intitaldata = [
  {
    name: "vikas",
    username: "gklkgkk",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 2,
    grades: "C",
  },
  {
    name: "vikas",
    username: "gklkgkk",
    email: "Nikita@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 3,
    grades: "D",
  },
  {
    name: "name",
    username: "gklkgkk",
    email: "bittu@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 4,
    grades: "A",
  },
  {
    name: "vikas",
    username: "gklkgkk",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 5,
    grades: "D",
  },
  {
    name: "ffdfdff",
    username: "gklkgkk",
    email: "bittu@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 6,
    grades: "B",
  },
  {
    name: "Bittu",
    username: "dfsdfdsf",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 7,
    grades: "A",
  },
  {
    name: "Sonam",
    username: "dfsdfdsf",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 8,
    grades: "A",
  },
  {
    name: "vikas",
    username: "gklkgkk",
    email: "bittu@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 9,
    grades: "A",
  },
  {
    name: "Sonam",
    username: "dfsdfdsf",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 12",
    id: 10,
    grades: "B",
  },
  {
    name: "vikas",
    username: "gklkgkk",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 10",
    id: 11,
    grades: "C",
  },
  {
    name: "vikas",
    username: "gklkgkk",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 10",
    id: 12,
    grades: "B",
  },
  {
    name: "name",
    username: "dfsdfdsf",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 10",
    id: 13,
    grades: "D",
  },
  {
    name: "vikas",
    username: "gklkgkk",
    email: "Test@gmail.com",
    phone: "59565695444",
    website: "class 10",
    id: 20,
    grades: "D",
  },
  {
    name: "Anupam",
    username: "dfsdfdsf",
    grades: "B",
    email: "Anupam@gmail.com",
    phone: "59565695444",
    website: "class 10",
    id: 22,
  },
];

function Context({ children }) {
  const [count, setCount] = useState(0);
  const [fvrt, setFvrt] = useState(0);
  const [text, setText] = useState("");
  const [store, setStore] = useState(intitaldata);

  return (
    <globalState.Provider
      value={{ count, setCount, fvrt, setFvrt, text, setText, store, setStore }}
    >
      {children}
    </globalState.Provider>
  );
}

export default Context;
