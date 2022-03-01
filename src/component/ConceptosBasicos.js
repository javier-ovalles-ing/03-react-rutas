import React from 'react'
import { HashRouter, Redirect } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Switch ,Route} from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ReactTopics from '../pages/ReactTopics';
import Error404 from './Error404';
import Home from './Home';
import MenuConceptos from './MenuConceptos';
import PrivateRoute from './PrivateRoute';
import Productos from './Productos';
import Usuario from './Usuario';



const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Route</h2>
      <HashRouter>
      <MenuConceptos/>
            <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/acerca' component={Acerca} />
             <Route exact path='/contacto' component={Contacto} />
             <Route exact path="/usuario/:username" component={Usuario}/>
             <Route exact path='/productos' component={Productos} />
             <Route exact path="/about">
             <Redirect to="/acerca"/>
             </Route>
             <Route exact path="/contact">
             <Redirect to="/contacto"/>
             </Route>
             <Route path="/react" component={ReactTopics}/>
             <Route exact path='/login' component={Login}/>
             {/* <Route exact path='/dashboard' component={Dashboard}/> */}
             <PrivateRoute exact path='/dashboard' component={Dashboard}/>
             <Route exact path='*' component={Error404} />             
           </Switch>
      </HashRouter>
      <hr/>
        <h2>Concepots Basicos</h2>
        <Router>
            <MenuConceptos/>
            <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/acerca' component={Acerca} />
             <Route exact path='/contacto' component={Contacto} />
             <Route exact path="/usuario/:username" component={Usuario}/>
             <Route exact path='/productos' component={Productos} />
             <Route exact path="/about">
             <Redirect to="/acerca"/>
             </Route>
             <Route exact path="/contact">
             <Redirect to="/contacto"/>
             </Route>
             <Route path="/react" component={ReactTopics}/>
             <Route exact path='/login' component={Login}/>
             {/* <Route exact path='/dashboard' component={Dashboard}/> */}
             <PrivateRoute exact path='/dashboard' component={Dashboard}/>
             <Route exact path='*' component={Error404} />             
           </Switch>
        </Router>
    </div>
  )
}

/* const ConceptosBasicos = () => {
    return (
      <div>
         
          <h2>Concepots Basicos</h2>
          <Router>
              <MenuConceptos/>
              <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/acerca' component={Acerca} />
               <Route exact path='/contacto' component={Contacto} />
               <Route exact path='*' component={Error404} />
             </Switch>
          </Router>
      </div>
    )
  } */
  

/* const ConceptosBasicos = () => {
  return (
    <div>
        <h2>Concepots Basicos</h2>
        <Router>
            <Switch>
                <Route exact path='/'>
                    <h3>Home</h3>
                    <p>Bienvenidos al tema de las Rutas en React</p>
                </Route>
                <Route exact path='/acerca'>
                    <Acerca/>
                </Route>
                <Route exact path='/contacto'>
                    <h3>Contacto</h3>
                </Route>
           </Switch>
        </Router>
    </div>
  )
}
 */
export default ConceptosBasicos