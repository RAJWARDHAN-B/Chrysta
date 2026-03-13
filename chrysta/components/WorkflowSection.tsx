import Image from "next/image";

const WorkflowSection = () => {
  const workflows = [
    {
      title: "Shared Workspaces",
      description: "Organize projects, client docs, and internal wikis in dedicated folders with granular permissions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4wSLsacGiJ91Q2ZduZkIEAXYvZHIYfNgwUlfeoKMbZ6ha7wR_QnFfe_2j5J0EYt7Q6QMzJBqL6kwTJuydh04iLdEZ8ZACwXX2XTTANLhWIQGXnqhoP8eJdqOyrWhb6D18F-iR0WxjCH9CyVR0SHknQjn94rdmksIBW18V7ZBFKfOv23fAGNxpd8IvgrxyynUbkRIKBjiwYUE270u3GAB21mMgrFU9uGBkmwJ_u7Y4LMh3HYJ3aQz-Kc1b2KN6e4RBOA2hwk4DsZpr"
    },
    {
      title: "Version History",
      description: "Review every edit ever made. Restore previous versions with a single click and never lose work again.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_W21T19rmvPP2dFRxXeuQazuVz4kKF5xr2_wjUkVFceUMtgozx8-wYpe-jHgQk6JtO3b6S5-BMESisbYOSLMz2Kd94UfPhRSDV85Bvv_X4s0YFf8v-hZBscjAhSG50ZkvNhYjNWJlMm45HjbPORnVM-agcGCuYJalIW44iRW5eexGgOb4GXVYZEIshR9IZcsISTpCpldMFGvV0c5sw7bWjyltvz6TBgYP9Kg-XkpYOt2FPUd-a2IFl4rwxmPTFy9ErrQloGNF9sZx"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-primary/5 rounded-3xl mb-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">Built for modern workflows</h2>
        <p className="text-slate-600 dark:text-slate-400">Everything you need to ship great content with your team.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workflows.map((item, index) => (
          <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-6">
            <div className="h-48 w-full bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative">
              <Image 
                src={item.image} 
                alt={item.title} 
                layout="fill"
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowSection;
