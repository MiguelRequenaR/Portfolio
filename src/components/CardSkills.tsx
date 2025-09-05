


export default function CardSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4 p-4 mt-15">
      {/* Frontend Technologies  */}
      <div className="bg-[#c3b1e7] row-span-2 rounded-xl p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-gray-800 text-lg font-bold mb-2">Frontend</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">JavaScript</span>
              <span className="text-gray-800 text-sm">100%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">React</span>
              <span className="text-gray-800 text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '95%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">Node.js</span>
              <span className="text-gray-800 text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '95%' }}></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">TailwindCSS</span>
              <span className="text-gray-800 text-sm">90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '90%' }}></div>
            </div>

            

            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">TypeScript</span>
              <span className="text-gray-800 text-sm">90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">Next.js</span>
              <span className="text-gray-800 text-sm">85%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Backend & Databases  */}
      <div className="bg-[#f480a3] col-span-2 rounded-xl p-4 flex flex-col justify-between">
        <h3 className="text-gray-800 text-lg font-bold mb-2">Backend & DB</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">Node.js</span>
              <span className="text-gray-800 text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-800 h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">ExpressJS</span>
              <span className="text-gray-800 text-sm">95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-800 h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">PostgreSQL</span>
              <span className="text-gray-800 text-sm">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-800 h-2 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-800 text-sm">Supabase</span>
              <span className="text-gray-800 text-sm">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gray-800 h-2 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Diseño UI/UX */}
      <div className="bg-[#c0cf8a] rounded-xl p-4 flex flex-col justify-center items-center">
        <h3 className="text-gray-800 text-lg font-bold mb-4">Diseño UI/UX</h3>
        <div className="space-y-3 w-full">
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">TailwindCSS</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= 5 ? 'bg-black' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">Figma</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= 4 ? 'bg-black' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">Ilustrator</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i <= 3 ? 'bg-black' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Development */}
      <div className="bg-[#ffdf70] rounded-xl p-4 flex flex-col justify-center">
        <h3 className="text-gray-800 text-lg font-bold mb-4">Mobile</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">React Native</span>
            <div className="relative w-16 h-8 bg-gray-200 rounded-full">
              <div className="absolute top-1 right-1 w-6 h-6 bg-black rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">NativeWind</span>
            <div className="relative w-16 h-8 bg-gray-200 rounded-full">
              <div className="absolute top-1 right-1 w-6 h-6 bg-black rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">TypeScript</span>
            <div className="relative w-16 h-8 bg-gray-200 rounded-full">
              <div className="absolute top-1 right-1 w-6 h-6 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Frameworks */}
      <div className="bg-[#f8a375] col-span-2 rounded-xl p-4 flex flex-col justify-between">
        <h3 className=" text-lg font-bold mb-2 text-gray-800">Tools & Frameworks</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { name: 'Git', level: 90 },
            { name: 'Vite', level: 85 },
            { name: 'Tailwind', level: 95 },
            { name: 'Figma', level: 80 }
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
                  <span className="text-xs font-bold text-gray-800">{tool.level}%</span>
                </div>
              </div>
              <span className=" text-sm text-gray-800">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="bg-[#b7cddb] rounded-xl p-4 flex flex-col justify-center">
        <h3 className="text-gray-800 text-lg font-bold mb-4">Soft Skills</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">Liderazgo</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-white' : 'bg-gray-400'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">Comunicación</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-white' : 'bg-gray-400'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-800 text-sm">Resolución</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-white' : 'bg-gray-400'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
