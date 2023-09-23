import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { LuBox, LuBookMarked, LuPalmtree, LuMenu, LuX } from 'react-icons/lu';
import { useLockBodyScroll, useMedia, useToggle, useWindowScroll } from "react-use";

export default function Header() {
  const links = [
    {
      text: 'bencan.net',
      link: '/',
      icon: LuBox
    },
    {
      text: 'Yaptığım Websiteler',
      link: '/websites',
      icon: LuPalmtree
    },
    {
      text: 'Makaleler',
      link: '/articles',
      icon: LuBookMarked
    }
  ];

  const headerShouldCollapse = useMedia('(max-width: 470px)', false);
  const [menuIsOpen, toggleMenuIsOpen] = useToggle(false);
  useLockBodyScroll(menuIsOpen);
  const { y } = useWindowScroll();

  useEffect(() => {
    if (!headerShouldCollapse) return toggleMenuIsOpen(false);
  }, [headerShouldCollapse]);

  function NotCollapsedHeader() {
    return (
      <div className="mt-16 flex mb-1.5 gap-x-4  flex-wrap">
        {links.map((link, index) => (
          <Link href={link.link} key={index} className="my-3 text-base flex items-center gap-x-1 hover:bg-tertiaryBackgroundColor px-3 mx-3 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium text-tertiaryTextColor hover:text-primaryTextColor select-none">
            {link.icon && <link.icon />}
            {link.text}
          </Link>
        ))}
      </div>
    );
  };

  function CollapsedHeader() {
    return (
      <div className="mt-16 flex mb-1.5">
        <Link href="/" className="my-3 text-base flex items-center gap-x-1 bg-tertiaryBackgroundColor focus:opacity-50 px-3 mx-3 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium text-tertiaryTextColor hover:text-primaryTextColor">
          <LuBox />
          bencan.net
        </Link>

        <div onClick={toggleMenuIsOpen} className="my-3 text-base flex items-center gap-x-1 bg-tertiaryBackgroundColor px-3 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium text-tertiaryTextColor hover:text-primaryTextColor">
          {<LuMenu size={20} />}
        </div>
      </div>
    )
  };

  return (
    <>
      <AnimatePresence>
        {menuIsOpen && (
          <>
            <motion.div className="bg-black/60 w-full h-full absolute z-[10] top-0 left-0 min-h-[100dvh] flex justify-end" style={{ top: y }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <div className="pt-6 pr-6">
                <div onClick={toggleMenuIsOpen} className="text-base flex items-center gap-x-1 bg-tertiaryBackgroundColor p-1.5 rounded-full transition-all duration-300 ease-in-out font-medium text-tertiaryTextColor hover:text-primaryTextColor">
                  {<LuX size={20} />}
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-secondaryBackgroundColor/20 rounded-tr-xl rounded-br-xl backdrop-blur w-full h-full max-w-[250px] absolute z-[11] top-0 left-0 min-h-[100dvh] flex flex-col p-4 gap-2.5" style={{ top: y }} initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -200 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              {links.filter(link => link.link !== '/').map((link, index) => (
                <Link href={link.link} key={index} className="text-base flex items-center gap-x-1 bg-primaryBackgroundColor/50 backdrop-blur px-3 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium text-tertiaryTextColor hover:text-primaryTextColor">
                  {link.icon && <link.icon />}
                  {link.text}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {headerShouldCollapse ? <CollapsedHeader /> : <NotCollapsedHeader />}
    </>
  );
};