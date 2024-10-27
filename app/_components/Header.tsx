import React from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import Image from 'next/image';

function Header() {
  return (
    <div>
      <Navbar>
        <NavbarContent>
            <NavbarBrand>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
            </NavbarBrand>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default Header
