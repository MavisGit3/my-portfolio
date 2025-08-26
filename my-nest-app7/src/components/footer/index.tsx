
"use client"

import { Github, Twitter, Linkedin, ArrowUp, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full bg-black text-white font-serif">
      <div className="container mx-auto px-4 py-8">
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-orange-400 mr-2 text-2xl"><User/> </div>
              <h2 className="text-xl  text-orange-400">Mavis Ogodu Ayikpo</h2>
            </div>
            <div className="flex space-x-4">
              <Link href="https://github.com/MavisGit3" aria-label="GitHub"  target="_blank">
                <Github className="text-white hover:text-orange-200 transition-colors" />
              </Link>
              <Link href="https://twitter.com/mavisogodu3 " aria-label="Twitter" target="_blank">
                <Twitter className="text-white hover:text-orange-200 transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/mavis-ogodu" aria-label="LinkedIn"  target="_blank">
                <Linkedin className="text-white hover:text-orange-200 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 Mavis Ogodu Ayikpo. All rights reserved.</p>
            <Button
              variant="ghost"
              size="icon"
              className="mt-4 md:mt-0 rounded-full bg-gray-900 hover:bg-gray-800"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
