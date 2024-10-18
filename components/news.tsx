import Image from 'next/image'

const newsItems = [
  {
    type: 'ANNOUNCEMENTS',
    date: 'DATE',
    title: 'News/Article Title',
    image: '/news/news1.png',
  },
  {
    type: 'NEWS RELEASE',
    date: 'DATE',
    title: 'News/Article Title',
    image: '/news/news2.png',
  },
  {
    type: 'NEWS RELEASE',
    date: 'DATE',
    title: 'News/Article Title',
    image: '/news/news3.png',
  },
  {
    type: 'ANNOUNCEMENTS',
    date: 'DATE',
    title: 'News/Article Title',
    image: '/news/news4.png',
  },
]

const thumbnailItems = [
  { date: 'DATE', title: 'News/Article Title', image: '/news/news01.png' },
  { date: 'DATE', title: 'News/Article Title', image: '/news/news02.png' },
  { date: 'DATE', title: 'News/Article Title', image: '/news/news03.png' },
  { date: 'DATE', title: 'News/Article Title', image: '/news/news04.png' },
]

export default function News() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl font-bold">News and Announcements</h2>
          <button className="hidden md:block px-5 py-2 text-base font-medium text-white bg-[#001E5B] rounded-md hover:bg-[#001E5B]/90 transition-colors duration-300">
            Read More
          </button>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-[600px]">
          {/* Main news item */}
          <div className="absolute left-0 top-0 w-[45%] h-full">
            <NewsItem item={newsItems[0]} />
          </div>
          {/* Second news item */}
          <div className="absolute left-[47%] top-0 w-[29%] h-full">
            <NewsItem item={newsItems[1]} />
          </div>
          {/* Third news item */}
          <div className="absolute right-0 top-0 w-[23%] h-[48%]">
            <NewsItem item={newsItems[2]} small />
          </div>
          {/* Fourth news item */}
          <div className="absolute right-0 bottom-0 w-[23%] h-[48%]">
            <NewsItem item={newsItems[3]} small />
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {/* Main news item */}
          <div className="w-full h-[300px]">
            <NewsItem item={newsItems[0]} />
          </div>
          {/* Second and third news items */}
          <div className="flex space-x-4">
            <div className="w-1/2 h-[150px]">
              <NewsItem item={newsItems[1]} small />
            </div>
            <div className="w-1/2 h-[150px]">
              <NewsItem item={newsItems[2]} small />
            </div>
          </div>
        </div>
        
        {/* Thumbnails (desktop only) */}
        <div className="hidden md:grid grid-cols-4 gap-4 mt-6">
          {thumbnailItems.map((item, index) => (
            <ThumbnailItem key={index} item={item} />
          ))}
        </div>
        
        {/* View More button (mobile only) */}
        <div className="mt-4 md:hidden flex justify-center">
          <button className="px-6 py-2 text-sm font-medium text-white bg-[#001E5B] rounded-md hover:bg-[#001E5B]/90 transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}

function NewsItem({ item, small = false }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <Image
        src={item.image}
        alt={item.title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <span className="text-white text-sm mb-2">{item.type}</span>
        <span className="text-white text-sm mb-2">{item.date}</span>
        <h3 className={`text-white font-bold ${small ? 'text-lg' : 'text-2xl'}`}>{item.title}</h3>
      </div>
    </div>
  )
}

function ThumbnailItem({ item }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{item.date}</p>
        <h4 className="text-base font-medium leading-tight">{item.title}</h4>
      </div>
    </div>
  )
}