import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { registerLicense } from '@syncfusion/ej2-base';

// third party style
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './index.css';
import "react-image-gallery/styles/css/image-gallery.css";

registerLicense('MTkwMDI1NEAzMjMxMmUzMTJlMzMzNUVGYVIwNjI5R2F0TzNCWmZpbzNENkg3M1JwbzFWdGxzVW13Q2c1a3h5RXM9;Mgo+DSMBaFt+QHFqVkNrWU5NaV1CX2BZeVlzR2lZf04QCV5EYF5SRHNfQFxqTHxTdkFkW30=;Mgo+DSMBMAY9C3t2VFhhQlJBfVpdVHxLflF1VWRTelx6dFVWACFaRnZdQV1mSXxSf0BhWX9aeHNX;Mgo+DSMBPh8sVXJ1S0d+X1RPc0BLQmFJfFBmQmlcfVRwdEUmHVdTRHRcQlhjS39ac0djWXtXeXY=;MTkwMDI1OEAzMjMxMmUzMTJlMzMzNVBkb3FVN0VqNWh6Z21Pb0k0cXZPckhiUmNBVEZCN0Q4QkVCYUQ1enlCdkE9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RHQmpWfFN0RnNedVtyflVGcDwsT3RfQF5jTH5Rd0xmW39edXdTRA==;ORg4AjUWIQA/Gnt2VFhhQlJBfVpdVHxLflF1VWRTelx6dFVWACFaRnZdQV1mSXxSf0BhWX9bdXRQ;MTkwMDI2MUAzMjMxMmUzMTJlMzMzNUg5Mi9aeThCaDJTaEFnNkkzUkh2MXA0T3c1dHpyQ1NQN2JsOEpMaFBsYVk9;MTkwMDI2MkAzMjMxMmUzMTJlMzMzNUl1M1lVWXhPbDdjRm1zUGVIUW53bGhML0JielBNVXAwMVZFOTNhWituUW89;MTkwMDI2M0AzMjMxMmUzMTJlMzMzNWtqT3lvclJ6QXVpQTlQdTZjNTMzTkpNQVFSZlQ5UVRmWEFKVUYxcE95VG89;MTkwMDI2NEAzMjMxMmUzMTJlMzMzNVdhTFc1cXhpdnREZzlPaUlrNjZjc0hOcjhqbW5WTGRBOGdwMndxb05YRWM9;MTkwMDI2NUAzMjMxMmUzMTJlMzMzNUVGYVIwNjI5R2F0TzNCWmZpbzNENkg3M1JwbzFWdGxzVW13Q2c1a3h5RXM9')

const root = createRoot(document.getElementById('root'));

root.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyledEngineProvider>
);

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
