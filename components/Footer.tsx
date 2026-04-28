import { Facebook, Instagram, Mail, Phone, Pin } from "./ui/Icons";
import Image from "next/image";
import logo from '../public/assets/logo.png'
import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer className="w-full h-fit py-10 flex flex-col items-start md:items-center px-10  gap-14 bg-purplemain text-white font-montserrat">
                <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-32">
                    <Image src={logo} width={300} alt="logo" />
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-xl">Contacto</h2>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail size={24} color="white" />
                                <p>fontenezjoyas@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone />
                                <p>+54 9 3804-828899</p>
                            </div>
                        </div>
                        <ul className="flex items-center gap-5">
                            <Link href="/" className="hover:scale-125 transition">
                                <Instagram />
                            </Link>
                            <Link href="/" className="hover:scale-125 transition">
                                <Facebook  />
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-xl">Empresa</h2>
                        <div className="flex flex-col gap-2">
                            <Link href="" className="hover:bg-white hover:text-darkblue px-2 transition">Nosotros</Link>
                            <Link href="" className="hover:bg-white hover:text-darkblue px-2 transition">Servicios</Link>
                            <Link href="" className="hover:bg-white hover:text-darkblue px-2 transition">Productos</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-xl">Encontranos en:</h2>
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="hover:bg-white hover:text-darkblue px-2 transition flex gap-1 items-center"><Pin />Av. Rivadavia 515</Link>
                            <Link href="/" className="hover:bg-white hover:text-darkblue px-2 transition flex gap-1 items-center"><Pin />Alberdi </Link>
                        </div>
                    </div>
                </div>
                <p>Todos los derechos reservados - 2024</p>
            </footer>
        </>
    )
}
