import HomeNavbar from "/components/navbar";
import Image from 'react-bootstrap/Image'
import Head from "next/head";


export default function CocktailsPage({ cocktails }) {

  const { strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } = cocktails.drinks[0];

  let Ingredients = "";
  for (let props in cocktails.drinks[0]) {
    if (props.startsWith('strIngredient') && cocktails.drinks[0][props] !== null) {
      Ingredients += cocktails.drinks[0][props] + ' ';
    }
  }

  return (
    <>
      <Head>
        <title>{strDrink}</title>
      </Head>
      <HomeNavbar navbarState={{ navbarState: true }} />
      <section className="container-fluid">

        <div className="row mt-5 gx-3 gy-5">

          <div className="col-xl-5  text-center">
            <Image className="p-1 border border-2 border-warning shadow" src={strDrinkThumb} alt={strDrink} roundedCircle thumbnail fluid />
          </div>

          <div className="col-xl-6">
            <div className="d-flex flex-column my-1">
              <h5 className="text-dark rounded bg-warning p-1 my-0  text-uppercase fs-6">Name</h5>
              <p className="text-dark p-1 my-1">
                {strDrink}
              </p>
            </div>
            <hr className="my-2" />
            <div className="d-flex flex-column my-1">
              <h5 className="text-dark rounded bg-warning p-1 my-0  text-uppercase fs-6">Category</h5>
              <p className="text-dark p-1 my-1">
                {strCategory}
              </p>
            </div>
            <hr className="my-2" />
            <div className="d-flex flex-column my-1">
              <h5 className="text-dark rounded bg-warning p-1 my-0  text-uppercase fs-6">type</h5>
              <p className="text-dark p-1 my-1">
                {strAlcoholic}
              </p>
            </div>
            <hr className="my-2" />
            <div className="d-flex flex-column my-1">
              <h5 className="text-dark rounded bg-warning p-1 my-0 text-uppercase fs-6">Glass</h5>
              <p className="text-dark p-1 my-1">
                {strGlass}
              </p>
            </div>
            <hr className="my-2" />
            <div className="d-flex flex-column my-1">
              <h5 className="text-dark rounded bg-warning p-1 my-0  text-uppercase fs-6 ">Instructions</h5>
              <p className="text-dark p-1 my-1">
                {strInstructions}
              </p>
            </div>
            <hr className="my-2" />
            <div className="d-flex flex-column my-1">
              <h5 className="text-dark rounded bg-warning p-1 my-0 text-uppercase fs-6 ">Ingredients</h5>
              <p className="text-dark p-1 my-1">
                {Ingredients}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}


export async function getServerSideProps({ params }) {

  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktail_id}`);
  const cocktails = await res.json();

  return { props: { cocktails } }
}