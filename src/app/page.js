import FrameComponent2 from '@/components/frame-component2'
import FrameComponent1 from '@/components/frame-component1'
import CultureInfo from '@/components/culture-info'
import FrameComponent from '@/components/frame-component'
import CollectionLanding from '@/components/collection-landing'


const SplashScreen1 = () => {
  return (
    <div>
     <div className="w-full relative bg-antiquewhite overflow-hidden flex flex-col items-start justify-start pt-[98px] px-[127px] pb-[280px] box-border gap-[150px] leading-[normal] tracking-[normal] text-left text-[44px] text-black font-space-grotesk mq750:gap-[75px] mq750:pl-[63px] mq750:pr-[63px] mq750:box-border mq450:gap-[37px] mq450:pl-5 mq450:pr-5 mq450:box-border">
      <b className="h-[31px] relative inline-block mq750:text-[35px] mq450:text-[26px]">
        Astrix
      </b>
      <img
        className="w-[57px] h-[50.9px] absolute !m-[0] top-[88px] left-[50px] object-contain"
        loading="lazy"
        alt=""
        src="/logo.png"
      />
       <section className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full text-left text-45xl text-black font-lexend">
        <div className="w-[1009px] flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
        <FrameComponent2 />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[11px] max-w-full">
            <div className="w-[453px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch relative leading-[44px] font-medium mq750:text-32xl mq750:leading-[35px] mq450:text-19xl mq450:leading-[26px]">
                CONNECTION
              </div>
            </div>
            <img
              className="h-[74px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[74px]"
              loading="lazy"
              alt=""
              src="/flowers.png"
            />
          </div>
          <FrameComponent1 />
          <CultureInfo />
          <FrameComponent />

         
          </div>
          </section>
          </div>
           <div>
            <CollectionLanding/>
         </div>
    </div> 
    
  );
}

export default SplashScreen1;

