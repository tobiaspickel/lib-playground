import { I18nProvider } from "react-aria-components";
import { FxTabs } from "./tabs";

export default function Aria() {
  return (
    <I18nProvider locale="de">
      some aria headless components
      <FxTabs />
    </I18nProvider>
  );
}
