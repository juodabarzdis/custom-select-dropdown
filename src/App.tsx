import Select from "./Select";
import { useState } from "react";
import { SelectOptions } from "./Select";

const options = [
  { label: "first", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "fourth", value: 4 },
  { label: "fifth", value: 5 },
];

const App = () => {
  const [value1, setValue1] = useState<SelectOptions[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOptions | undefined>(options[0]);

  return (
    <div>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(option) => setValue1(option)}
      />
      <br />
      <Select
        options={options}
        value={value2}
        onChange={(option) => setValue2(option)}
      />
    </div>
  );
};

export default App;
