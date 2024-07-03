// import { Modal, Button } from 'flowbite-react';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
// import { Link } from 'react-router-dom';

// const MyPosts = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [userPosts, setUserPosts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [postIdToDelete, setPostIdToDelete] = useState('');

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const endpoint = `/api/post/getposts?userId=${currentUser._id}`;
//         const res = await fetch(endpoint);
//         if (res.ok) {
//           const data = await res.json();
//           setUserPosts(data.posts);
//         } else {
//           throw new Error('Failed to fetch user posts');
//         }
//       } catch (error) {
//         console.error('Error fetching user posts:', error.message);
//       }
//     };

//     fetchUserPosts();
//   }, [currentUser._id]);

//   const handleDeletePost = async () => {
//     setShowModal(false);
//     try {
//       const res = await fetch(
//         `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
//         {
//           method: 'DELETE',
//         }
//       );
//       if (res.ok) {
//         setUserPosts((prevPosts) =>
//           prevPosts.filter((post) => post._id !== postIdToDelete)
//         );
//       } else {
//         const data = await res.json();
//         throw new Error(data.message || 'Failed to delete post');
//       }
//     } catch (error) {
//       console.error('Error deleting post:', error.message);
//     }
//   };

//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
//       {userPosts.length > 0 ? (
//         userPosts.map((post) => (
//           <div key={post._id} className='border border-gray-200 rounded-lg overflow-hidden'>
//             <Link to={`/post/${post.slug}`}>
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className='w-full h-48 object-cover'
//               />
//             </Link>
//             <div className='p-4'>
//               <Link
//                 to={`/post/${post.slug}`}
//                 className='block text-xl font-semibold text-white-500 hover:text-teal-600 mb-2'
//               >
//                 {post.title}
//               </Link>
//               <p className='text-gray-600 mb-4'>{post.category}</p>
//               <div className='flex justify-between items-center'>
//                 <Link
//                   to={`/update-post/${post._id}`}
//                   className='text-teal-500 hover:underline'
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => {
//                     setShowModal(true);
//                     setPostIdToDelete(post._id);
//                   }}
//                   className='text-red-500 hover:underline cursor-pointer'
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         // <div className='flex items-center justify-center min-h-screen'>
//         <p className='text-gray-600 text-center'>You have no posts yet!</p>
//       // </div>
//       )}

//       <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         popup
//         size='md'
//       >
//         <Modal.Header />
//         <Modal.Body>
//           <div className='text-center'>
//             <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
//             <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
//               Are you sure you want to delete this post?
//             </h3>
//             <div className='flex justify-center gap-4'>
//               <Button color='failure' onClick={handleDeletePost}>
//                 Yes, I'm sure
//               </Button>
//               <Button color='gray' onClick={() => setShowModal(false)}>
//                 No, cancel
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default MyPosts;


// import { Modal, Button } from 'flowbite-react';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const MyPosts = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [userPosts, setUserPosts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [postIdToDelete, setPostIdToDelete] = useState('');
//   const [categoryData, setCategoryData] = useState({ labels: [], data: [] });

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const endpoint = `/api/post/getposts?userId=${currentUser._id}`;
//         const res = await fetch(endpoint);
//         if (res.ok) {
//           const data = await res.json();
//           setUserPosts(data.posts);
//           const categories = {};
//           data.posts.forEach(post => {
//             categories[post.category] = (categories[post.category] || 0) + 1;
//           });
//           setCategoryData({
//             labels: Object.keys(categories),
//             data: Object.values(categories)
//           });
//         } else {
//           throw new Error('Failed to fetch user posts');
//         }
//       } catch (error) {
//         console.error('Error fetching user posts:', error.message);
//       }
//     };

//     fetchUserPosts();
//   }, [currentUser._id]);

//   const handleDeletePost = async () => {
//     setShowModal(false);
//     try {
//       const res = await fetch(
//         `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
//         {
//           method: 'DELETE',
//         }
//       );
//       if (res.ok) {
//         setUserPosts((prevPosts) =>
//           prevPosts.filter((post) => post._id !== postIdToDelete)
//         );
//       } else {
//         const data = await res.json();
//         throw new Error(data.message || 'Failed to delete post');
//       }
//     } catch (error) {
//       console.error('Error deleting post:', error.message);
//     }
//   };

//   return (
//     <div className='p-4'>
//       <div className='flex justify-between items-center mb-4'>
//         <Button color='teal'>
//           <Link to='/create-post' className='text-white'>
//             Create Post
//           </Link>
//         </Button>
//       </div>
//       <div className='mb-4'>
//         <p className='text-lg text-gray-600'>Total Posts: {userPosts.length}</p>
//       </div>
//       <div className='mb-4'>
//         <Pie
//           data={{
//             labels: categoryData.labels,
//             datasets: [
//               {
//                 label: '# of Posts',
//                 data: categoryData.data,
//                 backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)',
//                 ],
//                 borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)',
//                 ],
//                 borderWidth: 1,
//               },
//             ],
//           }}
//         />
//       </div>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//         {userPosts.length > 0 ? (
//           userPosts.map((post) => (
//             <div key={post._id} className='border border-gray-200 rounded-lg overflow-hidden'>
//               <Link to={`/post/${post.slug}`}>
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className='w-full h-48 object-cover'
//                 />
//               </Link>
//               <div className='p-4'>
//                 <Link
//                   to={`/post/${post.slug}`}
//                   className='block text-xl font-semibold text-gray-700 hover:text-teal-600 mb-2'
//                 >
//                   {post.title}
//                 </Link>
//                 <p className='text-gray-600 mb-4'>{post.category}</p>
//                 <div className='flex justify-between items-center'>
//                   <Link
//                     to={`/update-post/${post._id}`}
//                     className='text-teal-500 hover:underline'
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => {
//                       setShowModal(true);
//                       setPostIdToDelete(post._id);
//                     }}
//                     className='text-red-500 hover:underline cursor-pointer'
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className='text-gray-600 text-center col-span-full'>You have no posts yet!</p>
//         )}
//       </div>

//       <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         popup
//         size='md'
//       >
//         <Modal.Header />
//         <Modal.Body>
//           <div className='text-center'>
//             <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
//             <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
//               Are you sure you want to delete this post?
//             </h3>
//             <div className='flex justify-center gap-4'>
//               <Button color='failure' onClick={handleDeletePost}>
//                 Yes, I'm sure
//               </Button>
//               <Button color='gray' onClick={() => setShowModal(false)}>
//                 No, cancel
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default MyPosts;

// import React, { useEffect, useState } from 'react';
// import { Modal, Button } from 'flowbite-react';
// import { useSelector } from 'react-redux';
// import { HiOutlineExclamationCircle, HiPlus, HiDocumentText, HiChartPie } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// const MyPosts = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const [userPosts, setUserPosts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [postIdToDelete, setPostIdToDelete] = useState('');
//   const [categoryData, setCategoryData] = useState([]);

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const endpoint = `/api/post/getposts?userId=${currentUser._id}`;
//         const res = await fetch(endpoint);
//         if (res.ok) {
//           const data = await res.json();
//           setUserPosts(data.posts);
//           processCategories(data.posts);
//         } else {
//           throw new Error('Failed to fetch user posts');
//         }
//       } catch (error) {
//         console.error('Error fetching user posts:', error.message);
//       }
//     };

//     fetchUserPosts();
//   }, [currentUser._id]);

//   const processCategories = (posts) => {
//     const categories = posts.reduce((acc, post) => {
//       acc[post.category] = (acc[post.category] || 0) + 1;
//       return acc;
//     }, {});

//     const data = Object.entries(categories).map(([name, value]) => ({ name, value }));
//     setCategoryData(data);
//   };

//   const handleDeletePost = async () => {
//     setShowModal(false);
//     try {
//       const res = await fetch(
//         `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
//         {
//           method: 'DELETE',
//         }
//       );
//       if (res.ok) {
//         setUserPosts((prevPosts) =>
//           prevPosts.filter((post) => post._id !== postIdToDelete)
//         );
//         processCategories(userPosts.filter((post) => post._id !== postIdToDelete));
//       } else {
//         const data = await res.json();
//         throw new Error(data.message || 'Failed to delete post');
//       }
//     } catch (error) {
//       console.error('Error deleting post:', error.message);
//     }
//   };

//   const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Posts</h1>
//         <Link to="/create-post">
//           <Button gradientDuoTone="purpleToBlue" className="flex items-center gap-2">
//             <HiPlus className="h-5 w-5" />
//             Create Post
//           </Button>
//         </Link>
//       </div>

//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//           <div className="mb-4 md:mb-0">
//             <div className="flex items-center gap-3 mb-2">
//               <HiDocumentText className="h-6 w-6 text-blue-500" />
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Total Posts</h2>
//             </div>
//             <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{userPosts.length}</p>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-2/5">
//             <div className="flex items-center gap-3 mb-2">
//               <HiChartPie className="h-6 w-6 text-green-500" />
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Categories</h2>
//             </div>
//             <div className="h-40">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={categoryData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={25}
//                     outerRadius={40}
//                     fill="#8884d8"
//                     dataKey="value"
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                     labelLine={false}
//                   >
//                     {categoryData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {userPosts.length > 0 ? (
//           userPosts.map((post) => (
//             <div key={post._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
//               <Link to={`/post/${post.slug}`}>
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-48 object-cover"
//                 />
//               </Link>
//               <div className="p-4">
//                 <Link
//                   to={`/post/${post.slug}`}
//                   className="block text-xl font-semibold text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 mb-2"
//                 >
//                   {post.title}
//                 </Link>
//                 <p className="text-gray-600 dark:text-gray-400 mb-4">{post.category}</p>
//                 <div className="flex justify-between items-center">
//                   <Link
//                     to={`/update-post/${post._id}`}
//                     className="text-teal-500 hover:underline"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => {
//                       setShowModal(true);
//                       setPostIdToDelete(post._id);
//                     }}
//                     className="text-red-500 hover:underline cursor-pointer"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600 dark:text-gray-400 text-center col-span-full">You have no posts yet!</p>
//         )}
//       </div>

//       <Modal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         popup
//         size="md"
//       >
//         <Modal.Header />
//         <Modal.Body>
//           <div className="text-center">
//             <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
//             <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
//               Are you sure you want to delete this post?
//             </h3>
//             <div className="flex justify-center gap-4">
//               <Button color="failure" onClick={handleDeletePost}>
//                 Yes, I'm sure
//               </Button>
//               <Button color="gray" onClick={() => setShowModal(false)}>
//                 No, cancel
//               </Button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default MyPosts;
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { HiOutlineExclamationCircle, HiPlus, HiDocumentText, HiChartPie } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const MyPosts = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const endpoint = `/api/post/getposts?userId=${currentUser._id}`;
        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          setUserPosts(data.posts);
          processCategories(data.posts);
        } else {
          throw new Error('Failed to fetch user posts');
        }
      } catch (error) {
        console.error('Error fetching user posts:', error.message);
      }
    };

    fetchUserPosts();
  }, [currentUser._id]);

  const processCategories = (posts) => {
    const categories = posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {});

    const data = Object.entries(categories).map(([name, value]) => ({ name, value }));
    setCategoryData(data);
  };

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      if (res.ok) {
        setUserPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postIdToDelete)
        );
        processCategories(userPosts.filter((post) => post._id !== postIdToDelete));
      } else {
        const data = await res.json();
        throw new Error(data.message || 'Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <HiDocumentText className="h-6 w-6 text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Total Posts</h2>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{userPosts.length}</p>
            <Link to="/create-post">
              <Button gradientDuoTone="purpleToBlue" className="flex items-center gap-2">
                <HiPlus className="h-5 w-5" />
                Create Post
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="flex items-center gap-3 mb-2">
              <HiChartPie className="h-6 w-6 text-green-500" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Categories</h2>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Link to={`/post/${post.slug}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <Link
                  to={`/post/${post.slug}`}
                  className="block text-xl font-semibold text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 mb-2"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.category}</p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/update-post/${post._id}`}
                    className="text-teal-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setPostIdToDelete(post._id);
                    }}
                    className="text-red-500 hover:underline cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center col-span-full">You have no posts yet!</p>
        )}
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeletePost}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyPosts;