import { Button } from './components/Button';
import { Contaier } from './components/Contaier';

function App() {
  return (
    <main>
      <Contaier as={Button} onClick={() => {}}>
        Click me
      </Contaier>
    </main>
  );
}

export default App;
