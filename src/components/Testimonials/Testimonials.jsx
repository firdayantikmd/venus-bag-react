import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <p>What Others People Says.</p>
      <div className="testimonials-container">
        <div className="testimonial">
          <div className="header">
            <h4>Emily Johnson <br /> <span className="header-span">Owner of Frosty Ice Co</span> </h4>
          </div>
          <p>Venus Bags have exceeded our expectations in quality and durability. They withstand freezing temperatures and keep our ice clean and secure. Highly recommended!</p>
        </div>
        <div className="testimonial">
          <div className="header">
            <h4>Carlos Rodríguez <br /> <span className="header-span">Gerente de Producción en Hielo Ártico</span> </h4>
          </div>
          <p>Venus Bags han mejorado significativamente la calidad de nuestros productos. Son resistentes y el diseño impreso se mantiene intacto, incluso en condiciones extremas.</p>
        </div>
        <div className="testimonial">
          <div className="header">
            <h4>María López <br /> <span className="header-span">Directora de Operaciones en Hielos del Norte</span> </h4>
          </div>
          <p>Estamos muy satisfechos con las Venus Bags Son duraderas y la calidad de impresión es excelente, lo que nos ayuda a destacar en el mercado.</p>
        </div>
        <div className="testimonial">
          <div className="header">
            <h4>Jennifer Wilson <br /> <span className="header-span">Production Manager at Chill Zone Ice</span> </h4>
          </div>
          <p>Our customers love the new Venus Bags. The bags are sturdy and the custom printing is vibrant and eye-catching. We couldn’t be happier.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;