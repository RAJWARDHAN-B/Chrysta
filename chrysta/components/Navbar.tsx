import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="mx-auto w-full max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="flex items-center justify-center size-9 rounded-lg text-white">
          <Image 
            src="/chrystalogobg.png" 
            alt="Chrysta Logo" 
            width={36} 
            height={36} 
            className="rounded-lg object-contain"
          />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Chrysta</h2>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#features">Features</Link>
        <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Templates</Link>
        <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Pricing</Link>
        <Link className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">About</Link>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-300 px-4 py-2 hover:bg-primary/5 rounded-lg transition-all">Log in</button>
        <button className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:brightness-110 shadow-sm transition-all active:scale-95">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
