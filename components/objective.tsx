import Image from 'next/image'

export default function Objective() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-20 relative z-10">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8">
        <ObjectiveBox
          title="Vision"
          content="To sustain Quezon City as quality community - a progressive and peaceful urban center conducive for living, working, and doing business."
          iconSrc="/vision.svg"
        />
        <ObjectiveBox
          title="Mission"
          content="To provide quality service, making Quezon City an ideal community where people live, work and do business in a hospitable, progressive, and peaceful environment."
          iconSrc="/mission.svg"
        />
      </div>
    </div>
  )
}

function ObjectiveBox({ title, content, iconSrc }: { title: string; content: string; iconSrc: string }) {
  return (
    <div className="flex-1 bg-[#002165] text-white rounded-lg overflow-hidden w-full md:w-[470px] h-auto md:h-[360px] flex flex-col items-center justify-center text-center">
      <div className="p-6 flex flex-col items-center">
        <Image src={iconSrc} alt={title} width={50} height={50} className="mb-4" />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-sm md:text-base px-4 md:px-8">{content}</p>
      </div>
    </div>
  )
}