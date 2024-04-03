import React from 'react'

const Home = (props) => {
  const {Color,handle}=props;
 

  return (
    <div  className='container'>
      <div className="row text-center ">
        <div className=" offset-3 col-6 d-flex mt-5 ">
        <h3 className='text-danger fw-bold fst-italic  mx-3'>Generate Random Color :</h3>
      <button className='btn btn-primary fw-bold fst-italic' onClick={()=>handle()}>Color</button>
        </div>
    
     {Color.map((Color)=>{return    <div className="offset-3 col-6 mt-4 p-3  text-light  fst-italic rounded" key={Color} style={{backgroundColor:`${Color}`}}>{Color}</div>})}
      </div>
    
    </div>
  )
}

export default Home
