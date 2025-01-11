import Link from "next/link";

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
              <li><Link href="https://edaquest.sanskarsharma.me/" className="hover:text-accent">Home</Link></li>
              <li><Link href="https://edaquest.sanskarsharma.me/courses" className="hover:text-accent">Courses</Link></li>
              <li><Link href="https://edaquest.sanskarsharma.me/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="https://edaquest.sanskarsharma.me/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://edaquest.sanskarsharma.me/" className="text-2xl">📘</Link>
              <Link href="https://x.com/edaquest" className="text-2xl">🐦</Link>
              <Link href="https://instagram.com/edaquest" className="text-2xl">📸</Link>
              <Link href="https://steam.com" className="text-2xl">🎮</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="font-normal text-sm sm:text-base">&copy; 2025 EdaQuest. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute inset-0 grid-background opacity-20"></div>
    </footer>
  )
}

