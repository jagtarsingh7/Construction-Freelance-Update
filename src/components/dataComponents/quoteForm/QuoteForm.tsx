import { useState } from 'react';
import ViewDetectAnimation from '../../animationComponents/viewDetectAnimation/ViewDetectAnimation';

function QuoteForm() {
  const[loading, setloading]=useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDetails, setProjectDetails] = useState('');


  const handleSubmit = (e:any) => {
    e.preventDefault();
    setloading(true)
    const url = "https://sendmessage-xnxe62iksa-uc.a.run.app"
    const data = { Name: name, Email: email, Phone: phone, ProjectDetails: projectDetails };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response
        alert(`Your message has been successfully reached to us. We will contact you.`)
        setloading(false)
      })
      .catch(error => {
        // Handle any errors
        alert( error);

      });
  }

  return (
   < section className="bg-cover bg-center ">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        
        <div className="lg:col-span-2 lg:py-12">
          <ViewDetectAnimation direction={"Y"} level={100} speed={700}  styles={''} to={0} repeat={false}>
            <p className="max-w-xl text-lg font-bold  bg-white bg-opacity-60">
              We are a full-service building construction company committed to delivering exceptional results and outstanding customer service.
            </p>
          </ViewDetectAnimation>

          <ViewDetectAnimation direction={"X"} level={-100} speed={700}  styles={''} to={0} repeat={true}>
            <div className="mt-8 font-extrabold bg-white rounded-lg bg-opacity-50">
              <p className="text-2xl ">
                +254 793 977781
              </p>

              <address className="mt-2 not-italic">
                282 Bahati, Nairobi, Kenya
              </address>
            </div>
          </ViewDetectAnimation>
        </div>

        
        {loading?(<div className='h-full '><div className=' h-full w-full  transition animate-spin duration-500 flex justify-center items-center md:text-7xl text-4xl'> ⌛</div></div>):(
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                placeholder="Name"
                type="text"
                id="name"
                value={name} onChange={(e) => setName(e.target.value)} required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  value={email} onChange={(e) => setEmail(e.target.value)} required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  value={phone} onChange={(e) => setPhone(e.target.value)} required
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm border-2"
                placeholder="Message"
                rows={8}
                id="message"
                value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} required
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-yellow-300 hover:bg-slate-800 transition duration-500 hover:scale-105  px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Enquiry
              </button>
            </div>

          </form>
          </div>)
}
      
      </div>
    </div>
  </section >


    
  );
}

export default QuoteForm;
