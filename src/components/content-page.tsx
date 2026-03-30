import Image from "next/image";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function ContentPage({ eyebrow, title, body }: ContentPageProps) {
  return (
    <section className="content-page">
      <div className="content-copy">
        <p className="content-eyebrow">{eyebrow}</p>
        <h1 className="content-title">{title}</h1>
        <p className="content-body">{body}</p>
      </div>
      <footer className="site-footer">
        <Image
          src="/quotation-mark.svg"
          alt=""
          width={36}
          height={30}
          className="site-quote-mark"
        />
        <p className="site-footer-copy">Please, listen to each other</p>
      </footer>
    </section>
  );
}
