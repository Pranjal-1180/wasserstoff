import ExploreFirstCollectible from "../components/explore-first-collectible";
import CardSmallByPablo from "../components/card-small-by-pablo";

const CollectionLanding = () => {
  return (
    <div className="w-full relative bg-palette-noble-black-700 overflow-hidden flex flex-row items-end justify-start pt-[23px] pb-[35px] pr-0 pl-[39px] left-[0px] box-border gap-[162px] leading-[normal] tracking-[normal] text-left text-[128px] text-gray-200 font-astrix-beta-title-m mq750:gap-[81px] mq450:gap-[40px] mq1125:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:box-border">
      <h1 className="!m-[0] w-[361px] absolute bottom-[157px] left-[34px] text-inherit leading-[118px] font-bold font-inherit flex items-center mq450:text-13xl mq450:leading-[47px] mq1050:text-[51px] mq1050:leading-[71px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">ASTRIX</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">COLLECTIBLE</p>
        </span>
      </h1>
      <div className="!m-[0] absolute h-full top-[0px] right-[72px] bottom-[0px] flex flex-row items-end justify-start gap-[71px] max-w-full text-[20px] text-palette-pac-man-50 mq750:flex-wrap">
        <img
          className="h-[1024px] w-[91px] relative overflow-hidden shrink-0 object-contain animate-escalator-up-and-back"
          loading="lazy"
          alt=""
          src="/verticalstrip.png"
        />  
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[480px] box-border min-h-[524px] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[14px] mq450:flex-wrap">
            <div className="w-[150px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <img
                className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/profilepics.svg"
              />
            </div>
            <div className="relative leading-[44px] font-medium mq450:text-base mq450:leading-[35px]">
              22k people interested
            </div>
          </div>
        </div>
      </div>
{/* Title */}
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17.3px] box-border max-w-full text-[40px] text-goldenrod mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full mq450:gap-[18px]">
          <div className="w-[217px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative">
            <img
              className="h-[74.2px] w-[74.2px] absolute !m-[0] top-[-8px] left-[-23.8px] object-contain"
              loading="lazy"
              alt=""
              src="/brandlogo.png"
            />
            <div className="flex-1 flex flex-row items-start justify-end">
              <h1 className="m-0 w-[131px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit inline-block mq450:text-5xl mq450:leading-[38px] mq1050:text-13xl mq1050:leading-[51px]">
                Astrix.
              </h1>
            </div>
          </div>

{/* images */}
          <div className="self-stretch h-[760px] flex flex-row items-start justify-end pt-0 px-0 pb-7 box-border max-w-full">
            <div className="self-stretch w-[568px] overflow-x-auto shrink-0 flex flex-row items-end justify-start pt-8 px-0 pb-0 box-border gap-[25px] max-w-full z-[1]">
              <div className="self-stretch w-[412px] shrink-0 flex flex-row items-start justify-start gap-[27px] [debug_commit:f6aba90]">
               <ExploreFirstCollectible loremipsumDolorsitamet="/frame-1261154670@2x.png" />
              </div>

            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full text-left text-13xl text-white font-astrix-beta-title-m">
              <div className="w-[400px] flex flex-row items-start justify-start py-0 px-px box-border">
          <b className="flex-1 relative leading-[30px] mq450:text-lgi mq450:leading-[24px]">
            <p className="m-0">{`Lunar Palace: `}</p>
            <p className="m-0 text-5xl">(ft. Kanye west)</p>
          </b>
             </div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/device.png"
              /></div>

              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full text-left text-13xl text-white font-astrix-beta-title-m">
              <div className="w-[400px] flex flex-row items-start justify-start py-0 px-px box-border">
          <b className="flex-1 relative leading-[30px] mq450:text-lgi mq450:leading-[24px]">
            <p className="m-0">{`Lunar Palace: `}</p>
            <p className="m-0 text-5xl">(ft. Kanye west)</p>
          </b>
             </div>
              <img
                className="h-[630px] w-[412px] relative overflow-hidden shrink-0 object-cover [debug_commit:f6aba90]"
                alt=""
                src="/bill.png"
              /></div>

              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full text-left text-13xl text-white font-astrix-beta-title-m">
              <div className="w-[400px] flex flex-row items-start justify-start py-0 px-px box-border">
          <b className="flex-1 relative leading-[30px] mq450:text-lgi mq450:leading-[24px]">
            <p className="m-0">{`Lunar Palace: `}</p>
            <p className="m-0 text-5xl">(ft. Kanye west)</p>
          </b>
             </div>
              <img
                className="h-[630px] w-[412px] relative overflow-hidden shrink-0 object-cover [debug_commit:f6aba90]"
                alt=""
                src="/girlsmile.png"
              /></div> 
            </div>
          </div>

{/* toggle */}
          <div className="w-[350.5px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full text-center text-lg text-gainsboro font-inter">
            <div className="flex-1 flex flex-row items-start justify-between pt-[16.8px] pb-[21.3px] pr-[26px] pl-[48.4px] box-border relative max-w-full gap-[20px] mq450:flex-wrap mq450:pl-5 mq450:box-border">
              <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-81xl bg-gray-100" />
              <b className="w-[62.8px] relative leading-[14px] inline-block shrink-0 [text-shadow:0px_0px_3px_rgba(0,_0,_0,_0.4)] min-w-[62.8px] z-[1]">
                Events
              </b>
              <div className="h-full w-[163.6px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-81xl bg-darkslategray z-[1]" />
              <b className="relative leading-[14px] inline-block text-palette-pac-man-50 min-w-[103.9px] z-[2]">
                Collections
              </b>
            </div>
            <div className="h-[50px] w-[140px] relative overflow-hidden shrink-0 hidden" />
          </div>
        </div>
      </div>
      <CardSmallByPablo />
    </div>
  );
}
export default CollectionLanding;



