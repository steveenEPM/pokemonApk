import { NavigationContainer } from "@react-navigation/native";
import Pokemon from "./src/routes/PokeStack";

export default function App() {
  return (
    <NavigationContainer>
      <Pokemon/>
    </NavigationContainer>
  );
}

