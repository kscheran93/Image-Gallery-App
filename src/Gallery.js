import React from 'react'
<h1>Gallery component</h1>
const Gallery = ({data}) => {
    return (
        <div>
            <h1>Gallery component</h1>
            <div className='row'>
            {
                data.map((image)=>
                <div key={image.id}>
                 <div className='col-md-4'>
                <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} height='200' width='250' />
                 </div>
                </div>)
            }
            </div>
        </div>
    )
}

export default Gallery

