export const routes = {
  home: {
    name: "Home",
    to: "/",
  },
  docs: {
    name: "Docs",
    to: "/docs",
    children: {
      ui: {
        name: "UI",
        to: "/docs/ui",
        children: {
          elements: {
            name: "Elements",
            to: "/docs/ui/:element",
          },
        },
      },
    },
  },
};
