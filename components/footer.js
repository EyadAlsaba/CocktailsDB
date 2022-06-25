import Image from 'react-bootstrap/Image'

export default function Footer() {
  return (
    <footer className="center-footer">
      <a
        href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-muted"
      >
        Powered by{" "}
        <Image alt='Vercel logo' src="vercel.svg" className="sml-logo"></Image>
      </a>
    </footer>
  )
}