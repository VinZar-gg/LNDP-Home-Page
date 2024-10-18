import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: '/footer/facebook.svg', url: '#' },
    { name: 'Twitter', icon: '/footer/twitter.svg', url: '#' },
    { name: 'Instagram', icon: '/footer/instagram.svg', url: '#' },
    { name: 'LinkedIn', icon: '/footer/linkedin.svg', url: '#' },
  ]

  return (
    <>
      <div className="bg-white py-4 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Image src="/footer/bubble.svg" alt="" width={24} height={24} className="mr-2" />
          <span className="mr-4">Help us improve! Was this page helpful?</span>
          <button
            className="bg-[#001E5B] text-white rounded text-sm font-medium w-[60px] h-[26px] flex items-center justify-center mr-2"
            aria-label="Yes, this page was helpful"
          >
            Yes
          </button>
          <button
            className="bg-[#001E5B] text-white rounded text-sm font-medium w-[60px] h-[26px] flex items-center justify-center"
            aria-label="No, this page was not helpful"
          >
            No
          </button>
        </div>
      </div>
      <footer className="bg-[#001E5B] text-white py-16 md:py-16">
        <div className="container mx-auto px-4">
          <div className="md:grid md:grid-cols-3 md:gap-[95px] md:items-start">
            {/* Mobile view */}
            <div className="md:hidden flex flex-col font-roboto pl-4">
              <div className="flex justify-between mb-6 relative">
                <div className="pr-16">
                  <h2 className="text-xl font-medium mb-4">Contact Us</h2>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <Image src="/footer/gps.svg" alt="" width={20} height={20} className="mr-2" />
                      <span className="font-medium text-sm">
                        Elliptical Road, Brgy. Central, Diliman, Quezon City
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image src="/footer/mail.svg" alt="" width={20} height={20} className="mr-2" />
                      <span className="font-medium text-sm">
                        HRMD@quezoncity.gov.ph<br />SHRU@quezoncity.gov.ph
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image src="/footer/phone.svg" alt="" width={20} height={20} className="mr-2" />
                      <span className="font-medium text-sm">
                        89884242 loc. 8504
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <Link key={link.name} href={link.url} aria-label={link.name}>
                      <Image 
                        src={link.icon} 
                        alt={link.name} 
                        width={24} 
                        height={24} 
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/logo.svg" alt="Quezon City Logo" width={80} height={80} className="mb-2" />
                <p className="text-sm font-medium text-center">
                  Quezon City Government Human Resource<br />
                  © 2022 Quezon City Human Resource
                </p>
              </div>
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex md:flex-col md:items-start">
              <div className="flex items-center mb-4">
                <Image src="/logo.svg" alt="Quezon City Logo" width={120} height={120} className="mr-4" />
                <div>
                  <h2 className="text-3xl font-medium leading-tight">Quezon City Government</h2>
                  <h3 className="text-3xl font-medium leading-tight">Human Resource</h3>
                </div>
              </div>
              <p className="mt-4 font-medium text-lg ml-[30px]">© 2022 Quezon City Human Resource</p>
            </div>
            
            <div className="hidden md:flex md:flex-col md:items-start">
              <h3 className="text-3xl mb-4">
                Discover and advance your skills in the{' '}
                <span className="font-medium">Learning and Development.</span>
              </h3>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <Link key={link.name} href={link.url} aria-label={link.name}>
                    <Image 
                      src={link.icon} 
                      alt={link.name} 
                      width={32} 
                      height={32} 
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex md:flex-col md:items-start md:space-y-4">
              <div className="flex items-center">
                <Image src="/footer/gps.svg" alt="" width={24} height={24} className="mr-2" />
                <span className="font-medium text-lg">
                  Elliptical Road, Brgy. Central, Diliman, Quezon City
                </span>
              </div>
              <div className="flex items-center">
                <Image src="/footer/mail.svg" alt="" width={24} height={24} className="mr-2" />
                <span className="font-medium text-lg">
                  HRMD@quezoncity.gov.ph<br />SHRU@quezoncity.gov.ph
                </span>
              </div>
              <div className="flex items-center">
                <Image src="/footer/phone.svg" alt="" width={24} height={24} className="mr-2" />
                <span className="font-medium text-lg">
                  89884242 loc. 8504
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}