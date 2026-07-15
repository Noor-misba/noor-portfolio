{/* Right Column: Profile Image */}
<div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    className="relative w-64 h-64 md:w-80 md:h-80"
  >
    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />

    <div className="w-full h-full rounded-2xl p-3 glass-card flex items-center justify-center border border-white/10 shadow-2xl relative overflow-hidden group">
      <img
        src={new URL('/profile.jpg', import.meta.env.BASE_URL).toString()}
        alt="Noor Misba Profile"
        className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 pointer-events-none transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-xs text-blue-400 font-semibold flex items-center gap-1">
          <Cpu className="w-3.5 h-3.5" /> AI & Data Science
        </span>
        <span className="text-xs text-gray-400">Noor Misba</span>
      </div>
    </div>
  </motion.div>
</div>