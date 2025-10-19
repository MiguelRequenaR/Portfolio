import { Github, Linkedin, Mail, Twitter } from "lucide-react";
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
      icon: Twitter,
      link: "https://x.com/MiguelParis11"
    }
  ]

  return (
    <div className="p-4 lg:p-0" data-aos="fade-up">
      <div className="bg-[#1c1a19] rounded-xl space-y-4">
        <img src={profileImg} alt="" className="w-full h-[300px] lg:h-full  object-cover rounded-4xl p-2" />
        <div className="p-4 space-y-2">
          <h3 className="text-3xl text-white font-bold text-center" data-aos="fade-up" data-aos-delay="200">Miguel Requena</h3>
          <p className="text-sm text-white text-center" data-aos="fade-up" data-aos-delay="300">Hola, soy Miguel, programador apacionado por la tecnología y el desarrollo de software.</p>
          <div className="flex items-center justify-center gap-2" data-aos="fade-up" data-aos-delay="200">
            {socialMedia.map((item) => (
              <Link to={item.link} className="hover:bg-primary text-primary transition-all duration-700 eas-in cursor-pointe p-2 hover:text-white rounded-full" key={item.link}>
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
