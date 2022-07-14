import Container from "./components/Container";
import { Button } from 'antd';
import './App.less'

function App() {
    return (
        <div className="App">
            <Container/>
            <Button type="Primary">Button</Button>
        </div>
    );
}

export default App;
