import HomeNavbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Link from "next/link";
export default function About() {
  const objState = {
    navbarState: true,
  };
  return (
    <>
      <Head>
        <title>
          About
        </title>
      </Head>
      <HomeNavbar navbarState={objState.navbarState} />
      <div className="p-2 w-75 mt-5 mx-auto text-center">
        <Link href={`https://www.thecocktaildb.com/api.php`}>
          <a className="text-center text-capitalize text-warning bg-dark p-3 my-5 rounded">
            find out more about the CocktailsDB
          </a>
        </Link>
        <p>
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.
        </p>
        <hr />
        <p>
          Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.
        </p>
      </div>
      <Footer />
    </>
  );
}
