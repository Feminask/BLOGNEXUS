// import { Link } from 'react-router-dom';
// // import CallToAction from '../components/CallToAction';
// import { useEffect, useState } from 'react';
// import PostCard from '../components/PostCard';

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const [currentTopic, setCurrentTopic] = useState(0);

//   const topics = [
//     { title: "Tech Trends", description: "Exploring the cutting edge" },
//     { title: "Lifestyle Hacks", description: "Simplify your daily routine" },
//     { title: "Creative Writing", description: "Unlock your imagination" },
//     { title: "Health & Wellness", description: "Nurture body and mind" },
//   ];


//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await fetch('/api/post/getPosts');
//       const data = await res.json();
//       setPosts(data.posts);
//     };
//     fetchPosts();
//   }, []);
//   return (
//     <div>
//       <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
//         <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to BlogNexus</h1>
//         <p className='text-gray-500 text-xs sm:text-sm'>
//         Here you'll discover articles on education, technology, lifestyle, and entertainment. Delve into insightful perspectives, practical tips, and thought-provoking stories across a spectrum of interests.
//         </p>
//         <Link
//           to='/search'
//           className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
//         >
//           Explore all Posts
//         </Link>
//       </div>
//         {/* <CallToAction /> */}
//       {/* Animated Banner */}
//       <div className="relative h-64 mb-12 overflow-hidden rounded-lg shadow-lg  ">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-white text-center">
//             <h2 className="text-4xl font-bold mb-2">{topics[currentTopic].title}</h2>
//             <p className="text-xl">{topics[currentTopic].description}</p>
//           </div>
//         </div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-24 h-24 border-t-4 border-white rounded-full animate-spin"></div>
//         </div>
//       </div>


// <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
//   {posts && posts.length > 0 && (
//     <div className='flex flex-col gap-6'>
//       <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
//         {posts.map((post) => (
//           <PostCard key={post._id} post={post} />
//         ))}
//       </div>
//       <Link
//         to={'/search'}
//         className='text-lg text-teal-500 hover:underline text-center'
//       >
//         View all posts
//       </Link>
//     </div>
//   )}
// </div>


//     </div>
  
   
//     )}
  


import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentTopic, setCurrentTopic] = useState(0);

  const topics = [
    { title: "Tech Trends", description: "Exploring the cutting edge" },
    { title: "Lifestyle Hacks", description: "Simplify your daily routine" },
    { title: "Creative Writing", description: "Unlock your imagination" },
    { title: "Health & Wellness", description: "Nurture body and mind" },
    { title: "Education Insights", description: "Lifelong learning journey" },
    { title: "Entertainment Buzz", description: "Stay in the pop culture loop" },
    { title: "Travel Adventures", description: "Discover the world" },
    { title: "Science Wonders", description: "Unravel nature's mysteries" },
    { title: "Food & Cooking", description: "Culinary delights await" },
    { title: "Business & Finance", description: "Navigate the economic landscape" }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();

    const topicInterval = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % topics.length);
    }, 3000);

    return () => clearInterval(topicInterval);
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to BlogNexus</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll discover articles on education, technology, lifestyle, and entertainment. Delve into insightful perspectives, practical tips, and thought-provoking stories across a spectrum of interests.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          Explore all Posts
        </Link>
      </div>

      {/* Animated Banner */}
      <div className="max-w-6xl mx-auto px-3">
        <div className="relative h-64 mb-12 overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient-x"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold mb-2">{topics[currentTopic].title}</h2>
              <p className="text-xl">{topics[currentTopic].description}</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-t-4 border-white rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}