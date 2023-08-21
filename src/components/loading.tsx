const LoadingComponent = () => {
  return (
    <div
      className="control-loading w-screen h-screen bg-white bg-opacity-90 "
      style={{ zIndex: 100 }}
    >
      <div className="control-loading__wrapper flex flex-col justify-center items-center h-full">
        <div className="control-loading__icon">
          <picture>
            <img
              src={"/gif/loading-button.gif"}
              alt="loading..."
              className="w-[20vw]"
              width={30}
              height={30}
            />
          </picture>
        </div>
        <div className="text-4xl font-bold text-q_textgray">
          <h2>Loading</h2>
        </div>
        <div className={` text-q_blue`}>
          <p>Please Wait...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
