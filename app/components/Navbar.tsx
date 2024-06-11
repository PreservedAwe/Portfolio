import Link from 'next/link';

const links = [
    { href: '/about', text: 'About Me' },
    { href: '/contact', text: 'Contact Me' },
    { href: '/hobbies', text: 'Hobbies' },
    { href: '/projects', text: 'Projects' },
    { href: '/', text: 'Home' },
];


export default function Navbar() {
    return (
        <nav className='size-full flex justify-around items-center'>
            {links.map((link, index) => (
                <Link key={index} href={link.href} className="bg-black text-white rounded-md shadow-md px-2 py-1 hover:bg-white hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                {link.text}
                </Link>
            ))}
        </nav>
    );
}