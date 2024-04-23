import React from 'react'
import notFound from '../../assets/image/nxt-trendz-authentication-lg-not-found-output.png'

const Notfound = () => {
  return (
    <>
        <div className=' container-fluid mt-5 pt-5'>
            <div className='row'>
                <div className='col-12'>
                    <img src={notFound} alt="not-found" className=' w-100 h-100 vh-100 fixed-top'    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Notfound