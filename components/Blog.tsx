import BlogCarousel from "../components/blogCarousel";
import { blogs } from "../data/blog";

// In your page component:
const Blog = ({ home = false }) => <BlogCarousel home={home} />;

export default Blog;
