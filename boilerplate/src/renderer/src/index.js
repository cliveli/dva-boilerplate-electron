/* eslint-disable */
import dva from 'dva';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App2 from './components/App/App';

// 1. Initialize
const app = dva();

// 2. Model
// Remove the comment and define your model.
//app.model({});
const HomePage = () => <div>Hello HomePage.</div>;
const Page1 = () => <div>Hello Page1.</div>;
const Page2 = () => <div>Hello Page2.</div>;
// 3. Router
app.router(({ history }) =>
  <Router history={history}>
  <App2>
  <Route exact path="/" component={HomePage} />  
  <Route path="/xyz" component={Page1} />
  <Route path="/alone2" component={Page2}/>
  </App2>

  </Router>
);

// 4. Start
const App = app.start();
ReactDOM.render(<LocaleProvider locale={enUS}><App /></LocaleProvider>, document.getElementById('root'));
