import Image from "next/image";
import Link from "next/link";

interface LinkType {
  text: string;
  href: string;
}

interface ProductType {
  id: number;
  section: string;
  links: LinkType[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61573165513950",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://www.instagram.com/o.w.italien/",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Navigation",
    links: [
      { text: "Accueil", href: "#home-section" },
      { text: "Recette", href: "#about-section" },
      { text: "A Propos", href: "#cook-section" },
      { text: "Galerie", href: "#gallery-section" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column: Logo and Social Links */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <Image
                src="/images/Logo/Logo.svg"
                alt="logo"
                width={56}
                height={56}
              />
              <Link href="/" className="text-2xl font-semibold text-white ml-4">
                O&apos;W Restaurant.
              </Link>
            </div>
            <p className="text-white text-sm mb-6">
              Découvrez nos délicieuses recettes et notre passion culinaire.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className="bg-white h-10 w-10 shadow-xl rounded-full flex items-center justify-center hover:bg-pink-500 transition">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={items.width}
                      height={2}
                      className="sepiaa"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Second Column: Product Links in Two Columns */}
          <div>
            {products.map((product) => (
              <div key={product.id}>
                <p className="text-white text-xl font-semibold mb-6">
                  {product.section}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ul>
                    {product.links.slice(0, 2).map((link, index) => (
                      <li key={index} className="mb-3">
                        <Link
                          href={link.href}
                          className="text-white text-sm hover:text-pink-500 transition"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {product.links.slice(2).map((link, index) => (
                      <li key={index} className="mb-3">
                        <Link
                          href={link.href}
                          className="text-white text-sm hover:text-pink-500 transition"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-pink mt-12 pt-8 text-center">
          <p className="text-white text-sm">
            @2024 - Développé avec <span className="text-red-500">❤</span> par{" "}
            <Link
              href="https://visiondigital.fr"
              target="_blank"
              className="hover:text-pink-500 underline"
            >
              VisionDigital
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
