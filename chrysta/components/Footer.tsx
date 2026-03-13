import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2.5 opacity-80">
          <div className="size-6 bg-primary rounded text-white flex items-center justify-center">
            <Image 
              src="/chrystalogobg.png" 
              alt="Chrysta Logo" 
              width={24} 
              height={24} 
              className="rounded object-contain"
            />
          </div>
          <h2 className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">Chrysta</h2>
        </div>
        <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-500">
          <Link className="hover:text-primary transition-colors" href="#">Privacy</Link>
          <Link className="hover:text-primary transition-colors" href="#">Terms</Link>
          <Link className="hover:text-primary transition-colors" href="#">Twitter</Link>
          <Link className="hover:text-primary transition-colors" href="#">Contact</Link>
        </div>
        <p className="text-sm text-slate-400">© 2024 Chrysta Editor Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
