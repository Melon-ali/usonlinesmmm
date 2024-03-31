
import BigInfo from "../Home/BigInfo/BigInfo";
import bigInfos from "../../../public/marketing";

const BigInfos = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-3 container">
      {bigInfos.map((info) => (
        <BigInfo key={info.id} info={info}></BigInfo>
      ))}
    </div>
  );
};

export default BigInfos;
