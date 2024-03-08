export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

export function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const exampleAllowScrollOnLinkComponents_doesntWork = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  // first prevent the default behavior
  e.preventDefault();
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};
