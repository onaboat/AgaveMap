import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">Built by Humans. For Turbin3</p>
          </div>
          
          <nav className="flex space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
