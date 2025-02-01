import { f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cct8bs3X.mjs';
import 'kleur/colors';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CJ6YzeK1.mjs';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function Greeting({ messages }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("h3", { children: [
      greeting,
      "! Thank you for visiting!"
    ] }),
    /* @__PURE__ */ jsx(Button, { onClick: () => setGreeting(randomMessage()), children: "New Greeting" })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>My awesome blog subtitle</h2> ${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hej", "Hallo", "Hola", "Habari"], "client:component-hydration": "load", "client:component-path": "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/components/Greeting", "client:component-export": "default" })} ` })}`;
}, "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/index.astro", undefined);

const $$file = "D:/TOFIK/code/astro/astro-doc-tutorial/minimal/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
