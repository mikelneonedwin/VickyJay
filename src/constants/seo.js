const image = "https://github.com/mikelneonedwin.png";
const creator = "Winner Edwin";
const author = creator;

export const url = (slug) => {
  return `https://mikelneonedwin.vercel.app/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "Winner Edwin - Software Engineer",
    description:
      "Software engineer building fast, resource-conscious systems across TypeScript, React, NestJS, and distributed backends.",
  },
};
