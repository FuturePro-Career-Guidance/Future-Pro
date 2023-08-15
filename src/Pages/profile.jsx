import React from 'react';
import './profile.css';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    let navigate=useNavigate();

    const home=()=>{
        navigate('/');
    
};
    return ( 
        <React.Fragment>
            <div className='mainsection1'>
                <div className='navsection d-flex w-100 justify-content-between p-2 bg-light m-1 mb-5'>
                    <div>
                        <h3>Hi {}</h3>

                    </div>

                    <div>
                        <button className='btn  m-1' onClick={home}>Home</button>
                        <button className='btn  m-1'>Log Out</button>
                    </div>


                </div>

                <div className=' w-100 m-1 p-4 mb-4 text-center'>
                    <h2>View your reveiwed resumes and mock interview feedback </h2>

                </div>

                <div className='profilesection d-flex w-100   p-1 justify-content-between'>
                    <div className='cvsubmitted d-flex w-50 bg-success p-2 m-2'>
                        <div className='cvreveiew bg-light p-4 m-2 w-100 rounded'>
                            <p>Name: Milanka Tharangana</p>
                            <p>Applied position: software engineer intern</p>
                            <p>Date: 10.08.2023</p>
                            <p>Feed back: replace photo with given guidline, capitize highlited letters. Give attention to commented areas in your uploaded pdf</p>

                        </div>
                     
                     </div>
                     <div className='mockinterview d-flex w-50 p-2 m-2 bg-warning'>
     
                     <div className='interviews bg-light p-4 m-2 w-100 rounded'>
                            <p>Name: Milanka Tharangana</p>
                            <p>Applied position: software engineer intern</p>
                            <p>Date: 10.08.2023</p>
                            <p>Feed back: overall good, give attention to areas mentioned in live environment</p>

                        </div>
                     </div>

                </div>



            </div>
        </React.Fragment>
     );
}
 
export default MyProfile;