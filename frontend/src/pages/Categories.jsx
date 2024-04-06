import { CategoryContainer } from "../components/CategoryContainer";

function Categories() {
  return (
    <div className="container mx-auto px-1">
      <main className="mt-4">
        <h1 className="text-xl font-medium flex justify-between items-center">
          All Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="col-span-1">
            <CategoryContainer title="Classic" />
          </div>
          <div className="col-span-1">
            <CategoryContainer title="Classic 1" />
          </div>
          <div className="col-span-1">
            <CategoryContainer title="Classic 2" />
          </div>
          <div className="col-span-1">
            <CategoryContainer title="Classic 3" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Categories;
