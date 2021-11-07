import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';

import { Dashboard } from '../pages/dashboard/Dashboard';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Switch>
    </BrowserRouter>
  );
}
