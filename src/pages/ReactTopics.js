import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Topic = ()=> {
  let {topic} = useParams();
  

  return (
    <div>
      <h4>{topic}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maxime quidem aspernatur eos, odio eveniet dolores quis id sequi enim quas molestiae fugit illo officia obcaecati! Nihil ab unde odio.2
        </p>
    </div>
  )
}


const ReactTopics = () => {
    let {path, url} = useRouteMatch();

       console.log(useRouteMatch())

      return ( 
        <div>
            <h2>Temas de React</h2>
            <ul>
              <li>
                <Link to={`${url}/jsx`}>JSX</Link>
              </li>
              <li>
                <Link to={`${url}/props`}>Props</Link>
              </li>
              <li>
                <Link to={`${url}/estado`}>Estado</Link>
              </li>
              <li>
                <Link to={`${url}/componentes`}>Componente</Link>
              </li>
            </ul>        
            <Switch>
                <Route exact path={path}>
                  <h4>Elige un tema de React</h4>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maxime quidem aspernatur eos, odio eveniet dolores quis id sequi enim quas molestiae<Link to={`${url}/componentes`}>Componente</Link> fugit illo officia obcaecati! Nihil ab unde odio.
                  </p>
                </Route>
                <Route path={`${path}/:topic`} component={Topic}/>
            </Switch>
        </div>
    );
}

export default ReactTopics