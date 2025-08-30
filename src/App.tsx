import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
    return (
        // BrowserRouter provides client-side routing capabilities.
        // The `basename="/folium"` ensures all routes are served under the `/folium` subpath.
        <BrowserRouter basename="/folium">
            <Routes>
                {/* 
                  Route configuration:
                  - `path="*"` acts as a catch-all for any route (wildcard).
                  - Any URL under `/folium/*` will render the <Index /> component.
                  - Useful when the app has a single-page structure or when
                    Index itself handles further navigation internally.
                */}
                <Route path="*" element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
}

// Export App as the root component, typically mounted in `main.tsx` or `index.tsx`.
export default App;
