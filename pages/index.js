import Link from "next/link";
export default () => (
  <div>
    Hallo Wereld.{" "}
    <Link href="/about">
      <a>Over</a>
    </Link>
  </div>
);
