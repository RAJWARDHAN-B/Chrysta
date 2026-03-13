import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-wide uppercase">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        v2.0 is now live
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-slate-50 leading-[1.1] tracking-tight mb-6">
        Chrysta
      </h1>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        A real-time collaborative document editor designed for modern teams. Write, brainstorm, and publish in one fluid workspace.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto min-w-[200px] bg-primary text-white h-14 px-8 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Create Document
        </button>
        <button className="w-full sm:w-auto min-w-[200px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 h-14 px-8 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
          View Demo
        </button>
      </div>
      <div className="mt-20 relative mx-auto max-w-4xl group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden aspect-[16/10]">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMgRf1p8XIshHzVmfgihDMfcgzSA8ER1bup4AQe3X5JAe07BfvNTsazj8YlLR_Q4eJ08G1YBDznn-kSKnikElP0BD_WXKgm1qMmBhMVBcg9Vewzz23dpbpaGPdM9w18_yQP86l0MSuLDzlKgFSbfqoU3vCz3odci7_mtrI_QrTQ7Es7hBY5GoYljJZLyif0HtYC_2wbROPwm9hFi_mzwmtNNpbEN3tLQ_ZHyhsu5ioVDYMLdhefZdmRVrUdWlLhFrfhdKs0DZL5HjQ" 
            alt="Interface Preview" 
            layout="fill"
            className="w-full h-full object-cover opacity-90"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
