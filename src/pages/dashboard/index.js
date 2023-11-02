import React, { useRef } from 'react'

const Dashboard = () => {
  const titleRef = useRef()
  const descriptionRef = useRef()

  const onBlogHandler = () => {
  const title = titleRef.current.value;
  const description = descriptionRef.current.value;
  }
  return (
    <div>
      <div className='bg-white p-6 font-bold'>Dashboard</div>
       <div className='md:px-18 p-8 bg-red-100 md:mx-60 mx-8 p-12 '>
        <form onSubmit={onBlogHandler}>
       <div className="mt-2">
                    <input
                      id="firstName"
                      name="firstName"
                      ref={titleRef}
                      type="text"
                      defaultValue={'Heading'}
                      required
                      className="block sm:w-[7
                        00px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block sm:w-[7
                    00px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={"What is in your mind?"}
                />
              </div>
              <div>
                <button className='flex mt-3 md:w-[160px] w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Publish Blog</button>
              </div>
                  </form>
       </div>
    </div>
  )
}

export default Dashboard