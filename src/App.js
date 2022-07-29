import AdviceContainer from "./components/AdviceContainer";
import AppStyle from "./styles/App.module.css"
import './styles/Global.css'

function App() {
  return (
    <div className={AppStyle.app}>
      <AdviceContainer/>
    </div>
  );
}

export default App;
