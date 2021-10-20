import * as React from 'react';
import Swagger from 'swagger-ui-react';

import 'swagger-ui-react/swagger-ui.css';

import './styles/reset.css';
import './styles/default.css';

export const App: React.FC = () => {
  return <Swagger url="/openapi.json" />;
};
