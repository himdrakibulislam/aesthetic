import Image from "next/image";
import styles from "../../styles/slides.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../../public/image/hero1.jpg";
import img2 from "../../../public/image/hero2.jpg";
import img3 from "../../../public/image/contact.jpg";

const herodata = [
  {
    id: 1,
    image: img1,
    text: "Elevate Your Space with Timeless Interior Design Solutions and Creativity.",
    button: 'Add To Cart',
    href:"/contact"
  },
  {
    id: 2,
    image: img2,
    text: "Transforming Spaces, Inspiring Lives: Interior Design Excellence.",
    button: 'Add To Cart',
    href:"/contact"
  },
  {
    id: 3,
    image: img3,
    text: "Crafting Aesthetic Living: Where Dreams Meet Design Realities.",
    button: 'Add To Cart',
    href:"/contact"
  },
];

const HomeSlide = () => {
  const [index, setIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(herodata[0]);
  useEffect(() => {
    setSelectedItem(herodata[index]);
  }, [index]);
  const backgroundStyle = {
    backgroundImage: `url(${selectedItem.image})`,
  };
  const slideChangeAction = (animateTo) => {
    const image = document.querySelector(".background-image");
    const cnt = document.querySelector("#content");

    if (cnt) {
      cnt.classList.add("animate__animated", `${animateTo}`);
      setTimeout(() => {
        cnt?.classList.remove("animate__animated", `${animateTo}`);
      }, 1000); //
    }

    if (image) {
      
      const currentScale = parseFloat(
        getComputedStyle(image).transform.split(",")[0].split("(")[1]
      );
      image.style.transform = currentScale === 1.0 ? "scale(1.3)" : "scale(1)";
    }
  };

  const handleNext = () => {
    slideChangeAction("animate__fadeInLeft");

    if (herodata.length - 1 === index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  // previous
  const handlePrev = () => {
    slideChangeAction("animate__fadeInRight");

    if (index === 0) {
      setIndex(herodata.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // animate__fadeInUp
      slideChangeAction("animate__fadeInUp");
      if (herodata.length - 1 === index) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 8000);
    return () => {
      clearTimeout(8000);
    };
  }, [index]);
  return (
    <div className={styles["background-container"]}>
      <Image
        src={selectedItem.image}
        width={1300}
        height={500}
        alt="Background"
        layout="responsive"
        property="true"
        className={`${styles["background-image"]} background-image`}
      />
      
      <div className={styles["slide-content"]}>
      
        <div>
          <h4 id="content" className="animate__animated">
            {selectedItem?.text}
          </h4>
          
        </div>
        
      </div>
      
      <div className={styles["dots"]}>
        <div>
          {herodata.map((dot, i) => (
            <h4 key={i}>
              <span
                className={`${
                  i === index ? "w-4 h-12 bg-white rounded-full" : null
                }`}
              >
                {" "}
                &#x2022;
              </span>
              <span className="mx-2">{i === index ? "0" + (i + 1) : null}</span>
            </h4>
          ))}
        </div>
      </div>
      <div className={styles["slide-button"]}>
        <div>
          <button onClick={handlePrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>

          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default HomeSlide;
