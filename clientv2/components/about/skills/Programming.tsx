import Image from "next/image";

const Programming = () => {
  const itemStyle =
    "text-center font-bold underline decoration-solid underline-offset-1 text-dynamic-xl";
  const imgStyle = "mx-auto my-2";
  return (
    <ul
      key="programming"
      className="flex flex-wrap justify-evenly m-5 p-5 shadow-2xl rounded-2xl rounded-tr-none bg-purple-secondary animate-spring transition-transform"
    >
      <li className={itemStyle}>
        HTML5
        <Image
          src="/icons/html5.svg"
          alt="HTML5 Icon"
          width={50}
          height={50}
          className={imgStyle}
        />
      </li>
      <li className={itemStyle}>
        CSS3
        <Image
          src="/icons/css.svg"
          alt="CSS3 Icon"
          width={50}
          height={50}
          className={imgStyle}
        />
      </li>
      <li className={itemStyle}>
        JavaScript
        <Image
          src="/icons/javascript.svg"
          alt="JavaScript Icon"
          width={50}
          height={50}
          className={imgStyle}
        />
      </li>
      <li className={itemStyle}>
        TypeScript
        <Image
          src="/icons/typescript.svg"
          alt="TypeScript Icon"
          width={50}
          height={50}
          className={imgStyle}
        />
      </li>
      <li className={itemStyle}>
        PHP
        <Image
          src="/icons/php.svg"
          alt="PHP Icon"
          width={50}
          height={50}
          className={imgStyle}
        />
      </li>
      <li className={itemStyle}>
        Python
        <Image
          src="/icons/python.svg"
          alt="Python Icon"
          width={50}
          height={50}
          className={imgStyle}
        />
      </li>
      <li className={itemStyle}>
        C++
        <Image
          src="/icons/cplusplus.svg"
          alt="cplusplus Icon"
          width={50}
          height={50}
          className={imgStyle}
        />
      </li>
    </ul>
  );
};

export default Programming;
