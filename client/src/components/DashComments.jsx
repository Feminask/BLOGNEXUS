
// import { Modal, Table, Button } from 'flowbite-react';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
// import { FaCheck, FaTimes } from 'react-icons/fa';

// export default function DashComments() {
//   const { currentUser } = useSelector((state) => state.user);
//   const [comments, setComments] = useState([]);
//   const [showMore, setShowMore] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [commentIdToDelete, setCommentIdToDelete] = useState('');

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const res = await fetch(`/api/comment/getusercomments`);
//         const data = await res.json();
//         if (res.ok) {
//           setComments(data.comments);
//           if (data.comments.length < 9) {
//             setShowMore(false);
//           }
//         }
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchComments();
//   }, [currentUser._id]);

//   const handleShowMore = async () => {
//     const startIndex = comments.length;
//     try {
//       const res = await fetch(
//         `/api/comment/getusercomments?startIndex=${startIndex}`
//       );
//       const data = await res.json();
//       if (res.ok) {
//         setComments((prev) => [...prev, ...data.comments]);
//         if (data.comments.length < 9) {
//           setShowMore(false);
//         }
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleDeleteComment = async () => {
//     setShowModal(false);
//     try {
//       const res = await fetch(
//         `/api/comment/deleteComment/${commentIdToDelete}`,
//         {
//           method: 'DELETE',
//         }
//       );
//       const data = await res.json();
//       if (res.ok) {
//         setComments((prev) =>
//           prev.filter((comment) => comment._id !== commentIdToDelete)
//         );
//         setShowModal(false);
//       } else {
//         console.log(data.message);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
//       {comments.length > 0 ? (
//         <>
//           <Table hoverable className='shadow-md'>
//             <Table.Head>
//               <Table.HeadCell>Date updated</Table.HeadCell>
//               <Table.HeadCell>Comment content</Table.HeadCell>
//               <Table.HeadCell>Number of likes</Table.HeadCell>
//               <Table.HeadCell>PostId</Table.HeadCell>
//               <Table.HeadCell>UserId</Table.HeadCell>
//               <Table.HeadCell>Delete</Table.HeadCell>
//             </Table.Head>
//             {comments.map((comment) => (
//               <Table.Body className='divide-y' key={comment._id}>
//                 <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
//                   <Table.Cell>
//                     {new Date(comment.updatedAt).toLocaleDateString()}
//                   </Table.Cell>
//                   <Table.Cell>{comment.content}</Table.Cell>
//                   <Table.Cell>{comment.numberOfLikes}</Table.Cell>
//                   <Table.Cell>{comment.postId}</Table.Cell>
//                   <Table.Cell>{comment.userId}</Table.Cell>
//                   <Table.Cell>
//                     <span
//                       onClick={() => {
//                         setShowModal(true);
//                         setCommentIdToDelete(comment._id);
//                       }}
//                       className='font-medium text-red-500 hover:underline cursor-pointer'
//                     >
//                       Delete
//                     </span>
//                   </Table.Cell>
//                 </Table.Row>
//               </Table.Body>
//             ))}
//           </Table>
//           {showMore && (
//             <button
//               onClick={handleShowMore}
//               className='w-full text-teal-500 self-center text-sm py-7'
//             >
//               Show more
//             </button>
//           )}
//         </>
//       ) : (
//         <p>You have no comments yet!</p>
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
//               Are you sure you want to delete this comment?
//             </h3>
//             <div className='flex justify-center gap-4'>
//               <Button color='failure' onClick={handleDeleteComment}>
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
// }


import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaComment, FaCalendarAlt } from 'react-icons/fa';

export default function DashComments() {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState('');
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getusercomments`);
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
          if (data.comments.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComments();
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(
        `/api/comment/getusercomments?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, ...data.comments]);
        if (data.comments.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteComment = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/comment/deleteComment/${commentIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (res.ok) {
        setComments((prev) =>
          prev.filter((comment) => comment._id !== commentIdToDelete)
        );
        setTotalComments((prev) => prev - 1);
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='p-3 md:mx-auto'>
      <div className='mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900 rounded-lg'>
            <div>
              <h2 className='text-lg font-semibold text-blue-700 dark:text-blue-300'>Total Comments</h2>
              <p className='text-sm text-blue-600 dark:text-blue-400'>All-time engagement</p>
            </div>
            <div className='flex items-center'>
              <FaComment className='text-2xl text-blue-500 mr-2' />
              <span className='text-2xl font-bold text-blue-700 dark:text-blue-300'>{totalComments}</span>
            </div>
          </div>
          <div className='flex items-center justify-between p-3 bg-green-50 dark:bg-green-900 rounded-lg'>
            <div>
              <h2 className='text-lg font-semibold text-green-700 dark:text-green-300'>Last Month Comments</h2>
              <p className='text-sm text-green-600 dark:text-green-400'>Recent activity</p>
            </div>
            <div className='flex items-center'>
              <FaCalendarAlt className='text-2xl text-green-500 mr-2' />
              <span className='text-2xl font-bold text-green-700 dark:text-green-300'>{lastMonthComments}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='table-auto overflow-x-scroll md:mx-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
        {comments.length > 0 ? (
          <>
            <Table hoverable className='shadow-md'>
              <Table.Head>
                <Table.HeadCell>Date updated</Table.HeadCell>
                <Table.HeadCell>Comment content</Table.HeadCell>
                <Table.HeadCell>Number of likes</Table.HeadCell>
                <Table.HeadCell>PostId</Table.HeadCell>
                <Table.HeadCell>UserId</Table.HeadCell>
                <Table.HeadCell>Delete</Table.HeadCell>
              </Table.Head>
              {comments.map((comment) => (
                <Table.Body className='divide-y' key={comment._id}>
                  <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                    <Table.Cell>
                      {new Date(comment.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell>{comment.content}</Table.Cell>
                    <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                    <Table.Cell>{comment.postId}</Table.Cell>
                    <Table.Cell>{comment.userId}</Table.Cell>
                    <Table.Cell>
                      <span
                        onClick={() => {
                          setShowModal(true);
                          setCommentIdToDelete(comment._id);
                        }}
                        className='font-medium text-red-500 hover:underline cursor-pointer'
                      >
                        Delete
                      </span>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
            {showMore && (
              <button
                onClick={handleShowMore}
                className='w-full text-teal-500 self-center text-sm py-7'
              >
                Show more
              </button>
            )}
          </>
        ) : (
          <p>You have no comments yet!</p>
        )}
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteComment}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}