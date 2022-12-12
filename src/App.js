import './App.css';
import {useRoutes} from 'react-router-dom'
import {Kunddli} from './Kunddli'
import {KunddliList} from './KunddliList'
import {Dashboard} from './Dashboard'
function App() {
  const route=useRoutes([
    {path:'/',element:<Dashboard/>,
  children:[
    {path:'kunddli',element:<Kunddli/>},
    {path:'kunddlilist',element:<KunddliList/>}
  ]}
  ])
  return (
    <div className="App">
      
      {route}
      <d/>
    </div>
  );
}

export default App;
