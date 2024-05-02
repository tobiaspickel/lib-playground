import { FormControl } from "@mui/base";
import { Button, Input as BaseInput, inputClasses } from "@mui/base";
import { useState } from "react";

export const FxInput = () => {
  const [state, setState] = useState("cake");
  console.log(inputClasses);
  return (
    <FormControl onChange={(e) => setState(e.target.value)} value={state}>
      <BaseInput
        endAdornment={<Button onClick={() => alert("yay")}> click me </Button>}
      />
    </FormControl>
  );
};
