export default function (props: {children: any, title: string }) {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <title>{props.title}</title>
      </head>
      <body>
        {props.children}
      </body>
    </>
  );
}
