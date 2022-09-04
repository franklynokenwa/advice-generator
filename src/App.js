import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdviceContainer from "./components/AdviceContainer";
import AppStyle from "./styles/App.module.css"
import './styles/Global.css'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={AppStyle.app}>
        <AdviceContainer/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
