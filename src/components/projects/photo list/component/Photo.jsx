const Photo = ({ altDesc, src, author }) => {
  return (
    <article className="grid grid-cols-[auto_1fr] items-center mb-8 gap-8">
      <div>
        <img
          src={src}
          alt={altDesc}
          className="block rounded-full h-20 w-20 object-cover mr-2"
        />
      </div>
      <div className="flex flex-col ">
        <h4 className="m-0 capitalize">{author.toLowerCase()}</h4>
        <p className="m-0 leading-none capitalize text-gray-500">{altDesc}</p>
      </div>
    </article>
  );
};
export default Photo;
