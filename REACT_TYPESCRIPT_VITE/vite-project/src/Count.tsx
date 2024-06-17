import React from "react";

// custom type
// type Props = {
//   count: number;
//   setCount: React.Dispatch<React.SetStateAction<number>>;
//   total: (a:number, b:number) => number;
// };

interface IProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: (a:number, b:number) => string;
}

// truyen trong ngoac nhon la 1 props
export const Count = ({ count, setCount }: IProps) => {
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};
