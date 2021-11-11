import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import useStateSafely from "use-state-safely";

const App = ({ safe = false }) => {
  const useStateImpl = safe ? useStateSafely : React.useState;
  const [greeting, setGreeting] = useStateImpl("Hi!");

  React.useEffect(() => {
    window.setTimeout(() => {
      setGreeting("Bye!");
    }, 3000);
  }, [setGreeting]);

  return <h2>{greeting}</h2>;
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

setTimeout(() => {
  ReactDOM.unmountComponentAtNode(root!);
}, 4000);
