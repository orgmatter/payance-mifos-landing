import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { pageRoutes as PAGE_ROUTES } from './page-routes';
import Header from './components/header';
import Footer from './components/footer';
import "./styles/app.scss";

function App() {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [componentType, setComponentType] = useState(null);
  const [dialogType, setDialogType] = useState(null);

  const handleDialogOpen = (componentType, dialogType) => {

    setDialogOpen(dialogOpen => !dialogOpen);
    setComponentType(componentType);
    setDialogType(dialogType);
  }

  const handleDialogClose = (e) => {

    setDialogOpen(false);
  }

  const dialogComponentProps = {
    handleDialogOpen,
    handleDialogClose,
    dialogOpen,
    componentType,
    dialogType
  }

  return (
    <Router>
      <div className="app-cover">
        <div className="app-cover-flex">
          <div className="app-cover-item">
            <div className="app-header-cover">
              <Header dialogComponentProps={dialogComponentProps} />
            </div>
            <div className="app-content-cover">
              <div className="app-content-cover-flex">
                <div className="app-content-cover-item">
                  <Routes>
                    {
                      PAGE_ROUTES.map((pageRoute, index) => (
                        <Route path={pageRoute.routeUrl} element={<pageRoute.component {...pageRoute} dialogComponentProps={dialogComponentProps} />} key={index} />
                      ))
                    }
                  </Routes>
                </div>
              </div>
            </div>
            <div className="app-footer-cover">
              <Footer dialogComponentProps={dialogComponentProps} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
