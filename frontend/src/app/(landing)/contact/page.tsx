import ContactForm from '@/components/contact/ContactForm'
import InfoPanel from '@/components/contact/InfoPanel'
import Particles from '@/components/Particles'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1E] to-[#1E1E3F] text-white relative overflow-hidden">
      <Particles />
      <div className="grid-background absolute inset-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <header className="mb-12">
          <div className="h-[200px] glass-morphic neon-border rounded-lg overflow-hidden mb-6">
            {/* <div className="h-full flex items-center justify-center"> */}
            {/*   <img src="/placeholder.svg?text=Communication+Console&width=800&height=200" alt="Communication Console" className="w-full h-full object-cover pixel-art" /> */}
            {/* </div> */}
          </div>
          <h1 className="pixel-font text-3xl text-center mb-2 typing-effect">
            Initialize Communication Protocol
          </h1>
          <p className="text-center text-lg">Connect with the EdaQuest Team</p>
        </header>
        <div className="flex flex-col lg:flex-row gap-8">
          <ContactForm />
          <InfoPanel />
        </div>
      </div>
    </div>
  )
}

