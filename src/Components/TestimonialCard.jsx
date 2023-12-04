const TestimonialCard = ({ testimonial, image, name, occupation }) => {
  return (
    <div className="bg-secondary2 max-h-72 h-72 w-72 shadow-lg hover:shadow-xl mx-auto rounded-xl p-4 cursor-pointer overflow-hidden hover:scale-105 transiton-all duration-200">
      <p className="text-gray-600 text-sm">
        <span className="text-lg font-bold text-actionColor">“ </span>
        {testimonial}
        <span className="text-lg font-bold text-actionColor"> ”</span>
      </p>
      <div className="flex items-center mt-4">
        <a href="#" className="relative block">
          <img
            alt="profil"
            src={image}
            className="mx-auto object-cover rounded-full h-10 w-10"
          />
        </a>
        <div className="flex flex-col justify-between ml-2">
          <span className="text-sm font-semibold text-actionColor">{name}</span>
          <span className="flex items-center text-xs text-primary">
            {occupation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
