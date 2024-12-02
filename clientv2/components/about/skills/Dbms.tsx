import Image from "next/image";

const Dbms = () => {
  const itemStyle =
    "text-center font-bold underline decoration-solid underline-offset-1 text-dynamic-xl";
  return (
    <ul
      key="programming"
      className="flex flex-wrap justify-evenly m-5 p-5 shadow-2xl rounded-2xl rounded-tr-none bg-purple-secondary animate-spring transition-transform"
    >
      <li className={itemStyle}>
        MongoDB
        <Image
          src="/icons/mongodb.svg"
          alt="MongoDB Icon"
          width={50}
          height={50}
          className="mx-auto my-2"
        />
      </li>
      <li className={itemStyle}>
        MySQL
        <Image
          src="/icons/mysql.svg"
          alt="MySQL Icon"
          width={50}
          height={50}
          className="mx-auto my-2"
        />
      </li>
    </ul>
  );
};

export default Dbms;
