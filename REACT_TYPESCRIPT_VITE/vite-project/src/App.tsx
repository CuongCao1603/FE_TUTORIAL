import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Count } from "./Count";

// type People = {
//   name: string;
//   age: number;
//   // field có thể có hoặc không
//   location?: string;
// };

// // tái sử dụng code sử dụng intersection
// type Employee = People & {
//   // name: string;
//   // age: number;
//   jobTitle: string;
//   degree: string;
// };

interface IPeople {
  name: string;
  age: number;
  location?: string;
}

interface IRealationship {
  wifeName: string;
  childName: string;
}

enum Degree {
  ASSCOCIATES = "ASSCOCIATES",
  BACHELORS = "BACHELORS",
  MASTERS = "MASTERS",
  DOCTORATE = "DOCTORATE",
  PROFESSIONAL = "PROFESSIONAL",
}
interface IEmployee extends IPeople, IRealationship {
  jobTitle: string;
  degree: Degree;
  level?: string | number | Degree;
}


// generic type
type ApiResponse<DataType, MessageType> = {
  data: DataType;
  status: "success" | "failure";
  message?: MessageType
};

function App() {
  // duoc gán kiểu theo giá trị khởi tạo
  const [count, setCount] = useState<number>(0);
  const [people, setPeople] = useState<IPeople>();

  const userResponse: ApiResponse<{id: number; name: string}, {}> = {
    data: { id: 1, name: "John" },
    status: "success",
  };

  const employee: IEmployee = {
    name: "Employee",
    age: 48,
    wifeName: "Ha",
    childName: "MeoMeo",
    jobTitle: "Software Engineer",
    degree: Degree.ASSCOCIATES, // index value 0,
    level: Degree.PROFESSIONAL,
  };

  const employee2: typeof employee = {
    name: "Empoyee2",
    age: 48,
    wifeName: "Ha",
    childName: "MeoMeo",
    jobTitle: "Software Engineer",
    degree: Degree.ASSCOCIATES, // index value 0,
    level: Degree.PROFESSIONAL,
  };

  function total(number1: number, number2: number): string {
    return String(number1 + number2);
  }

  console.log(employee, people, employee2, userResponse);

  useEffect(() => {
    setPeople({
      name: "Test",
      age: 12,
      location: "Ha Noi",
    });
  });
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} total={total} />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
