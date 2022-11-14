import './App.css';
import Wrapper from './Wrapper'; //HOC
import Welcome from './Welcome';
import FormValidation from './components/FormValidation';

function App() {
  const AppComponent = Wrapper(Welcome)

  return (
    <div>
      <FormValidation/>
    </div>
  );
}

export default App;
