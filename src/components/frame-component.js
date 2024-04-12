const FrameComponent = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-left text-45xl text-black font-lexend">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[11px] max-w-full">
          <div className="h-[74px] w-[158px] relative overflow-hidden shrink-0 bg-[url('/frame-1261154663@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[-67px] left-[0px] w-[158px] h-[141px] object-cover"
              loading="lazy"
              alt=""
              src="/image-138@2x.png"
              />
          <img
            className="absolute top-[-219px] left-[-131px] w-[368px] h-[654px] object-cover z-[1]"
            alt=""
            src="/seven.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
        <div className="relative leading-[44px] font-medium inline-block min-w-[127px] mq750:text-32xl mq750:leading-[35px] mq450:text-19xl mq450:leading-[26px]">
        <span className="animate-text absolute animate-slide-left-and-back bg-antiquewhite p-4">ART</span>
            
          </div>
        </div>
        <div className="h-[75px] w-[151px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/eight.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[348px] max-w-full mq750:min-w-full">
        <div className="self-stretch relative leading-[44px] font-medium mq750:text-32xl mq750:leading-[35px] mq450:text-19xl mq450:leading-[26px]">{`& COLLECTIONS`}</div>
      </div>
    </div>
        </div>
    );
}
export default FrameComponent;