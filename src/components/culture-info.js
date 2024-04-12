const CultureInfo = () => {
    return (
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[7px] gap-[11px] text-left text-45xl text-black font-lexend lg:flex-wrap">
        <div className="w-[238px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
          <div className="self-stretch relative leading-[44px] font-medium mq750:text-32xl mq750:leading-[35px] mq450:text-19xl mq450:leading-[26px]">
            ARTIST
          </div>
        </div>
        <img
        className="self-stretch w-[299px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[74px]"
        loading="lazy"
        alt=""
        src="/fifth.png"
      />
      <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
        <div className="relative leading-[44px] font-medium mq750:text-32xl mq750:leading-[35px] mq450:text-19xl mq450:leading-[26px]">
        {/* <span className="animate-text absolute animate-slide-right-and-back bg-antiquewhite p-4">CULTURE</span> */}
        CULTURE
          </div>
      </div>
      <img
        className="self-stretch w-[137px] relative max-h-full overflow-hidden shrink-0 object-cover min-h-[74px]"
        loading="lazy"
        alt=""
        src="/sixth.png"
      />
    </div>
    )
}
export default CultureInfo;