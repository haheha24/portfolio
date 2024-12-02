const Tools = () => {
  const divContainer =
    "m-5 p-5 shadow-2xl rounded-2xl rounded-tr-none bg-purple-secondary";
  const subheading =
    "font-bold underline decoration-solid underline-offset-1 text-dynamic-xl";
  return (
    <p className="flex flex-col md:flex-row flex-wrap justify-around animate-spring transition-transform">
      <div className={divContainer}>
        <h4 className={subheading}>JavaScript Frameworks / Libraries</h4>
        <ul>
          <li>Node.JS</li>
          <li>React (And various React ecosystem libraries)</li>
          <li>Next.JS</li>
          <li>Express.JS</li>
          <li>Jest</li>
          <li>Mongoose.JS</li>
        </ul>
      </div>
      <div className={divContainer}>
        <h4 className={subheading}>Python Frameworks / Libraries</h4>
        <ul>
          <li>Scikit-learn</li>
          <li>NumPy</li>
          <li>Pandas</li>
          <li>Matplotlib</li>
        </ul>
      </div>
      <div className={divContainer}>
        <h4 className={subheading}>PHP Frameworks / Libraries</h4>
        <ul>
          <li>Twig</li>
          <li>GuzzleHttp</li>
        </ul>
      </div>
      <div className={divContainer}>
        <h4 className={subheading}>C++ Libraries</h4>
        <ul>
          <li>Raylib</li>
          <li>Windows API</li>
          <li>GLFW</li>
          <li>OpenGl (learning for personal use)</li>
        </ul>
      </div>
      <div className={divContainer}>
        <h4 className={subheading}>Tools</h4>
        <ul>
          <li>Visual Studio</li>
          <li>Visual Studio (VS) Code</li>
          <li>Git</li>
          <li>REST APIs</li>
          <li>GNU Debugger (GDB)</li>
        </ul>
      </div>
    </p>
  );
};

export default Tools;
