import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Statistics from './components/Statistics';
import Trivia from './components/Trivia';
import TermsAndConditions from './components/TermsAndConditions';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/trivia" component={Trivia} />
        <Route path="/terms" component={TermsAndConditions} />
      </Routes>
    </Router>
  );
}

export default App;
