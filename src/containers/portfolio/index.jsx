import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Car Rental Web Application",
    image: ImageOne,
    link: "http://quinsack-car-rentals.vercel.app",
    gitlink: "https://github.com/QuinSack/car_rent"
  },
  {
    id: 2,
    name: "Sneaker Shop",
    image: ImageTwo,
    link: "https://ecommerce-filtering-blush.vercel.app",
    gitlink: "https://github.com/QuinSack/ecommerce_filtering"
  },
  {
    id: 2,
    name: "Books Hub",
    image: ImageThree,
    link: "https://crud-library.vercel.app",
    gitlink: "https://github.com/QuinSack/crud_library"
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,
    link: "https://taskify-five-mu.vercel.app",
    gitlink: "https://github.com/QuinSack/taskify"
  },
  {
    id: 3,
    name: "Cosmetics Shopping Application",
    image: ImageFive,
    link: "https://cosmetics-hub-qs52.vercel.app",
    gitlink: "https://github.com/QuinSack/cosmetics_hub"
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button><a href={item.link} target="_blank" rel="noopener noreferrer">Visit</a></button>
                    <button><a href={item.gitlink} target="_blank" rel="noopener noreferrer">View on Github</a></button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
