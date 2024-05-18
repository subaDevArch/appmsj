import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TasksContext';
import { AlumnoProvider } from './context/AlumnoContext';

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <AuthProvider>
      <TaskProvider>
        <AlumnoProvider>
          <StaticRouter location={url} context={context}>
            <App />
          </StaticRouter>
        </AlumnoProvider>
      </TaskProvider>
    </AuthProvider>
  );
}
