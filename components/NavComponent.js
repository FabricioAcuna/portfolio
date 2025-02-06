import Link from "next/link";

export default function NavComponent() {
  return (
    <>
      <nav className="flex  justify-between py-5 mx-20 ">
        <h1>Logo</h1>
        <ul className="flex gap-5 mx-5 text-gray-800">
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
      </nav>
    </>
  );
}
