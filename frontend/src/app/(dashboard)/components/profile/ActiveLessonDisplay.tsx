import Image from 'next/image'

export default function ActiveLessonDisplay() {
  return (
    <div className="glass-morphic neon-border p-6 mb-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <h2 className="pixel-font text-xl mb-4">Functions & Modifiers</h2>
      <div className="mb-4 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full w-1/2 bg-primary flowing-gradient"></div>
      </div>
      <div className="bg-gray-800 p-4 rounded mb-4">
        <pre className="text-green-400 text-sm">
          <code>{`function transfer(address recipient, uint256 amount) public {
  require(balanceOf[msg.sender] >= amount, "Insufficient balance");
  balanceOf[msg.sender] -= amount;
  balanceOf[recipient] += amount;
}`}</code>
        </pre>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
          Continue Learning
        </button>
        <div className="flex items-center">
          <Image src="/placeholder.svg?text=hourglass&width=16&height=16" alt="Time" width={16} height={16} className="pixel-art mr-2" />
          <span className="text-sm">1h remaining</span>
        </div>
      </div>
    </div>
  )
}

