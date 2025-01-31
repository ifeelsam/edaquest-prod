import { Clock, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const faqItems = [
  { question: "How do I start my first quest?", answer: "Log in to your account, navigate to the Quest Hub, and select 'Begin New Quest' to start your learning journey." },
  { question: "What are EdaQuest tokens used for?", answer: "EdaQuest tokens are earned by completing quests and can be used to unlock advanced courses, special events, and unique digital assets." },
  { question: "How are my achievements verified?", answer: "All achievements are recorded on the blockchain, ensuring they are tamper-proof and can be easily verified by educational institutions and employers." },
]

export default function InfoPanel() {
  return (
    <div className="w-full lg:w-2/5 glass-morphic p-6 rounded-lg">
      <h2 className="pixel-font text-2xl mb-6">Communication Channels</h2>

      <div className="mb-6">
        <h3 className="pixel-font text-lg mb-2">Quick Connect</h3>
        <div className="flex items-center mb-2">
          <Image src="/placeholder.svg?text=Discord&width=24&height=24" alt="Discord" width={24} height={24} className="mr-2" />
          <span>EdaQuest Server - Online</span>
        </div>
        <div className="flex items-center mb-2">
          <Image src="/placeholder.svg?text=Twitter&width=24&height=24" alt="Twitter" width={24} height={24} className="mr-2" />
          <span>@EdaQuest - Follow Us</span>
        </div>
        <div className="flex items-center">
          <Image src="/placeholder.svg?text=Telegram&width=24&height=24" alt="Telegram" width={24} height={24} className="mr-2" />
          <span>Join EdaQuest Community</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="pixel-font text-lg mb-2">Support Hours</h3>
        <div className="flex items-start mb-2">
          <Clock className="mr-2 mt-1 flex-shrink-0" size={18} />
          <div>
            <p>24/7 Community Support</p>
            <p>Core Team: 09:00 - 17:00 UTC</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="pixel-font text-lg mb-2">FAQ Quick Access</h3>
        {faqItems.map((item, index) => (
          <details key={index} className="mb-2 glass-morphic p-2 rounded">
            <summary className="pixel-font text-sm cursor-pointer hover:text-[#676FE8] transition-colors duration-300 flex items-center">
              <MessageCircle className="mr-2" size={16} />
              {item.question}
            </summary>
            <p className="mt-2 text-sm">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}

