import { BookContainer } from "../components/BookContainer";

function Books() {
  return (
    <div className="container mx-auto px-1">
      <main className="mt-4">
        <h1 className="text-xl font-medium flex justify-between items-center">
          All Books
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="col-span-1">
            <BookContainer title="Lolita" />
          </div>
          <div className="col-span-1">
            <BookContainer title="Lolita 1" />
          </div>
          <div className="col-span-1">
            <BookContainer title="Lolita 2" />
          </div>
          <div className="col-span-1">
            <BookContainer title="Lolita 3" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Books;
