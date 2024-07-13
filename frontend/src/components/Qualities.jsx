import React from 'react'
import {data} from '../restApi.json'
const Qualities = () => {
  return (
    <>
        <section className='qualities' id='qualities'>
          <div className="container">
            {
              data[0].ourQualities.map(element=>{
                return(
                  <div className='card' key={element.id}>
                      <img src={element.image} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      {/* {element.description} */}
                      <p className='description'>Our restaurant emphasizes freshness, quality ingredients, and authentic flavors. Each dish is crafted with care, balancing taste and presentation. We prioritize innovation, healthiness, and sustainability, ensuring a delightful dining experience that nourishes both body and soul. Enjoy food that's prepared with passion and dedication.</p>
                  </div>
                )
              })
            }
          </div>
        </section>

    </>
  )
}

export default Qualities;