import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const NavLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Carrers" },
];
export function NavBar() {
  return (
    <nav className="flex justify-between items-center px-[20px] py-[16px] w-full lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center gap-x-10">
        <Image src={Logo} alt="Logo" />
        <div className="hidden lg:flex gap-x-[56px] pl-[74px]">
          {NavLinks.map((link, index) => (
            <span key={index} className="text-[#36385C] font-medium">
              {link.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5 items-center justify-center lg:gap-x-0">
        <p className="text-[#36385C] font-medium hidden lg:block pr-[56px]">
          Open an Account
        </p>

        <div className="flex gap-x-2 items-center">
          <Image src={User} alt="User" />
          <span className="hidden text-[#36385C] font-medium lg:block">
            Sign in
          </span>
        </div>

        <Image className="block lg:hidden" src={Menu} alt="Menu Button" />
      </div>
    </nav>
  );
}
