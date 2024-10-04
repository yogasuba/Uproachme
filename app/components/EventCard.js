export default function EventCard({ title, duration, price }) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{duration}</p>
        </div>
        <div className="text-center md:text-right mt-2 md:mt-0">
          {price && <p className="text-lg font-bold">{price}</p>}
          <button className="px-4 py-2 bg-blue-500 text-white rounded mt-2 md:mt-0">
            {price ? "Book" : "Free"}
          </button>
        </div>
      </div>
    );
  }