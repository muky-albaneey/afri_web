"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const showHeaderOnRoutes = ["/", "/product/[id]", "/store/[id]","/about", "/service","/product_detail/[id]","/tailor/[id]","/cart_p/[id]","/cart/[id]","/checkout/[id]","/order_confirm/[id]","/profile/[id]","/tailor_details/[id]","/tailor_prod/[id]","/tailor_profile/[id]"];

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Match dynamic routes using regex or startsWith
  const shouldShowHeader =
    showHeaderOnRoutes.some((route) =>
      route.includes("[id]")
        ? new RegExp(`^${route.replace("[id]", "[^/]+")}$`).test(pathname)
        : pathname.startsWith(route)
    );

  if (!shouldShowHeader) return null;

  return <Header />;
}
