import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="CNFT Trash" />
    <h1>Welcome to CNFT Trash</h1>
    <p>We take your unwanted NFTs and donate the TX fees to cleaning our Oceans!</p>
    <p>We are just getting started. <strong> Donate Here: </strong> </p>
  <p></p>
  <p>
  addr1qxw84x26sxg34u5x43ysxv7pqf20xc8l5p00rrv9p3c22xzqd3eqkvwnkrhvdvuw6y3mha9g4hh7gtjww38q8t25d5nqty6ulw </p>
  <p></p>
  or use
  <p></p>
  <p>
   <strong> Our $handles </strong> | $trashpile | $51percent
</p>
  <p>
      View the Pool <Link to="https://pool.pm/addr1qxw84x26sxg34u5x43ysxv7pqf20xc8l5p00rrv9p3c22xzqd3eqkvwnkrhvdvuw6y3mha9g4hh7gtjww38q8t25d5nqty6ulw">Trash Pool</Link> <br />
     
    </p>
    <StaticImage
      src="../images/trash-lord.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Trash Lord"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      The more trash in the pool, the less trash in the ocean. </p>
  </Layout>
)

export default IndexPage
