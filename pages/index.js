import Link from "next/link";
export default () => (
  <div>
    <div>Startpagina</div>
    <div>===========</div>
    <div> </div>
    Hallo Wereld.
    <div>Versie 10c</div>
    <Link href="/about">
      <a>Over</a>
    </Link>
    <div />
    <Link href="/day">
      <a>Dag</a>
    </Link>
  </div>
);
