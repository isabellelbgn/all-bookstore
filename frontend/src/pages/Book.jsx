import { AddToCartButton } from "../components/AddToCartButton";

function Book() {
  return (
    <div className="container mx-auto px-4">
      <main className="mt-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <h1> Book Cover </h1>
          </div>
          <div className="col-span-8">
            <h3 className="text-2xl font-bold mb-2">Book Title</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse facilisis sapien vel turpis sollicitudin, nec volutpat
              mauris aliquam. Morbi sit amet pretium risus. Proin viverra a leo
              quis vestibulum. Aenean et diam in enim varius tincidunt a vel
              lectus. Mauris nec ultrices erat, a tincidunt urna. Proin iaculis
              purus mauris, vitae lacinia enim condimentum sollicitudin.
            </p>
            <p className="text-zinc-800 text-base font-semibold">Price</p>
            <AddToCartButton />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Book;
