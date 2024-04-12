const FrameComponent1 = () => {
    return (
      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-1.5 pl-[5px] box-border max-w-full text-left text-45xl text-black font-lexend ">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[11px] max-w-full">
          <img
            className="self-stretch w-[260px] h-[80px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[74px"
            loading="lazy"
            alt=""
            src="/third.png"
            />
        <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[207px]">
          <div className="self-stretch relative leading-[44px] font-medium mq750:text-32xl mq750:leading-[35px] mq450:text-19xl mq450:leading-[26px]">
            <span className="animate-text absolute animate-slide-left-and-back bg-antiquewhite p-4">BETWEEN</span>
          </div>
        </div>
        <img
          className="self-stretch w-[167px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[74px] animate-img absolute animate-slide-left-and-back bg-antiquewhite p-4"
          loading="lazy"
          alt=""
          src="/fourth.png"
        />
        <div className="w-[219px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <div className="self-stretch relative leading-[44px] font-medium mq750:text-32xl mq750:leading-[35px] mq450:text-19xl mq450:leading-[26px]">
          <span className="animate-text absolute animate-slide-left-and-back bg-antiquewhite p-4">MUSIC</span>
          </div>
        </div>
      </div>
      </div>
    );
}
export default FrameComponent1;