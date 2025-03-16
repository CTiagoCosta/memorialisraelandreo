import { useState } from "react";
import styled from "styled-components";
import { SocialLink } from "./SocialLink";
import { devices } from "../resorces/devices";

const Button = styled.button<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#ED8936" : "white")};
  font-size: 1.25em;
  font-weight: 600;
  border-bottom: ${({ active }) => (active ? "2px solid #ED8936" : "none")};

  &:hover {
    color: #ed8936;
  }
`;

const ConectButton = styled.button`
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 18px 34px;
  font-size: 18px;
  position: relative;
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: #ed8936;
  }

  &:hover::before {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  z-index: 1001;

  div {
    width: 30px;
    height: 3px;
    background: white;
    transition: 0.3s;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

const MenuOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")}; 
  width: 250px;
  height: 100vh;
  background: rgba(28, 69, 50, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
  transition: left 0.3s ease-in-out;
  z-index: 1000;

  @media ${devices.tablet} {
    position: static;
    width: auto;
    height: auto;
    background: transparent;
    flex-direction: row;
    padding-top: 0;
  }
`;

const Backdrop = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: #ed8936;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

export function Menu() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const toggleMenu = () => setOpen(!open);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, section: string) => {
    event.preventDefault();
    setActiveLink(section);

    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }

    setOpen(false); // Fecha o menu ao clicar
  };

  return (
    <>
      {/* Ícone do menu hambúrguer */}
      <Hamburger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>

      {/* Overlay escuro */}
      <Backdrop open={open} onClick={() => setOpen(false)} />

      {/* Menu lateral */}
      <MenuOverlay open={open}>
        <CloseButton onClick={toggleMenu}>&times;</CloseButton>

        <Button active={activeLink === "section1"}>
          <a href="#section1" onClick={(e) => handleLinkClick(e, "section1")}>
            Música
          </a>
        </Button>

        <Button active={activeLink === "section2"}>
          <a href="#section2" onClick={(e) => handleLinkClick(e, "section2")}>
            Galeria
          </a>
        </Button>

        <Button active={activeLink === "section3"}>
          <a href="#section3" onClick={(e) => handleLinkClick(e, "section3")}>
            Depoimentos
          </a>
        </Button>

        <SocialLink />

        <ConectButton>
          <a href="#section4" onClick={(e) => handleLinkClick(e, "section4")}>
            Deixe sua Mensagem
          </a>
        </ConectButton>
      </MenuOverlay>
    </>
  );
}
