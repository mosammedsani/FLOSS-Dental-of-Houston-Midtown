import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  Share2, 
  ThumbsUp 
} from 'lucide-react';
import { BLOG_POSTS } from '../blogData';
import { BlogPost } from '../types';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [likesCount, setLikesCount] = useState<Record<string, number>>({});
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Aesthetic Wellness', 'Orthodontics', 'Cosmetic Artistry'];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isAlreadyLiked = likedList[id];
    setLikedList({ ...likedList, [id]: !isAlreadyLiked });
    setLikesCount({
      ...likesCount,
      [id]: (likesCount[id] || 0) + (isAlreadyLiked ? -1 : 1)
    });
  };

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="py-12 bg-[#FAFAFA]" id="blog-page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="post-catalog"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Header section */}
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#54D6B7] font-extrabold bg-[#54D6B7]/10 px-3.5 py-1.5 rounded-full inline-block">
                  FLOSS Dental Journal
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 font-sans leading-tight">
                  Dental Wellness, Smile Artistry <br />
                  <span className="text-gray-500 font-bold">& Modern Clinical Insights</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Welcome to our digital journal. Here we discuss advanced biological dentistry, smile reconstruction, the physics of veneers, and daily wellness habits to keep your smile bright.
                </p>
              </div>

              {/* Categories tabs selector */}
              <div className="flex flex-wrap justify-center gap-2.5 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                      selectedCategory === cat
                        ? 'bg-[#1A1A1A] text-white shadow'
                        : 'bg-white text-gray-500 hover:text-gray-800 border border-[#EEEDE8]'
                    }`}
                    id={`blog-cat-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white border border-[#ECEBE8] hover:shadow-2xl hover:border-[#54D6B7]/30 transition-all duration-300 transform hover:-translate-y-1"
                    id={`blog-card-${post.id}`}
                  >
                    {/* Visual banner */}
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-104 duration-500 transition"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 left-4 bg-[#1A1A1A]/90 text-[#54D6B7] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Metadata & Title info block */}
                    <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-[11px] text-gray-400 font-semibold font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-gray-950 font-sans text-base leading-snug group-hover:text-[#54D6B7] transition duration-200">
                          {post.title}
                        </h3>

                        <p className="text-xs text-gray-500 font-semibold leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Footer detail of card */}
                      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                          <User className="h-3.5 w-3.5 text-gray-400" />
                          <span>{post.author}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => handleLike(post.id, e)}
                            className={`flex items-center gap-1 text-xs font-semibold ${
                              likedList[post.id] ? 'text-[#54D6B7]' : 'text-gray-400 hover:text-gray-600'
                            }`}
                            aria-label="Like post"
                          >
                            <ThumbsUp className="h-3.5 w-3.5 fill-current opacity-80" />
                            <span className="font-mono text-[11px]">
                              {likesCount[post.id] || 0}
                            </span>
                          </button>
                          
                          <span className="text-xs font-bold text-[#54D6B7] inline-flex items-center uppercase tracking-wider group-hover:translate-x-1 duration-200">
                            Read
                            <ChevronRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="post-reader"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#EEEDE8] shadow-xl"
            >
              {/* Back CTA button */}
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF9F6] border border-[#EEEDE8] text-xs font-bold text-gray-600 hover:bg-[#1A1A1A] hover:text-white transition duration-200 uppercase tracking-widest mb-4"
                id="blog-back-btn"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Articles
              </button>

              {/* Meta information tags */}
              <div className="space-y-4">
                <span className="bg-[#54D6B7]/10 text-[#54D6B7] px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
                  {selectedPost.category}
                </span>

                <h1 className="text-3xl sm:text-4xl sm:leading-tight font-extrabold text-gray-950 font-sans">
                  {selectedPost.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 pt-2 border-b border-gray-100 pb-4">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4 text-gray-400" />
                    By <strong>{selectedPost.author}</strong>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    Published: {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>

              {/* Large banner photo */}
              <div className="aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden border border-[#EEEDE8] shadow-sm">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content body with premium styles */}
              <div className="prose max-w-none text-gray-700 leading-relaxed sm:text-base space-y-6 pt-4 text-xs" id="blog-content-body">
                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={index} className="text-xl font-bold font-sans text-gray-950 pt-4 pb-2">
                        {paragraph.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('-') || paragraph.match(/^\d+\./)) {
                    const listItems = paragraph.split('\n').map(item => item.replace(/^-\s*|^\d+\.\s*/, '').trim());
                    const isNumbered = paragraph.match(/^\d+\./);
                    return isNumbered ? (
                      <ol key={index} className="list-decimal pl-6 space-y-2 font-semibold">
                        {listItems.map((item, id) => <li key={id}>{item}</li>)}
                      </ol>
                    ) : (
                      <ul key={index} className="list-disc pl-6 space-y-2 font-semibold">
                        {listItems.map((item, id) => <li key={id}>{item}</li>)}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="font-semibold leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Reader bottom bar */}
              <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={(e) => handleLike(selectedPost.id, e)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-xl hover:border-gray-300 font-bold text-xs uppercase tracking-wider transition duration-150 ${
                    likedList[selectedPost.id] ? 'bg-[#54D6B7]/5 border-[#54D6B7]/30 text-[#54D6B7]' : 'bg-[#FAF9F6] border-[#EEEDE8] text-gray-500'
                  }`}
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>
                    {likedList[selectedPost.id] ? 'Liked Article' : 'Like Article'} ({likesCount[selectedPost.id] || 0})
                  </span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => alert(`Standard sharing url copied for: ${selectedPost.title}`)}
                    className="p-2 sm:px-3 sm:py-2 bg-[#FAF9F6] border border-[#EEEDE8] rounded-xl hover:border-gray-300 transition duration-150 text-gray-500 font-bold text-xs uppercase flex items-center gap-1"
                    title="Share post link"
                  >
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
