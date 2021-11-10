import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useStateSafely from 'use-state-safely';


const App = () => {
  const [greeting, setGreeting] = useStateSafely('Hi!');

  React.useEffect(() => {
    window.setTimeout(() => { setGreeting('Bye!') }, 3000)
  }, [])

  return <h2>{greeting}</h2>;
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

setTimeout(() => {
  ReactDOM.unmountComponentAtNode(root!);
}, 4000);
