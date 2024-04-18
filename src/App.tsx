import { Input } from './components/Input';
import { Form, type FormHandle } from './components/Form';
import { Button } from './components/Button';
import { useRef } from 'react';

function App() {
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <main>
      <Form onSave={handleSave}>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
