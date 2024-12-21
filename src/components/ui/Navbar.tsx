import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Profiles", href: "#profiles" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const menuIconVariants = {
  closed: { rotate: 0 },
  opened: { rotate: 90 },
};

const Navbar = ({ activeSection }: NavbarProps) => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<String | null>(null);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > lastScrollY && !hidden && latest > 100) {
        setHidden(true);
      } else if (latest < lastScrollY && hidden) {
        setHidden(false);
      }
      setLastScrollY(latest);
    });
  }, [scrollY, hidden, lastScrollY]);

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    document.body.style.overflow = newState ? "hidden" : "auto";
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      if (mobileMenuOpen) {
        // Reset overflow style and close menu
        document.body.style.overflow = "auto";
        setMobileMenuOpen(false);
      }
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-120%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 left-0 right-0 z-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background/80 backdrop-blur-md rounded-2xl shadow-lg border border-border/50 p-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-500 to-orange-500">
                  HS
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      className="relative"
                      onHoverStart={() => setHoveredItem(item.name)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <motion.a
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className={`relative text-lg font-medium py-2 transition-colors duration-200 ${
                          activeSection === item.href.substring(1)
                            ? "text-foreground"
                            : "text-foreground/80 hover:text-foreground"
                        }`}
                        animate={{
                          scale: hoveredItem === item.name ? 1.1 : 1,
                          opacity:
                            hoveredItem === null || hoveredItem === item.name
                              ? 1
                              : 0.5,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                        {/* Underline effect */}
                        <motion.div
                          className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-red-700 via-red-500 to-orange-500"
                          initial={{ scaleX: 0 }}
                          animate={{
                            scaleX:
                              hoveredItem === item.name ||
                              activeSection === item.href.substring(1)
                                ? 1
                                : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          style={{ transformOrigin: "center" }}
                        />
                        {/* Glow effect */}
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-[4px] blur-sm bg-gradient-to-r from-red-700 via-red-500 to-orange-500"
                          animate={{
                            opacity:
                              hoveredItem === item.name ||
                              activeSection === item.href.substring(1)
                                ? 0.5
                                : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <motion.div
                className="md:hidden"
                initial="closed"
                animate={mobileMenuOpen ? "opened" : "closed"}
                variants={menuIconVariants}
              >
                <motion.button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-foreground/80 hover:text-foreground focus:outline-none"
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Open main menu</span>
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="block h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="block h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center space-y-8"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    onHoverStart={() => setHoveredItem(item.name)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <motion.a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`relative text-2xl font-bold py-2 ${
                        activeSection === item.href.substring(1)
                          ? "text-foreground"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      {/* Underline effect */}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-red-700 via-red-500 to-orange-500"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX:
                            hoveredItem === item.name ||
                            activeSection === item.href.substring(1)
                              ? 1
                              : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ transformOrigin: "center" }}
                      />
                      {/* Glow effect */}
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-[4px] blur-sm bg-gradient-to-r from-red-700 via-red-500 to-orange-500"
                        animate={{
                          opacity:
                            hoveredItem === item.name ||
                            activeSection === item.href.substring(1)
                              ? 0.5
                              : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
