import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

    
const posts = [
  {
    id: 1,
    title: 'Professional demeanor',
    href: '#',
    description:
    "Appreciated the professional demeanor of the driver. They were knowledgeable about the area and offered helpful suggestions.",
    date: 'Mar 16, 2024',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Amelia',
      imageUrl:
        'https://images.yen.com.gh/images/b6da582371ad4209.jpg',
    },
  },
  {
    id: 1,
    title: 'Cleanliness',
    href: '#',
    description:
    "I was impressed by the cleanliness of the vehicle. It was well-maintained and provided a comfortable ride.",
    date: 'Mar 16, 2024',
    datetime: '2020-03-16',
   
    author: {
      name: 'Sebestian',
     
      imageUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cc521c6-4b33-40a6-8654-b72a740c19d5/dfy5pfu-0da7a697-aff8-4f58-bb6c-f2dac2c6efce.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjYzUyMWM2LTRiMzMtNDBhNi04NjU0LWI3MmE3NDBjMTlkNVwvZGZ5NXBmdS0wZGE3YTY5Ny1hZmY4LTRmNTgtYmI2Yy1mMmRhYzJjNmVmY2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IIvOM0ljEm24RgAio1otzR9otKynN3eH0LhGfGQl55E',
    },
  },
  {
    id: 1,
    title: 'Prioritizing safety',
    href: '#',
    description:
    "Thank you for prioritizing safety measures. I noticed the driver followed all traffic rules and maintained a clean and sanitized environment inside the cab.",
    date: 'Apri 16, 2024',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Diana',
      
      imageUrl:
        'https://dailynews.co.tz/wp-content/uploads/2023/07/Jodie-Comer.jpg',
    },
  },
  
  // More posts...
]

const features = [
  {
    name: 'Airport Transfers',
    description:
      'Take the stress out of arrival with pre-booked, reliable transport directly from the airport to your hotel.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Sightseeing Tours:',
    description:
      'Explore Sri Lankas hidden gems and iconic landmarks at your own pace with our comfortable cabs and experienced drivers.',
    icon: LockClosedIcon,
  },
  {
    name: 'City Tours:',
    description:
      'Discover the vibrant energy and cultural richness of Sri Lankas cities with our knowledgeable drivers.',
    icon: ArrowPathIcon,
  },
  {
    name: ' Day Trips: ',
    description:
      'Plan hassle-free day trips to nearby attractions with our comfortable transportation.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Multi-day Tours:',
    description:
      'Explore Sri Lanka in style with our multi-day taxi tours tailored to your itinerary.',
    icon: ArrowPathIcon, 
  },
  {
    name: ' Shopping Sprees: ',
    description:
      'Relax and enjoy your shopping experience in Sri Lanka.Well take care of navigating the bustling streets and ensuring a safe return to your hotel with all your purchases.',
    icon: FingerPrintIcon,
  },
]

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '1 million +' },
  { id: 2, name: 'Drivers working with us', value: '1000 +' },
  { id: 3, name: 'New users annually', value: '46,000 +' },
]




export default function Home() {
  return (
   <div className="main">
        
<div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             WE'RE ALWAYS HERE FOR YOU.
            </h1>
            <p className="mt-4 text-xl text-gray-500 font-bold">
            Your TAPROBANA Journey Starts Here
           Experience Sri Lanka beyond the guidebook. TAPROBANA Cab Service whisks you away on a personalized journey, 
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://media.timeout.com/images/101900107/image.jpg"
                          alt="safari"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://worldwidetravel.tips/wp-content/uploads/2020/01/Peacock-Sri-Lanka-Open.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.dwc.gov.lk/wp-content/uploads/2021/11/sri-lanka-horton-plains-420x300.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.rentatourguideinsrilanka.com/wp-content/uploads/2018/10/Wildlife-Sri-Lanka.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://media.istockphoto.com/id/1251179843/photo/sloth-bear-melursus-ursinus-ranthambore-national-park-india-wild-sloth-bear-nature-habitat.jpg?s=612x612&w=0&k=20&c=C1THyQ17cpZjWx9ORpH9cgZfjCAAaJi0WtDrOWJdK9w="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://www.aito.com/images/holidays/311246/sri-lanka-wildlife-tour-2770414.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-yellow-300 px-8 py-3 text-center font-medium text-black hover:bg-yellow-400 font-bold"
              >
                Booking Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
       



    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Share Your Experience With Us.</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            write your best experience and your comment .
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
               
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>





    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-bold leading-7 text-gray-900">Explore Sri Lanka in Comfort with</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           TAPROBANA CAB SERVICE
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Reliable and Affordable Taxi Services for Tourists.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    



    
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
 
    </div>

             
  
   </div>

    
  )
}