//custom 404 page to render when it's needed
import Link from "next/link"
export default function Custom404() {
  return (
    <div className="">
      <h3 className="text-center text-uppercase text-danger m-5">There is no data in here</h3>
      <div className="d-flex justify-content-center">
        <Link href='/'>
          <a className="mx-5 text-decoration-none text-uppercase">Go back home</a>
        </Link>
      </div>

    </div>
  )
}