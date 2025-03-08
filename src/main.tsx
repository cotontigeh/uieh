import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './index.css'
import { ButtonsView } from './pages/ButtonsView.tsx'
import AppLayout from './layouts/AppLayout.tsx'
import { BadgesView } from './pages/BadgesView.tsx'
import { TabsView } from './pages/TabsView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<ButtonsView />} />
          <Route path="/buttons" element={<ButtonsView />} />
          <Route path="/badges" element={<BadgesView />} />
          <Route path="/tabs" element={<TabsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
