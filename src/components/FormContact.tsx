

export default function FormContact() {
  return (
    <div className=" mx-auto p-6">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[#E0E0E0] text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 bg-[#353334] rounded-lg text-[#E0E0E0] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[#E0E0E0] text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="email@email.com"
              className="w-full px-4 py-3 bg-[#353334] rounded-lg text-[#E0E0E0] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[#E0E0E0] text-sm font-medium">
            Presupuesto
          </label>
          <div className="relative">
            <select className="w-full px-4 py-3 bg-[#353334] rounded-lg text-[#E0E0E0] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
              <option value="" className="text-gray-400">Seleccionar...</option>
              <option value="1000-5000" className="bg-[#353334]">S/.400 - S/.600</option>
              <option value="5000-10000" className="bg-[#353334]">S/.600 - S/.800</option>
              <option value="10000-25000" className="bg-[#353334]">S/.800 - S/.1000</option>
              <option value="25000+" className="bg-[#353334]">S/.1000+</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[#E0E0E0] text-sm font-medium">
            Mensaje
          </label>
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full px-4 py-3 bg-[#353334]  rounded-lg text-[#E0E0E0] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
