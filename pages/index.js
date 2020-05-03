import Link from "next/link";
export default () => (
  <div>
    Hallo Wereld.
    <div />
    <Link href="/about">
      <a>Over</a>
    </Link>
    <div />
    Hallo Dag.{" "}
    <Link href="/day">
      <a>Dag</a>
    </Link>
  </div>
);
