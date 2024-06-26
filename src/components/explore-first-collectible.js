const ExploreFirstCollectible = ({ loremipsumDolorsitamet }) => {
    return (
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full text-left text-13xl text-white font-astrix-beta-title-m">
        <div className="w-[400px] flex flex-row items-start justify-start py-0 px-px box-border">
          <b className="flex-1 relative leading-[30px] mq450:text-lgi mq450:leading-[24px]">
            <p className="m-0">{`Lunar Palace: `}</p>
            <p className="m-0 text-5xl">(ft. Kanye west)</p>
          </b>
        </div>
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={"/girl.png"}
        />
        
      </div>
    );
  };
  
  export default ExploreFirstCollectible;


