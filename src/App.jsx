import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { MainLayout } from "./layouts/MainLayout"
import { News } from "./pages/News"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <Home />
            </MainLayout>
          } />
          <Route path="/berita/:category" element={
            <MainLayout>
              <News />
            </MainLayout>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
