import { useState } from "react";
import { Collapse } from "react-collapse";
import { BiMinus } from "react-icons/bi";
import { GoPlus } from "react-icons/go";

const ProductDetailAccordion = () => {
  const [description, setDescription] = useState(false);
  const [Materials, setMaterials] = useState(false);
  const [Care, setCare] = useState(false);
  const [Return, setReturn] = useState(false);
  return (
    <div>
      {/* description */}
      <div className=" border-t py-2">
        <div
          onClick={() => setDescription(!description)}
          className="text-xl flex justify-between items-center cursor-pointer"
        >
          <h1>Description</h1>
          <div className="">{!description ? <GoPlus /> : <BiMinus />}</div>
        </div>
        {/* detail */}
        <Collapse isOpened={description}>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
          <p className="mt-5">
            <strong>Made in Portugal </strong>with luxury European
            craftsmanship. nnovation, originality, and extreme attention to
            detail.
          </p>
        </Collapse>
      </div>

      {/* Materials */}
      <div className=" border-t py-2">
        <div
          onClick={() => setMaterials(!Materials)}
          className="text-xl flex justify-between items-center cursor-pointer"
        >
          <h1>Materials</h1>
          <div className="">{!Materials ? <GoPlus /> : <BiMinus />}</div>
        </div>
        {/* detail */}
        <Collapse isOpened={Materials}>
          <div className="">
            <h2 className="py-2 text-lg">Mixed materials</h2>

            <p>
              Made with considered design and premium mixed materials, we craft
              extreme cushioning and lightness into every shoe.
            </p>
          </div>
        </Collapse>
        {/* detail */}
        <Collapse isOpened={Materials}>
          <div className="">
            <h2 className="py-2 text-lg">Mixed materials</h2>

            <p>
              Made with considered design and premium mixed materials, we craft
              extreme cushioning and lightness into every shoe.
            </p>
          </div>
        </Collapse>
      </div>
      {/* Care */}
      <div className=" border-t py-2">
        <div
          onClick={() => setCare(!Care)}
          className="text-xl flex justify-between items-center cursor-pointer"
        >
          <h1> Composition & Care</h1>
          <div className="">{!Care ? <GoPlus /> : <BiMinus />}</div>
        </div>
        {/* detail */}
        <Collapse isOpened={Care}>
          <div className="py-5">
            <iframe
              className="w-full"
              height="300"
              src="https://www.youtube.com/embed/O8kmknVFyKQ?si=3cTJEKUFzmhR7QQM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </Collapse>
        {/* detail */}
        <Collapse isOpened={Materials}>
          <div className="">
            <h2 className="py-2 text-lg">Mixed materials</h2>

            <p>
              Made with considered design and premium mixed materials, we craft
              extreme cushioning and lightness into every shoe.
            </p>
          </div>
        </Collapse>
      </div>

      {/* Shipping & Returns */}
      <div className=" border-t py-2">
        <div
          onClick={() => setReturn(!Return)}
          className="text-xl flex justify-between items-center cursor-pointer"
        >
          <h1>Shipping & Returns</h1>
          <div className="">{!Return ? <GoPlus /> : <BiMinus />}</div>
        </div>
        {/* detail */}
        <Collapse isOpened={Return}>
          <div className="py-5">
            <p>
              Shipping in Australia via Auspost and Startrack Express.
              International Express shipping via DHL. Dispatch within 1 business
              day. See all shipping options here
            </p>
          </div>
        </Collapse>
        {/* detail */}
        <Collapse isOpened={Materials}>
          <div className="">
            <h2 className="py-2 text-lg">Mixed materials</h2>

            <p>
              Made with considered design and premium mixed materials, we craft
              extreme cushioning and lightness into every shoe.
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default ProductDetailAccordion;
