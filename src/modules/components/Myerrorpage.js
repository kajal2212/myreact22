import React from 'react'
const err ="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg";
const w=500;

// export default function Myerrorpage() {
//   return (
//     <div>Myerrorpage</div>
//   )
// }

function Myerrorpage() {
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='error'>404</h1>
                    <h2>page not found</h2>
                    {/* onl9 method of image import */}
                   <img src={err} width={w} alt="error page"/> 
                </div>
            </div>
        </div>
    )
}
export default Myerrorpage