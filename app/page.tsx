import { FiCheck } from "react-icons/fi";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="w-1/2  bg-white rounded-md shadow-xs px-12 py-10 flex flex-col gap-6">
      <div>
        <h1 className="text-primary text-2xl font-semibold">
          Complete your store setup...
        </h1>
        <p className="text-sm text-neutral-500 tracking-wide">
          Use high quality images and product descriptions to have a great
          looking product page. Let&apos;s get started
        </p>
      </div>

      <div>
        <div className="flex gap-2 items-stretch">
          <div className="flex flex-col justify-center items-center">
            <div className="text-white bg-sky-700 rounded-full font-bold text-md size-8 flex justify-center items-center">
              <FiCheck />
            </div>
            <div className="grow w-0.5 bg-sky-700"></div>
          </div>
          <div className="mb-6">
            <span className="text-primary text-md font-semibold">
              Your e-commerce store is ready
            </span>
            <p className="text-xs text-neutral-500 tracking-wide">
              Congratulations! Your e-commerce store is now live
            </p>
            <a
              href="#"
              className="text-xs text-sky-700 underline tracking-wide"
            >
              Visit Store
            </a>
          </div>
        </div>
        <div className="flex gap-2 items-stretch">
          <div className="flex flex-col justify-center items-center">
            <div className="text-sky-700 bg-sky-700/10 border border-sky-700 rounded-full font-semibold text-md size-8 flex items-center justify-center">
              2
            </div>
            <div className="grow w-0.5 bg-neutral-500"></div>
          </div>
          <div className="mb-6">
            <span className="text-primary text-md font-semibold">
              Add your first product
            </span>
            <p className="text-xs text-neutral-500 tracking-wide">
              Start adding products to your online store now
            </p>
            <Button className="mt-4">Add product</Button>
          </div>
        </div>
        <div className="flex gap-2 items-start ">
          <div className="text-neutral-500 border border-neutral-500 rounded-full font-semibold text-md size-8 flex items-center justify-center">
            3
          </div>
          <p className="text-md font-semibold text-neutral-500">
            Setup payments
          </p>
        </div>
      </div>
    </div>
  );
}
