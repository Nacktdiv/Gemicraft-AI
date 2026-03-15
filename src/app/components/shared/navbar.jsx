"use client";
import {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { createClient } from "@/app/lib/supabase";
import {  Recycle, Menu ,  SquareUser, Package, ShoppingBag, Trophy,} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const supabase = createClient()
  const { profile } = useUser();

  const data = [
      { name: "Fitur", href: "#fitur" },
      { name: "Cara Kerja", href: "#cara-kerja" },
      { name: "Dampak", href: "#dampak" },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    const {error} = await supabase.auth.signOut()
    
    if (error) {
      console.error("Error logging out:", error.message);
      alert("Gagal logout");
      return;
    }

    window.location.href = '/auth'
  }

  return (
    <nav className="fixed flex sticky inset-x-0 top-0 justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-1.5 rounded-lg">
            <Recycle className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-emerald-800">Gemicraft AI</span>
        </div>
        <div className={`hidden md:flex gap-8 text-sm font-medium text-slate-600 ${isMenuOpen ? 'block' : 'hidden'}`}>
            {!profile && data.map((item, i) => (
                <a key={i} href={item.href} className="hover:text-emerald-600 hover:scale-105 transition">{item.name}</a>
            ))}
        </div>
        
        <div className="md:block hidden flex gap-3">
          {profile ? (
            <div className="flex gap-4">
            <Link href={pathname === "/" ? "/dashboard" : "/"}>
                <button className="px-5 py-2 text-sm font-semibold border border-emerald-700 text-emerald-700 hover:bg-emerald-50 hover:scale-105 rounded-full transition">
                  {pathname === "/" ? "Dashboard" : "Beranda"}
                </button>
              </Link>
              
              <button className="px-5 py-2 text-sm font-semibold border border-red-700 text-red-700 hover:bg-red-50 hover:scale-105 rounded-full transition"
                      onClick={() => handleLogout()}>
                Logout
              </button>
              
            </div>
          ) : (
            <>
              <button className="px-5 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 hover:scale-105 rounded-full transition">
                <Link href="/auth?mode=login">
                  Masuk
              </Link>
            </button>
              <button className="px-5 py-2 text-sm font-semibold bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-700 hover:scale-105 transition">
                <Link href="/auth?mode=register">
                    Daftar
                </Link>
              </button>
            </>
          )}
        </div>
        <button 
          className="md:hidden text-emerald-600 p-2 hover:scale-105 transition" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={28} />
        </button>
        {isMenuOpen && 
          (
            profile ? (
              <div className="absolute top-full right-0 w-1/2 md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl">
                  <div className="flex flex-col gap-3">
                      <Link href={pathname === "/" ? "/dashboard" : "/"}>
                        <button className="w-full py-3 text-center font-semibold border border-emerald-700 text-emerald-700 hover:bg-emerald-50 hover:scale-105 rounded-full transition">{pathname === "/" ? "Dashboard" : "Beranda"}</button>
                      </Link>
                      <button 
                        className="w-full py-3 text-center font-semibold border border-red-700 text-red-700 hover:bg-red-50 hover:scale-105 rounded-full transition"
                        onClick={() => handleLogout()}>Logout</button>
                  </div>
              </div>
            ) : (
              <div className="absolute top-full right-0 w-1/2 md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl">
                  {data.map((item, i) => (
                      <a key={i} href={item.href} className="block text-slate-600 font-medium hover:text-emerald-600 hover:scale-105 transition">
                      {item.name}
                      </a>
                  ))}
                  <hr className="border-slate-100" />
                  <div className="flex flex-col gap-3">
                      <button className="w-full py-3 text-center font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl hover:scale-105 transition">Masuk</button>
                      <button className="w-full py-3 text-center font-semibold bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 hover:scale-105 transition">Daftar</button>
                  </div>
              </div>
            )
          ) 
        }
      </nav>
  )
}

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-50">
      <Link href='/dashboard'>
        <button className={`flex flex-col items-center ${pathname === '/dashboard' ? 'text-emerald-600' : 'text-slate-400'}`}>
          <SquareUser size={24} />
          <span className="text-[10px] mt-1 font-medium">Dashboard</span>
        </button>
      </Link>
      <Link href='/project'>
        <button className={`flex flex-col items-center ${pathname === '/project' ? 'text-emerald-600' : 'text-slate-400'}`}>
          <Package size={24} />
          <span className="text-[10px] mt-1 font-medium">Project</span>
        </button>
      </Link>
      <Link href='/showcase'>
        <button className={`flex flex-col items-center ${pathname === '/showcase' ? 'text-emerald-600' : 'text-slate-400'}`}>
          <ShoppingBag size={24} />
          <span className="text-[10px] mt-1 font-medium">Showcase</span>
        </button>
      </Link>
      <Link href='/leaderboard'>
        <button className={`flex flex-col items-center ${pathname === '/leaderboard' ? 'text-emerald-600' : 'text-slate-400'}`}>
          <Trophy size={24} />
          <span className="text-[10px] mt-1 font-medium">Leaderboard</span>
        </button>
      </Link>
    </nav>
  )
}

export default { Navbar, BottomNav };
