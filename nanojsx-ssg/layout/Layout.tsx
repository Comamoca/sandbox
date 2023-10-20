export default function (props: { children: any; title: string }) {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>{props.title}</title>
        <link
          href="/tailwind.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div class="flex justify-center">
          {props.children}
        </div>
      </body>
    </>
  );
}
