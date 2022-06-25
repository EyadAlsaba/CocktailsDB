import { Container, Form, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";
import { FaBullhorn } from 'react-icons/fa'
import HomeNavbar from "/components/navbar";
import Custom404 from "../404";
import Head from "next/head";
import Footer from "../../components/footer";

export default function CocktailsPage({ Cocktails }) {
  const [data, setData] = useState(Cocktails);

  async function handleUserQuery(e) {
    e.preventDefault();
    let inputQuery = document.querySelector("input[type]");
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputQuery.value}`)
    const CocktailsQuery = await response.json()
    if (CocktailsQuery.drinks !== null || undefined) {
      setData(CocktailsQuery)
    } else {
      setData(null)
    }
    inputQuery.value = ''
  }

  async function alcoholic(userQuery) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${userQuery}`)
    const CocktailsQuery = await response.json();

    if (CocktailsQuery.drinks !== null || undefined) {
      setData(CocktailsQuery)
    } else {
      setData(null)
    }
  }

  return (
    <>
      <Head>
        <title>
          cocktails
        </title>
      </Head>

      <HomeNavbar navbarState={{ navbarState: true }} />

      <div className="bg-dark text-light d-block  p-0 ms-1  badge" onClick={() => alcoholic('Non_Alcoholic')}>
        <FaBullhorn />
        <span className="bg-dark text-light">Non-Alcoholic!</span>
      </div>

      <Container className="m-0 p-0 my-5" fluid >
        <Form onSubmit={handleUserQuery} className="w-50 mx-auto py-5">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="e.g. margarita" />
        </Form>
      </Container>

      <section className="d-flex flex-wrap justify-content-center container-fluid">
        {
          data !== null ? data.drinks.map((drink) => {
            return (
              <div key={drink.idDrink} className='m-2'>
                <Card style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={drink.strDrinkThumb} className="border-bottom border-muted" />
                  <Card.Body>
                    <ListGroup className="list-group-flush text-center">
                      <ListGroupItem>{drink.strDrink}</ListGroupItem>
                      {
                        drink.strAlcoholic ?
                          <ListGroupItem>{drink.strAlcoholic}</ListGroupItem>
                          :
                          <ListGroupItem>Non-alcoholic</ListGroupItem>
                      }
                      <ListGroupItem>
                        <Card.Link href={`cocktails/${drink.idDrink}`} className="text-decoration-none">
                          <Card.Text>Details</Card.Text>
                        </Card.Link></ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            )
          }) :
            <Custom404 />
        }
      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps() {

  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
  const Cocktails = await response.json()
  if (!Cocktails) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      Cocktails,
    }
  }
}
