import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MenuNgang } from './components/MenuNgang';
import { routes } from './config/routes';
import { MyRoute } from './components/MyRoute';
import { TodoContextProvider } from './context/TodoContext';

function App() {
  return (
    <div className="App">
        <h1 >MY APP</h1>
        <TodoContextProvider>
          <BrowserRouter>
            {/* <!-- Menu ngang --> */}
            <MenuNgang />
            {/* Định tuyến */}
            <Switch>
              {routes.map((item, index) => {
                return (
                  <MyRoute key={index} path={item.path} component={item.component} />
                )
              })}
            </Switch>
          </BrowserRouter>
        </TodoContextProvider>
    </div>
  );
}

export default App;
