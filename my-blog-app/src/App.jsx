import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import BlogDetailPage from './pages/BlogDetailPage'
import BlogListPage from './pages/BlogListPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePagePage from './pages/HomePage.jsx'

function App() {
  return (
    <BrowserRouter>
    {/* <div className="text-5xl font-bold text-blue-500">
      Tailwind is working!
    </div> */}
        <Routes>
          <Route path="/" element={<HomePagePage />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
        </Routes>
        {/* <AddPostPage /> */}
      </BrowserRouter>
  )
}

export default App



