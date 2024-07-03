// import { Footer } from 'flowbite-react'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import{BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'
// function FooterCom() {
//   return (
//     <Footer container className='border border-t-8 border-teal-500'>
// <div className='w-full max-w-7xl mx-auto'>
//     <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
//         <div className='mt-5'>
//         <Link
//   to="/"
//   className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
// >
//   <span style={{fontFamily:"Playwrite GB S, cursive"}} className="px-2 py-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg text-white ">
//     BlogNexus
//   </span>
// </Link>

//         </div>
//         <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
//             <div>
// <Link to='/about'>
//               <Footer.Title title='About'></Footer.Title>
  
// </Link>            <Footer.LinkGroup col>
//                 <Footer.Link>
//                     Mern Project


//                 </Footer.Link>
//             </Footer.LinkGroup>
//             </div>
//             <div>
//             <Footer.Title title='Follow us'></Footer.Title>
//             <Footer.LinkGroup col>
//                 <Footer.Link>
//                   GitHub


//                 </Footer.Link>
//                 <Footer.Link>
//                   Discord


//                 </Footer.Link>

//             </Footer.LinkGroup>
//             </div>

//             <div>
//             <Footer.Title title='Legal'></Footer.Title>
//             <Footer.LinkGroup col>
//                 <Footer.Link
//                 href='#'>
               
// Privacy Policy
//                 </Footer.Link>
//                 <Footer.Link>
//                  Terms & Conditions


//                 </Footer.Link>

//             </Footer.LinkGroup>
//             </div>

//         </div>
//     </div>
//     <Footer.Divider>
//     </Footer.Divider>

//         <div className='w-full sm:flex sm:items-center sm:justify-between'>
//             <Footer.Copyright href='#' by="BlogNexus" year={new Date().getFullYear()}></Footer.Copyright>
//             <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
//                 <Footer.Icon href='#' icon={BsFacebook}></Footer.Icon>
//                 <Footer.Icon href='#' icon={BsInstagram}></Footer.Icon>
//                 <Footer.Icon href='#' icon={BsTwitter}></Footer.Icon>
//                 <Footer.Icon href='#' icon={BsGithub}></Footer.Icon>
//                 <Footer.Icon href='#' icon={BsDribbble}></Footer.Icon>


//             </div>
//         </div>
//     </div>   
//      </Footer>
//   )
// }

// export default FooterCom


import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                BlogNexus
              </span>
            </Link>
            <p className="max-w-xs mt-4 text-sm text-gray-600 dark:text-gray-400">
              Empowering voices, connecting ideas. Your go-to platform for insightful blogging and community engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
<Link to='/about'>
                <Footer.Title title="About" />
  
</Link>              <Footer.LinkGroup col>
                <Footer.Link style={{textDecoration:"none"}}  href="#">BlogNexus</Footer.Link>
                <Footer.Link style={{textDecoration:"none"}} href="#">MERN Project</Footer.Link>
                <Footer.Link style={{textDecoration:"none"}} href="#">Careers</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link style={{textDecoration:"none"}} href="#">Github</Footer.Link>
                <Footer.Link style={{textDecoration:"none"}} href="#">Discord</Footer.Link>
                <Footer.Link style={{textDecoration:"none"}} href="#">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link style={{textDecoration:"none"}} href="#">Privacy Policy</Footer.Link>
                <Footer.Link style={{textDecoration:"none"}} href="#">Terms &amp; Conditions</Footer.Link>
                <Footer.Link style={{textDecoration:"none"}} href="#">Cookie Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="BlogNexus™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;