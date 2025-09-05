import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profileghibli.png";

export default function ProfileCard() {

  const socialMedia = [
    {
      icon: Github,
      link: "https://github.com/MiguelRequenaR"
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/miguelangelrequenaramos/"
    },
    {
      icon: Mail,
      link: "mailto:m.angelrequena20@gmail.com"
    },
    {
      icon: Phone,
      link: "tel:+51901617809"
    },
    {
      icon: Twitter,
      link: "https://x.com/MiguelParis11"
    }
  ]

  return (
    <div className="p-4 lg:p-0">
      <div className="bg-white rounded-xl space-y-4">
        <img src={profileImg} alt="" className="w-full h-[300px] lg:h-full  object-cover rounded-4xl p-2" />
        <div className="p-4">
          <h2 className="text-3xl font-bold">Miguel Requena</h2>
          <p className="text-sm">Soy un programador con una sólida formación y experiencia, en el ámbito del Desarrollo Web y Mobile.</p>
          <div className="flex items-center justify-center">
            {socialMedia.map((item) => (
              <Link to={item.link} className="hover:bg-primary text-primary transition-colors duration-300 ease-in-out cursor-pointer p-2 hover:text-white rounded-full" key={item.link}>
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
