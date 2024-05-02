import { List, Trigger, Root, Content } from "@radix-ui/react-tabs";
export const FxTabs = () => {
  return (
    <Root defaultValue="FoR">
      <List aria-label="History of Ancient Rome">
        <Trigger value="FoR">Founding of Rome</Trigger>
        <Trigger value="MaR">Monarchy and Republic</Trigger>
        <Trigger value="Emp">Empire</Trigger>
      </List>
      <Content value="FoR">
        Arma virumque cano, Troiae qui primus ab oris.
      </Content>
      <Content value="MaR">Senatus Populusque Romanus.</Content>
      <Content value="Emp">Alea jacta est.</Content>
    </Root>
  );
};
