import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import { PageTemplate } from "../../components/Main Components/PageTemplate.jsx";

function Cart() {
  return (
    <>
      <div>
        <Navigation />
        <PageTemplate>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mt-14 sm:max-w-2xl xl:p-10">
            <table class="w-full font-montserrat text-sm text-left rtl:text-right ">
              <thead class="text-xs bg-gray-100 ">
                <tr>
                  <th scope="col" class="px-16 py-3">
                    <span class="sr-only"></span>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Item Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-100">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td class="px-6 py-4 ">Product 1</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <button
                        class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 bg-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span class="sr-only">Quantity button</span>
                        <svg
                          class="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          class="bg-gray-50 w-14 border-b border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1"
                          required
                        />
                      </div>
                      <button
                        class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-gray-800  rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-black dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <span class="sr-only">Quantity button</span>
                        <svg
                          class="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4">$599</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </PageTemplate>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
