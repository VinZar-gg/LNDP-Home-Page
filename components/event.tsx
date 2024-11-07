interface Event {
  date: string
  title: string
  batchNumber: string
  time: string
}

const events: Event[] = [
  { date: "01", title: "Training/Program Title", batchNumber: "Batch Number", time: "Time" },
  { date: "01", title: "Training/Program Title", batchNumber: "Batch Number", time: "Time" },
  { date: "01", title: "Training/Program Title", batchNumber: "Batch Number", time: "Time" },
  { date: "01", title: "Training/Program Title", batchNumber: "Batch Number", time: "Time" },
]

const announcements: Event[] = [
  { date: "08", title: "Community Disaster Preparedness", batchNumber: "Batch 1", time: "8:00 AM - 12:00 PM" },
  { date: "15", title: "Setting the Standards in Service Orientation", batchNumber: "Batch 4", time: "8:00 AM - 12:00 PM" },
  { date: "16", title: "Workplace Effectiveness Through Critical Thinking", batchNumber: "Batch 2", time: "8:00 AM - 12:00 PM" },
  { date: "23", title: "Learn Intermediate Microsoft Excel", batchNumber: "Batch 2", time: "8:00 AM - 5:00 PM" },
]

function PaginationButton({ children, isSelected = false, isNavigation = false, onClick }: { children: React.ReactNode, isSelected?: boolean, isNavigation?: boolean, onClick?: () => void }) {
  const baseStyles = "font-semibold transition-colors flex items-center justify-center h-8 text-sm rounded-md"
  const widthStyles = isNavigation ? "px-3" : "w-8"
  const selectedStyles = isSelected
    ? "bg-white text-[#002165]"
    : "text-white hover:bg-white/10 bg-[#002165]"

  return (
    <button className={`${baseStyles} ${widthStyles} ${selectedStyles}`} onClick={onClick}>
      {children}
    </button>
  )
}

function Pagination() {
  return (
    <div className="flex items-center space-x-2">
      <PaginationButton isNavigation={true}>
        <span className="text-3xl leading-none">￩</span>
        <span className="ml-1 text-sm">Previous</span>
      </PaginationButton>
      <PaginationButton isSelected={true}>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <span className="text-white mx-1">...</span>
      <PaginationButton>4</PaginationButton>
      <PaginationButton isNavigation={true}>
        <span className="text-sm">Next</span>
        <span className="text-3xl leading-none ml-1">￫</span>
      </PaginationButton>
    </div>
  )
}

function CustomButton({ children, variant = "default", className = "" }: { children: React.ReactNode, variant?: "default" | "outline", className?: string }) {
  const baseStyles = "font-semibold transition-colors rounded-md flex items-center justify-center px-4 py-2"
  const variantStyles = {
    default: "bg-white text-[#002165] hover:bg-gray-100",
    outline: "border border-white text-white hover:bg-[#001a4f]"
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  )
}

export default function Event() {
  return (
    <div className="w-full bg-[#002165] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Announcements Section (Desktop Only) */}
          <div className="hidden lg:block lg:w-1/2 lg:relative">
            <h2 className="text-4xl font-bold mb-4 text-center">Announcements</h2>
            <div className="bg-[#002165] text-white p-4 mb-16">
              <div className="bg-red-600 text-white text-center py-2 font-bold mb-4">
                UPCOMING TRAININGS AND PROGRAMS
              </div>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#002165] text-white flex items-center justify-center font-bold border border-white">
                      {announcement.date}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{announcement.title}</h3>
                      <p className="text-sm">{announcement.batchNumber} | {announcement.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:absolute lg:bottom-0 lg:left-0">
              <Pagination />
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className="lg:w-1/2 lg:relative">
            <h2 className="text-4xl font-bold mb-4 text-center">Upcoming Events</h2>
            <div className="space-y-4 mb-6">
              {events.map((event, index) => (
                <div key={index} className="flex items-start space-x-4 pb-4 border-b border-white">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FCD116] text-[#002165] flex flex-col items-center justify-center">
                    <div className="text-sm font-semibold">MONTH</div>
                    <div className="text-2xl font-bold">{event.date}</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-sm opacity-80">{event.batchNumber} | {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="hidden lg:block">
                <Pagination />
              </div>
              <div className="w-full lg:w-auto flex justify-center">
                <CustomButton variant="default">View More</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}