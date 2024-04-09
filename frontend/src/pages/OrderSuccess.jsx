import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Navigation from "../components/Navigation";

function OrderSuccess() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4">
        <main className="mt-4">
          <div className="flex justify-center">
            <div className="w-full md:w-8/12 lg:w-6/12">
              <div className="bg-white shadow-sm rounded-sm p-6 text-center">
                <div className="flex justify-center">
                  <FaCheckCircle size={48} color="#A2AD84" className="mt-4" />
                </div>
                <h3 className="text-2xl font-bold mt-4">Order Success!</h3>
                <p className="mt-5">
                  <Link
                    to="/"
                    className="bg-green-50 text-black py-2 px-4 rounded-lg mr-2 hover:bg-primary-dark"
                  >
                    Home
                  </Link>
                  <Link
                    to="/customer/dashboard"
                    className="bg-green-50 text-black py-2 px-4 rounded-lg hover:bg-secondary-dark"
                  >
                    Dashboard
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default OrderSuccess;
