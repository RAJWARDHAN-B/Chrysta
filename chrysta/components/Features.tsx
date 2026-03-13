const Features = () => {
    const features = [
      {
        icon: "bolt",
        title: "Real-time Sync",
        description: "Experience zero-latency collaboration. Watch your team's thoughts take shape instantly as they type."
      },
      {
        icon: "cloud_off",
        title: "Offline Mode",
        description: "Keep your flow state regardless of connection. Changes sync automatically the moment you're back online."
      },
      {
        icon: "markdown",
        title: "Rich Markdown",
        description: "The power of markdown with the ease of a visual editor. Slash commands make formatting effortless."
      }
    ];
  
    return (
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  
