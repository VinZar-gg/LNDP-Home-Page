import Image from 'next/image'

const coreValues = [
  { name: 'Competence', icon: '/competence.svg' },
  { name: 'Commitment', icon: '/commitment.svg' },
  { name: 'Creativity', icon: '/creativity.svg' },
  { name: 'Cooperation', icon: '/cooperation.svg' },
  { name: 'Integrity', icon: '/integrity.svg' },
  { name: 'Caring', icon: '/caring.svg' },
  { name: 'Political Will', icon: '/political-will.svg' },
]

export default function CoreValue() {
  const chunkArray = (arr: typeof coreValues, size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

  const desktopRows = chunkArray(coreValues, 4)
  const tabletRows = chunkArray(coreValues, 3)
  const mobileRows = chunkArray(coreValues, 2)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <h2 
        className="mb-8 text-center font-black text-4xl sm:text-6xl"
        style={{
          color: '#00184A',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          fontFamily: 'Inter, sans-serif',
          WebkitTextStroke: '1px #00184A',
        }}
      >
        Core Values
      </h2>
      
      {/* Desktop layout */}
      <div className="hidden md:block">
        {desktopRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-4">
            {row.map((value, index) => (
              <CoreValueBox key={index} value={value} isDesktop={true} />
            ))}
          </div>
        ))}
      </div>

      {/* Tablet layout */}
      <div className="hidden sm:block md:hidden">
        {tabletRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-4">
            {row.map((value, index) => (
              <CoreValueBox key={index} value={value} isDesktop={false} />
            ))}
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="sm:hidden">
        {mobileRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-4">
            {row.map((value, index) => (
              <CoreValueBox key={index} value={value} isDesktop={false} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function CoreValueBox({ value, isDesktop }: { value: { name: string; icon: string }, isDesktop: boolean }) {
  return (
    <div 
      className="bg-[#BD1124] text-white p-4 flex flex-col items-center justify-center aspect-square w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] mx-2"
    >
      <Image 
        src={value.icon} 
        alt={value.name} 
        width={isDesktop ? 60 : 40} 
        height={isDesktop ? 60 : 40} 
        className="mb-2"
      />
      <span className="text-center text-xs sm:text-sm md:text-base">{value.name}</span>
    </div>
  )
}