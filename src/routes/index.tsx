import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/teacher/list" exact component={TeacherList} />
    <Route path="/teacher/form" exact component={TeacherForm} />
  </Switch>
);

export default Routes;
