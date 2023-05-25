import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import App from './app/App';
import { registerLicense } from '@syncfusion/ej2-base';

// third party style
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './index.css';
import "react-image-gallery/styles/css/image-gallery.css";

registerLicense('Mgo+DSMBaFt+QHJqVk1mQ1BBaV1CX2BZf1N8RWBTfF1gBShNYlxTR3ZaQ1tiSX5QdU1jWn9W;Mgo+DSMBPh8sVXJ1S0R+X1pCaV5HQmFJfFBmRGNTf116d1ZWESFaRnZdQV1mSHhSdkVgWndedHJd;ORg4AjUWIQA/Gnt2VFhiQlJPcEBDWHxLflF1VWJZdV5zflZFcC0sT3RfQF5jTH9Vd0VjWnxWcHJXTg==;MjA3NTUxM0AzMjMxMmUzMjJlMzNnc3c3bWhzRkt4MExEdDluKzNmSVJVNzhjOU94SjgrelplOSs1UmgzelFjPQ==;MjA3NTUxNEAzMjMxMmUzMjJlMzNleWlleXppQjNNSG04OUQrbzIyb2taN2N2ZUREM2l3dDkwRTVhaEx5d3dVPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldXGZWfFN0RnNYf1Rwd19FY0wgOX1dQl9gSXtScERjWXxdeHVXT2g=;MjA3NTUxNkAzMjMxMmUzMjJlMzNpWG12TStDRFdUMHVKNktiS21NMzZtaGR2NHJXT01YTks4SWtvU1AvWUhBPQ==;MjA3NTUxN0AzMjMxMmUzMjJlMzNuTUdYckpXQjdsdjJMUU1aV3hrMjJBenFzTWlNS1JjNG9pT1ordk9mZG00PQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBDWHxLflF1VWJZdV5zflZFcC0sT3RfQF5jTH9Vd0VjWnxWcnRRTw==;MjA3NTUxOUAzMjMxMmUzMjJlMzNXVFZReHd4eUZGa2hxT1NlbUVCV1k5L1ZXdXIxYnI3ZC9jK3BOYWE0STBnPQ==;MjA3NTUyMEAzMjMxMmUzMjJlMzNlSnY2NFdKU0xEb3U1Q056dDI4SGJBMTk3N25Fa3hrVnh4NUgzNUdPTkVnPQ==;MjA3NTUyMUAzMjMxMmUzMjJlMzNpWG12TStDRFdUMHVKNktiS21NMzZtaGR2NHJXT01YTks4SWtvU1AvWUhBPQ==')

const root = createRoot(document.getElementById('root'));

root.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StyledEngineProvider>
);

  