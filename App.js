import { PaperProvider } from "react-native-paper";
import DrawerRouter from './src/routes/DrawerRouter';

export default function App() {
  return (
    <PaperProvider>
      <DrawerRouter></DrawerRouter>
    </PaperProvider>
  );
}
