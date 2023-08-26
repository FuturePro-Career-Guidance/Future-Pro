import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import './post.css'
import { auth, db } from '../firebase-config';

const Post = () => {
    const [postLists,setPostList]=useState([]);
    const postsCollectionRef=collection(db,"posts");

    const userDisplayName = auth.currentUser?.displayName;
    const userProfilePicture = auth.currentUser?.photoURL;

    useEffect(()=>{
        const getPosts=async()=>{
            const data=await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getPosts();
    })

    return ( 
        <React.Fragment>
        {postLists.map((post) => (
          <div key={post.id} className='postOutline d-flex flex-column w-50  p-3 m-2 rounded'>
             <div className='posthead bg-light m-1 p-1 d-flex align-items-center rounded'>
            {userProfilePicture && (
              <img src={userProfilePicture} alt='User Display' className='profile-picture' />
            )}
            <h6 className='user-name'>{userDisplayName}</h6>
          </div>
            <div className='postbody primary  m-1 p-1 bg-light rounded'>
              <p>{post.postText}</p>
            </div>
            <div className='postfooter bg-light rounded p-2 m-1 d-flex justify-content-end'>
              <button className='btn  '>Add Comment</button>
            </div>
          </div>
        ))}
      </React.Fragment>
     );
}
 
export default Post;