//npm intall embla-carousel-react embla-carousel-autoplay
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Carousell = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <div className="overflow-hidden w-[20rem] md:[23rem] lg:w-[26rem] bg-black" ref={emblaRef}>
     <div className="flex items-center justyfy-center gap-2 pl-2 md:gap-5 md:pl-5 lg:gap-8 lg:pl-8 ">
      <div className="flex grow-0 shrink-0 rounded-3xl w-[19rem] md:w-[20rem] lg:w-[25rem] h-full bg-gray-600"><img className='h-[20rem] w-[25rem] object-cover rounded-3xl' src="{imagen1}"/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[19rem] md:w-[20rem] lg:w-[25rem] h-full bg-blue-600"><img className='h-[20rem] object-cover rounded-3xl' src="{imagen2}"/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[19rem] md:w-[20rem] lg:w-[25rem] h-full bg-red-200"><img className='h-[20rem] w-[25rem] object-cover rounded-3xl' src="{imagen3}"/></div>
    </div>
    </div>
  );
};

Carousell.propTypes = {};

export default Carousell;