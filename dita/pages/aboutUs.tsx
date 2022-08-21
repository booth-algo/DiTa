import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

function aboutUs() {
  return (
    <div>
      <Header />
      
      {/* <div className='pt-10 pb-10'>Contact Us</div> */}

      <div style={{height: '800px', backgroundColor: '#999'}}>
      
      <div style={{position: 'absolute', top: '80px', left: '0'}} className="w-0 h-0 
      border-t-[800px] border-t-transparent
      border-l-[800px] border-l-blue-800
      border-b-[0px] border-b-transparent
      "></div>

      <div style={{position: 'absolute', top: '80px', left: '0'}} className="w-0 h-0 
      border-t-[0px] border-t-transparent
      border-l-[400px] border-l-blue-900
      border-b-[400px] border-b-transparent
      "></div>

      <div style={{position: 'absolute', top: '250px', left:'50px'}} className="text-white text-7xl font-extrabold">About DiTa</div>

      <div style={{position: 'absolute', top: '500px', left:'50px', width:'300px'}} className="text-white text-base">Lorem ipsum dolor sit amet. Est quae porro ea corporis perspiciatis aut voluptatibus alias et velit possimus quo suscipit fugiat id quia commodi ut aperiam? Est quidem illo eum laudantium unde id nihil natus. Non perspiciatis temporibus in ducimus corrupti ea unde amet est cumque neque quo dolorem nisi qui laborum officia ad molestias sint.</div>

      </div>

      <div style={{padding: '50px'}}>
      Ut tenetur debitis et perferendis debitis vel aperiam enim aut tempore necessitatibus in magnam quidem ab accusantium galisum. Et dolorem velit sed tempore eius aut cupiditate maiores est neque repellat tempora minima. Eum quae galisum eos porro voluptatum et repellendus maiores ut debitis iusto. Et velit dolor et praesentium nemo ut exercitationem dolores et fugit sunt.
      <br /><br />
      Aut aspernatur blanditiis 33 enim vero et praesentium quidem ea labore fugiat ut velit architecto aut voluptates numquam eum dolore molestias. Aut odit repellendus ex fugit nulla et tempore deleniti ad quia aperiam qui quasi dolorum eum delectus ipsam.
      </div>


      <Footer />
    </div>
  )
}

export default aboutUs