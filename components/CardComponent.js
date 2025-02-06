export default function CardComponent({ title, desc, imgLink, url }) {
  return (
    <div className="border dark:border-black rounded-xl max-w-4xl">
      <img src={imgLink} className="rounded-t-xl"></img>

      <div className="flex flex-col m-5">
        <h1 className="text-2xl self-center">{title}</h1>
        <p>{desc}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Länk
        </a>
      </div>
    </div>
  );
}
