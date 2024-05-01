import { useEffect } from "react";

export const Data = (props) => {
  const { meals, loading, search } = props;

  useEffect(() => {
    console.log("Meals in Data component:", meals);
  }, [meals]);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className="mt-10">
        {meals
          .filter((item) =>
            search.toLowerCase() === ""
              ? true
              : item.strCategory.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div className="mx-auto w-min-screen mb-8" key={item.idCategory}>
              <p className="mb-2 text-left text-emerald-500 font-bold">
                {item.strCategory}
              </p>
              <img
                src={item.strCategoryThumb}
                alt={item.strCategoryThumb}
                className="mb-4 rounded-md"
              />
              <p className="text-sm text-left">{item.strCategoryDescription}</p>
            </div>
          ))}
      </div>
    </>
  );
};
