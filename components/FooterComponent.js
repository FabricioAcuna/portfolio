import Link from "next/link";

export default function FooterComponent() {
  return (
    <div className=" pt-8">
      <div className="flex  justify-between py-5 mx-20 text-gray-800">
        <h1>Logo</h1>

        <ul className="flex gap-5">
          <li>+7000000</li>
          <li>aa@gmail.se</li>
        </ul>
      </div>
      <hr />
      <div className="flex  justify-between py-5 mx-20 text-gray-800">
        <ul className="flex gap-5">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Tech Stack</Link>
          </li>
          <li>
            <Link href={"/"}>Projects</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <h1>Page made by</h1>
      </div>
    </div>
  );
}
