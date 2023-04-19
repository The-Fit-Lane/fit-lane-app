import {items} from "/public/HomePage.json";
import { Carousel } from "react-bootstrap";
import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootsrap.module.css";

export default function Main() {
        const { bootstrap } = items;
        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
          };
          return (
           <Carousel activeIndex={index} onSelect={handleSelect}>
             {bootstrap.map((item) => (
               <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
                 <img src={item.imageUrl} alt="slides" />
                 <Carousel.Caption className={styles.caption}>
                   <h3>{item.title}</h3>
                   <p>{item.body}</p>
                   <button className="btn btn-danger">Shop Now</button>
                 </Carousel.Caption>
               </Carousel.Item>
             ))}
           </Carousel>
         );
       }