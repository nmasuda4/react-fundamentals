var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Popular = require('./Popular');

class App extends React.Component {
   render() {
      return (
         <Router>
            <div className='container'>
               <Nav />
               <Route path='/popular' component={Popular} />
            </div>
         </Router>

      )
   }
}

// App.propTypes = {
//    name: PropTypes.string.isRequired
// }

module.exports = App;
