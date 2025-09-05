
export default function Footer() {
  return (
    <div className="text-center py-20 text-white text-xl">
      &copy; {new Date().getFullYear()} todos los derechos reservados |
      Desarrollado por <a href="https://linkedin.com/in/miguelangelrequenaramos" target="_blank" rel="noopener noreferrer" className="text-primary"><span>Miguel Requena.</span></a>
    </div>
  )
}
