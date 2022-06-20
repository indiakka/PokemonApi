import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

// desestructura los datos que obtuvimos de nuestro componente App.js.
function Card({ page, results }) {
    // crea una variable llamada display. Esto mantendrá todas nuestras tarjetas
    let display;
    //declaración if else para verificar si los datos que obtuvimos de nuestra API están vacíos o no
    /*asignar nuestros results a nuestro componente card de manera que creará tarjetas para nosotros
    automáticamente.Pero primero, debemos desestructurar los datos que obtuvimos de nuestra API. */
    display = results.map((x) => {
        let { id, name, growth_time, max_harvest, natural_gift_power, size, smoothness, soil_dryness, firmness, flavors, item, natural_gift_type } = x;

        return (
            <>
                <Link
                    style={{ textDecoration: "none" }}
                    to={`${page}${id}`}
                    key={id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                >
                    <div
                        className={`${styles.cards} d-flex flex-column justify-content-center`}
                    >
                        <img className={`${styles.img} img-fluid`} src={image} alt="" />
                        <div className={`${styles.content}`}>
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6 fw-normal">growth time</div>
                                <div className="fs-5">{growth_time}</div>
                                <div className="fs-6 fw-normal">max harvest</div>
                                <div className="fs-5">{max_harvest}</div>
                                <div className="fs-6 fw-normal">natural_gift_power</div>
                                <div className="fs-5">{natural_gift_power}</div>
                                <div className="fs-6 fw-normal">size</div>
                                <div className="fs-5">{size}</div>
                                <div className="fs-6 fw-normal">smoothness</div>
                                <div className="fs-5">{smoothness}</div>
                                <div className="fs-6 fw-normal">soil_dryness</div>
                                <div className="fs-5">{soil_dryness}</div>
                                <div className="fs-6 fw-normal">firmness</div>
                                <div className="fs-5">{firmness}</div>
                                <div className="fs-6 fw-normal">flavors</div>
                                <div className="fs-5">{flavors}</div>
                                <div className="fs-6 fw-normal">item</div>
                                <div className="fs-5">{item}</div>
                                <div className="fs-6 fw-normal">natural_gift_type</div>
                                <div className="fs-5">{natural_gift_type}</div>

                            </div>
                        </div>
                    </div>

                </Link>
            </>
        );
    });
}
export default Card;