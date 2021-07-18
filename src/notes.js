import React,{useState} from 'react'
import axios from 'axios';
import Gallery from './Gallery';



const apiKey =  '636e1481b4f3c446d26b8eb6ebfe7127';
const App = () => {
  const[search,setSearch]=useState('');
  const[data,setData]= useState([]);

  const handleChange=(e)=>{
    setSearch(e.target.value);
  }

  const changeSubmit=(e)=>{
    e.preventDefault();
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(response=>setData(response.data.photos.photo));
  }
  return (
    <div>
      <center>
      <h1>Gallery Snapchat</h1>
      <form onSubmit={changeSubmit} >
        <input size='30px' type='text'  value={search} onChange={handleChange}/> <br/> <br/> <br/>
        <input type='submit' name='search'/>
      </form>
      <br/>
      {
        data.length>=1?<Gallery data={data}/>:<h4>No Data loaded</h4>
      }
      </center>
    </div>
  )
}

export default App





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

