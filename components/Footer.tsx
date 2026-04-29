import { Facebook, Instagram, Mail, Phone, Pin } from "./ui/Icons";
import Image from "next/image";
import logo from '../public/assets/logo.png'
import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer className="w-full h-fit py-10 flex flex-col items-start md:items-center px-10 gap-14 bg-purplemain text-white font-montserrat" style={{ fontFamily: 'jubilat' }}>
                <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:justify-between lg:gap-20 xl:gap-44">
                    <Image src={logo} width={300} alt="logo" className="self-center" />
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-xl">Contacto</h2>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail size={24} color="white" />
                                <p>fontenezjoyas@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone />
                                <p>+54 9 3804 36-0110</p>
                            </div>
                        </div>
                        <ul className="flex items-center gap-5">
                            <Link href="https://www.instagram.com/fontenezjoyas/" className="hover:scale-125 transition">
                                <Instagram />
                            </Link>
                            <Link href="https://www.facebook.com/fontenezjoyas" className="hover:scale-125 transition">
                                <Facebook  />
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-xl">Empresa</h2>
                        <div className="flex flex-col gap-2">
                            <Link href="/about" className="hover:bg-white hover:text-darkblue px-2 transition">Nosotros</Link>
                            <Link href="/servicios" className="hover:bg-white hover:text-darkblue px-2 transition">Servicios</Link>
                            <Link href="" className="hover:bg-white hover:text-darkblue px-2 transition">Productos</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-bold text-xl">Encontranos en:</h2>
                        <div className="flex flex-col gap-2">
                            <Link href="https://www.google.com/maps/@-29.4145039,-66.8552728,20z?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D" className="hover:bg-white hover:text-darkblue px-2 transition flex gap-1 items-center"><Pin />Av. Rivadavia 515</Link>
                            <Link href="https://www.google.com/maps/place/Fonte+ez+Joyas+-+Plateros+-+Orfebres+Joyeria+Y+Relojeria/@-29.4096229,-66.8548443,21z/data=!4m6!3m5!1s0x9427da4b4631d64b:0x671f60bd25b7a507!8m2!3d-29.4097105!4d-66.8549265!16s%2Fg%2F11bbrmh42n?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D" className="hover:bg-white hover:text-darkblue px-2 transition flex gap-1 items-center"><Pin />Alberdi </Link>
                        </div>
                    </div>
                </div>
                <p className="text-center">Fonteñez Joyas | Todos los derechos reservados - 2024</p>
            </footer>
        </>
    )
}
