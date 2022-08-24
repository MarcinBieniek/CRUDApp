import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// components
import Home from "./components/pages/Home";
import SinglePost from "./components/pages/SinglePost";
import AddPostForm from './components/features/AddPostForm';
import EditPostForm from './components/features/EditPostForm';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';


const App = () => {
  return (
    
    <main>
        <Container>
          <Header /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<SinglePost />} />
            <Route path="/post/add" element={<AddPostForm />} />
            <Route path="/post/edit/:id" element={<EditPostForm />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Container>
    </main>

  )
}

export default App;



