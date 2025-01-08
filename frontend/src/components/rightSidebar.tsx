import Image from 'next/image'

const leaderboard = [
  { name: 'CryptoMaster', level: 30, xp: 5000 },
  { name: 'BlockchainGuru', level: 28, xp: 4800 },
  { name: 'SmartContractWiz', level: 27, xp: 4600 },
  { name: 'TokenTrader', level: 26, xp: 4400 },
  { name: 'Web3Ninja', level: 25, xp: 4200 },
]

const events = [
  { name: 'Blockchain Hackathon', time: '2d 5h 30m' },
  { name: 'DeFi Workshop', time: '5d 12h 45m' },
  { name: 'NFT Art Contest', time: '1w 2d 8h' },
]

export default function RightSidebar() {
  return (
    <aside className="glass-morphic neon-border w-full lg:w-2/6 p-4 flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Leaderboard</h3>
        {leaderboard.map((user, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <Image src={`https://api.dicebear.com/9.x/bottts/svg?seed=avatar${index + 1}`} alt={user.name} width={30} height={30} className="pixel-art rounded-full mr-2" />
              <span>{user.name}</span>
            </div>
            <div className="text-sm">
              <span className="mr-2">Lvl {user.level}</span>
              <span className="text-accent">{user.xp} XP</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Upcoming Events</h3>
        <div className="flex flex-wrap lg:flex-col">
          {events.map((event, index) => (
            <div key={index} className="mb-2 w-1/2 lg:w-full">
              <p className="font-bold">{event.name}</p>
              <p className="text-sm text-accent">{event.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* achievement */}
      <div className="mt-auto">
        <h3 className="text-lg font-bold mb-2">Achievement Showcase</h3>
        <div className="flex justify-around">
          {[1, 2, 3].map((i) => (
            <Image key={i} src={`/achievement-${i}.png`} alt={`Achievement ${i}`} width={60} height={60} className="pixel-art" />
          ))}
        </div>
      </div>
    </aside>
  )
}

