import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Carrito from "./componentes/Carrito/Carrito";
import Pago from "./componentes/Pago/Pago";
import PagoExitoso from "./componentes/PagoExitoso/PagoExitoso";

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Carrito />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
