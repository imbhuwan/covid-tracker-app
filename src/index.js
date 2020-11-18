import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';


Sentry.init({
    dsn: "https://9d23be397fd145698354e96960b34590@o478459.ingest.sentry.io/5521031",
    release: "%REACT_APP_RELEASE_VERSION%",
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
})

ReactDOM.render(
<App />, document.getElementById('root')
);