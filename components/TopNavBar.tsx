"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Avatar,
} from "flowbite-react";
import { FaSearch, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import useDebounce from "./useDebounce";
import AvatarPickerModal from "./AvatarPickerModal";

export default function TopNavbar() {
  const router = useRouter();

  /* ── Tema ── */
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
    document.body.className = initial ? "bg-mq-dark" : "bg-white";
  }, []);
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.body.className = next ? "bg-mq-dark" : "bg-white";
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  /* ── Ricerca ── */
  const [openS, setOpenS] = useState(false);
  const [q, setQ] = useState("");
  const debounced = useDebounce(q, 500);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const goSearch = (txt: string) => {
    if (txt.trim().length < 2) return;
    router.push(`/search?q=${encodeURIComponent(txt.trim())}`);
  };
  useEffect(() => { if (openS) goSearch(debounced); }, [debounced, openS]);

  /** click-outside chiude la barra */
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpenS(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") goSearch(q);
    if (e.key === "Escape") setOpenS(false);
  };

  /* ── Avatar ── */
  const [avatar, setAvatar] = useState("/avatar-placeholder.png");
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <>
      <Navbar fluid rounded className="relative z-40 bg-mq-purple text-white backdrop-blur">
        <NavbarBrand as={Link} href="/">
          <img src="/favicon.svg" className="mr-2 h-7" alt="logo" />
          <span className="text-xl font-bold">MangaQuest</span>
        </NavbarBrand>

        <div ref={wrapperRef} className="flex items-center gap-4 md:order-3 relative">
          {/* lente + input */}
          <div className="relative flex items-center">
            <button onClick={() => setOpenS(p => !p)} className="p-2">
              {openS ? <FaTimes /> : <FaSearch />}
            </button>

            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              onKeyDown={onKey}
              placeholder="Cerca…"
              className={`
                absolute right-0 top-1/2 -translate-y-1/2
                bg-white/90 dark:bg-gray-800/90 text-sm
                text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600
                rounded pl-2 py-1 transition-all duration-300
                ${openS ? "w-64 opacity-100 mr-10" : "w-0 opacity-0 pointer-events-none"}
              `}
            />
          </div>

          <button onClick={toggleDark} className="p-2">
            {dark ? <FaSun className="text-yellow-300" /> : <FaMoon />}
          </button>

          <div className="cursor-pointer" onClick={() => setPickerOpen(true)}>
            <Avatar img={avatar} rounded className="h-8 w-8" />
          </div>

          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/library" className="block py-2">Libreria</Link>
          <Link href="/explore" className="block py-2">Esplora</Link>
        </NavbarCollapse>
      </Navbar>

      <AvatarPickerModal
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={src => setAvatar(src)}
      />
    </>
  );
}
