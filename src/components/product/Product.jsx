import "./product.css";

const Product = ({img,link,title}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle-green"></div>
        <div className="p-circle-red"></div>
        <div className="p-circle"></div>
        <h4 className="title">{title}</h4>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
