import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper/modules";

import "./Products.css";

function Products() {
  return (
    <section className="products">
      <h2>Products</h2>
      <p>Answers to Your Common Questions</p>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
        loop
        modules={[Pagination]}
        className="products-container"
      >
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Small Ice Bags (5 lbs)</h3>
            <p>Our Small Ice Bags are perfect for personal and small-scale use. Made from durable plastic, these 5-pound bags are ideal for home freezers, parties, and picnics. The high-quality material ensures the bags remain tear-resistant and leak-proof, keeping your ice fresh and secure.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Medium Ice Bags (10 lbs)</h3>
            <p>Venus Bags’ Medium Ice Bags offer a convenient solution for medium-sized gatherings and commercial use. These 10-pound bags are crafted from robust plastic to withstand freezing temperatures without compromising integrity. Custom printing options are available to enhance your brand visibility.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Large Ice Bags (20 lbs)</h3>
            <p>For large events and commercial distribution, our Large Ice Bags are the perfect choice. These 20-pound bags are designed for maximum durability and resilience, ensuring that your ice stays intact during transportation and storage. The bags feature vibrant custom prints that promote your brand effectively.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Printed Ice Bags</h3>
            <p>Stand out with our Printed Ice Bags, offering high-resolution custom designs. These bags are available in various sizes and are made from high-quality plastic to ensure durability and resistance to tears. The print quality is exceptional, providing a professional look for your brand.</p>
          </div>
        </SwiperSlide >
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Self-Sealing Ice Bags</h3>
            <p>Our Self-Sealing Ice Bags provide convenience and efficiency. These bags come with a reliable self-sealing mechanism that ensures a secure closure without the need for additional ties or clips. Ideal for quick and hassle-free use in busy environments.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Reinforced Bottom Ice Bags</h3>
            <p>Designed to handle heavy loads, our Reinforced Bottom Ice Bags feature an extra layer of material at the base to prevent leaks and tears. These bags are perfect for transporting large quantities of ice and are available in various sizes to meet your needs.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Eco-Friendly Ice Bags</h3>
            <p>Venus Bags is committed to sustainability with our Eco-Friendly Ice Bags. Made from recyclable materials, these bags are both durable and environmentally conscious. They are available in multiple sizes and can be custom printed with eco-friendly inks.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Heavy-Duty Ice Bags</h3>
            <p>For demanding conditions, our Heavy-Duty Ice Bags are the ideal solution. Constructed from thick, robust plastic, these bags are designed to withstand extreme temperatures and rough handling. They ensure that your ice remains intact and secure throughout its journey.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Clear Ice Bags</h3>
            <p>Our Clear Ice Bags provide excellent visibility, allowing customers to see the quality of the ice inside. These bags are made from high-strength plastic that resists punctures and tears. Available in various sizes, they are perfect for both commercial and personal use.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Mesh Ice Bags</h3>
            <p>Venus Bags’ Mesh Ice Bags offer superior ventilation, keeping your ice fresh and dry. The mesh design allows for optimal air circulation while maintaining the bag's strength and durability. These bags are ideal for specialized applications where air flow is crucial.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-card">
            <span>PRODUCT</span>
            <h3>Custom Size Ice Bags</h3>
            <p>We offer Custom Size Ice Bags to meet your specific requirements. Whether you need a unique size for a special event or a tailored solution for your business, our custom ice bags provide the perfect fit. Made from high-quality materials, they ensure durability and reliability.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Products;
