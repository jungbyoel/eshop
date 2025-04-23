export default function Footer({ shopName }) {
    return (
      <footer>
        <nav>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/contact">Contact</a>
        </nav>
        <p>{shopName}</p>
      </footer>
    );
  }
  