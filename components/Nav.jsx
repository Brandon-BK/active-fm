import Link from "next/link";

const Nav = () => {
  return (
    <div
      style={{
        background: "rgb(0, 0, 0)",
        height: 60,
        width: "100%",
        display: "flex",
        padding: "0.5rem 1rem",
        position: "fixed",
        top: 25,
        left: 0,
        zIndex: 100,
        boxShadow: "rgb(0 0 0 / 10%) 0px 1px 15px",
        flex: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: 420,
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="main-logo.png" height="100%" width="35" />
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            width: 400,
            height: 30,
            alignItems: "center",
          }}
        >
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>

          <li>
            <Link href="/shows">
              <a>SHOWS</a>
            </Link>
          </li>

          <li>
            <Link href="/live">
              <a>LIVE</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Nav;
