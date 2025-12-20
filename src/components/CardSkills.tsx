


export default function CardSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 p-4 mt-15">
      {/* Frontend Technologies  */}
      <div className="bg-primary md:row-span-2 rounded-xl p-4 flex flex-col justify-between min-h-[200px] font-bold" data-aos="fade-up" data-aos-delay="200">
        <div>
          <h3 className="text-white text-2xl uppercase font-bold mb-2">Frontend</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg">JavaScript</span>
              <span className="text-white text-sm">100%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white text-lg">React</span>
              <span className="text-white text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full"  style={{ width: '95%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white text-lg">Node.js</span>
              <span className="text-white text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white text-lg">TailwindCSS</span>
              <span className="text-white text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white text-lg">TypeScript</span>
              <span className="text-white text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white text-lg">Next.js</span>
              <span className="text-white text-sm">90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Backend & Databases  */}
      <div className="bg-primary md:col-span-2 lg:col-span-2 rounded-xl p-4 flex flex-col justify-between min-h-[200px]" data-aos="fade-right">
        <h3 className="text-white text-2xl font-bold mb-2 uppercase">Backend & DB</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg">Node.js</span>
              <span className="text-white text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg">ExpressJS</span>
              <span className="text-white text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg">PostgreSQL</span>
              <span className="text-white text-sm">90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg">Supabase</span>
              <span className="text-white text-sm">90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Diseño UI/UX */}
      <div className="bg-[#1c1a19] rounded-xl p-4 flex flex-col justify-center items-center min-h-[200px] font-bold" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-primary text-xl uppercase font-bold mb-4">Diseño UI/UX</h3>
        <div className="space-y-3 w-full">
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">TailwindCSS</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= 5 ? 'bg-primary' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">Framer</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= 4 ? 'bg-primary' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">Affinity</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= 3 ? 'bg-primary' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Development */}
      <div className="bg-[#1c1a19] rounded-xl p-4 flex flex-col justify-center min-h-[200px]" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-primary text-xl uppercase font-bold mb-4">Mobile</h3>
        <div className="space-y-3 font-bold">
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">React Native</span>
            <div className="relative w-16 h-8 bg-black rounded-full">
              <div className="absolute top-1 right-1 w-6 h-6 bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">NativeWind</span>
            <div className="relative w-16 h-8 bg-black rounded-full">
              <div className="absolute top-1 right-1 w-6 h-6 bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">TypeScript</span>
            <div className="relative w-16 h-8 bg-black rounded-full">
              <div className="absolute top-1 right-1 w-6 h-6 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Frameworks */}
      <div className="bg-primary md:col-span-2 lg:col-span-2 rounded-xl p-4 flex flex-col justify-between min-h-[200px]"
        data-aos="fade-right"
      >
        <h3 className="text-xl uppercase font-bold mb-2 text-white">Tools & Frameworks</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-bold">
          {[
            { name: 'GIT', level: 90 },
            { name: 'VITE', level: 90 },
            { name: 'TAILWIND', level: 95 },
            { name: 'FRAMER', level: 90 }
          ].map((tool) => (
            <div key={tool.name} className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <svg width="64" height="64" className="absolute top-0 left-0">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#282828"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={2 * Math.PI * 28 * (1 - tool.level / 100)}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s' }}
                  />
                </svg>
                <div className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{tool.level}%</span>
                </div>
              </div>
              <span className="text-lg text-white">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="bg-[#1c1a19] rounded-xl p-4 flex flex-col justify-center min-h-[200px]" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-primary text-xl uppercase font-bold mb-4">Soft Skills</h3>
        <div className="space-y-3 font-bold">
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">Liderazgo</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-primary' : 'bg-white'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">Comunicación</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-primary' : 'bg-white'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-primary text-lg">Resolución</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-primary' : 'bg-white'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
