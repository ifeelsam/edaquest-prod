export default function Footer() {
  return (
    <footer className="bg-background py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EdaQuest</h3>
            <p className="text-sm sm:text-base">Where Education Meets Adventure in the Digital Realm</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm sm:text-base">
              <li><a href="#" className="hover:text-accent">Home</a></li>
              <li><a href="#" className="hover:text-accent">Courses</a></li>
              <li><a href="#" className="hover:text-accent">About Us</a></li>
              <li><a href="#" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl">📘</a>
              <a href="https://x.com/edaquest" className="text-2xl">🐦</a>
              <a href="#" className="text-2xl">📸</a>
              <a href="#" className="text-2xl">🎮</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm sm:text-base">&copy; 2025 EdaQuest. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute inset-0 grid-background opacity-20"></div>
    </footer>
  )
}

