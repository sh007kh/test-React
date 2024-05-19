import Photo from "./Photo";

const List = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        const altDesc = item.alt_description;
        const src = item.urls.small;
        const author = item.user.first_name;
        return (
          <Photo key={item.id} altDesc={altDesc} src={src} author={author} />
        );
      })}
    </div>
  );
};
export default List;
