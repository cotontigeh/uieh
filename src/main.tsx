import { scan } from 'react-scan' // must be imported before React and React DOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './index.css'
import { ButtonsView } from './pages/ButtonsView.tsx'
import AppLayout from './layouts/AppLayout.tsx'
import { BadgesView } from './pages/BadgesView.tsx'
import { TabsView } from './pages/TabsView.tsx'
import { NavView } from './pages/NavView.tsx'
import { HomeView } from './pages/HomeView.tsx'
import { SidebarView } from './pages/SidebarView.tsx'
import { InputsView } from './pages/InputsView.tsx'
import { TextareaView } from './pages/TextareaView.tsx'

scan({ enabled: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/inputs" element={<InputsView />} />
          <Route path="/textarea" element={<TextareaView />} />
          <Route path="/buttons" element={<ButtonsView />} />
          <Route path="/badges" element={<BadgesView />} />
          <Route path="/tabs" element={<TabsView />} />
          <Route path="/nav" element={<NavView />} />
          <Route path="/sidebar" element={<SidebarView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
