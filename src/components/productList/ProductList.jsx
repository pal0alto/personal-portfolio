import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <h2 className="pl-title">Here is my portfolio.</h2>
        <p className="pl-desc">
        I started my self-taught journey in June 2022 and got several certifications to prove my abilities which you can take a look at in my resume.
After a few months of intense study, I was able to put together this portfolio which I keep working on to improve and expand day by day.
        </p>
        <p className="pl-desc">
Today, I still keep studying to learn more about different JavaScript libraries and back-end technologies like NextJS and NodeJS to become a full-stack developer. 
        </p>
        <p className="pl-sub-a">
          Feel free to ask anything about the projects.
        </p>
        <p className="pl-sub-b">
          Here is a fun fact: I actually did the photo shoot of the items that are available in the Orihandicraftal E-commerce website.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
