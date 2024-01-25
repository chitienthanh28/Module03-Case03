import { useAppSelector } from "./hook";

const Case03CartPage = () => {
  const dataProducts = useAppSelector((state) => state.case03);
	console.log("data", dataProducts)
  return (
    <>
      <div>
        {dataProducts.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt=""  />
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.expiredAt}</div>
            <div>{item.author}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Case03CartPage;
