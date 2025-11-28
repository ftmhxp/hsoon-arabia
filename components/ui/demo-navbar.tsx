"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../../lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>
  );
}
const noop = () => {};

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <MenuItem setActive={() => setActive(null)} active={active} item="الرئيسية">
  {null}
</MenuItem>

<MenuItem setActive={() => setActive(null)} active={active} item="من نحن">
  {null}
</MenuItem>

        <MenuItem setActive={setActive} active={active} item="الخدمات">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="الكهرباء الإنشائية"
              href="https://algochurn.com"
              src="https://images.unsplash.com/photo-1618522284999-3430d5f5f2da?w=400&h=200&fit=crop&crop=center"
              description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
            />
            <ProductItem
              title="الميكانيكا"
              href="https://tailwindmasterkit.com"
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=400&h=200&fit=crop&crop=center"
              description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
            />
            <ProductItem
              title="مكافحة الحريق"
              href="https://gomoonbeam.com"
              src="https://images.unsplash.com/photo-1760139546356-0a90390364d3?w=400&h=200&fit=crop&crop=center"
              description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
            />
            <ProductItem
              title="السباكة والصرف"
              href="https://userogue.com"
              src="https://images.unsplash.com/photo-1639600993675-2281b2c939f0?w=400&h=200&fit=crop&crop=center"
              description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
            />
            <ProductItem
              title="المصاعد"
              href="https://userogue.com"
              src="https://images.unsplash.com/photo-1566714865935-725933a78973?w=400&h=200&fit=crop&crop=center"
              description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
            />
            <ProductItem
              title="البيوت الذكية"
              href="https://userogue.com"
              src="https://images.unsplash.com/photo-1706774609219-56c61f8b3c51?w=400&h=200&fit=crop&crop=center"
              description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="اتصل بنا">
          <div className="flex flex-col gap-4 text-sm">
            <HoveredLink href="/deals">...</HoveredLink>
            <HoveredLink href="/consultation">...</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}


