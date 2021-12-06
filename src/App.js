import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import BlogCard from './components/BlogCard/BlogCard';
import { getBlogs } from './services/blogs';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const blogData = await getBlogs();
      setBlogs(blogData);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      <Footer />
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  );
}

export default App;
