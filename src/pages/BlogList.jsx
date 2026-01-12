import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import PageBanner from '../components/PageBanner';

// Import blog posts from BlogDetail
import { blogPosts } from './BlogDetail';

const BlogList = () => {
  return (
    <div className="bg-white">
      <PageBanner 
        title="Our Blog"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '#' }
        ]}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Health & Wellness Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay informed with our latest articles on women's health, wellness tips, and medical insights.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-amber-400 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog posts with consistent heights */}
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-xl border-2 border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
              <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                <div className="relative h-60 overflow-hidden flex-shrink-0">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 text-xs font-medium px-2.5 py-1 rounded-full text-pink-700">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col border-t-2 border-gray-100">
                  <div className="text-xs text-slate-500 mb-2">
                  {post.date}
                </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 min-h-[3.5rem] flex items-start">
                    {post.title}
                  </h2>
                  <div className="flex-1">
                    <p className="text-slate-600 line-clamp-3 h-[4.5rem] overflow-hidden">
                      {post.content[0].length > 150 ? `${post.content[0].substring(0, 150)}...` : post.content[0]}
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <div className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center group">
                      Read More
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
