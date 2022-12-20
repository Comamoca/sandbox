import { Head, Link } from "aleph/react";

const externalLinks = [
  ["Get Started", "https://alephjs.org/docs/get-started"],
  ["Docs", "https://alephjs.org/docs"],
  ["Github", "https://github.com/alephjs/aleph.js"],
];

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The Fullstack Framework in Deno." />
      </Head>
      <div className="container mx-auto">
        <img src="./assets/logo.svg" width="75" height="75" title="Aleph.js" className="justify-center" />
        <p>And daisyui</p>
      </div>
      <h1 className="text-4xl">
        The Fullstack Framework in Deno.
      </h1>
      <p >
        <strong>Aleph.js</strong> gives you the best developer experience for building web applications<br />{" "}
        with modern toolings.
      </p>
      <div className="external-links">
        {externalLinks.map(([text, href]) => (
          <a
            href={href}
            target="_blank"
            key={href}
          >
            {text}
          </a>
        ))}
      </div>
      <nav>
        <Link
          role="button"
          to="/todos"
          className="btn m-2 text-white"
        >
          Todos App Demo
        </Link>
      </nav>
    </div>
  );
}
