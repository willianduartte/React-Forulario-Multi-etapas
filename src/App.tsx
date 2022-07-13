import { FormProvider } from "./contexts/FormContext";
import { Router } from "./Routes/router";

function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
