import { FxInput } from "./input";
import { I18nProvider } from "react-aria-components";

export default function Aria() {
  return (
    <I18nProvider locale="de">
      some aria headless components
      <fieldset>
        <FxInput />
      </fieldset>
    </I18nProvider>
  );
}
