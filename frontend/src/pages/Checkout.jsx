import CartNavigation from "../components/CartNavigation";
import Footer from "../components/Main Components/Footer";

function Checkout() {
  return (
    <>
      <CartNavigation />

      <div className="container mx-auto px-4">
        <main className="mt-4">
          <h1 className="text-2xl font-medium flex justify-between items-center">
            All Items
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left">#</th>
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1 </td>
                  <td> Product Title and Image </td>
                  <td> Price </td>
                </tr>
                <tr>
                  <td> 2 </td>
                  <td> Product Title and Image </td>
                  <td> Price </td>
                </tr>
                <tr>
                  <td> 3 </td>
                  <td> Product Title and Image </td>
                  <td> Price </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th>P</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th> Checkout Button </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
