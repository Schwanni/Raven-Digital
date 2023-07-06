import { StatNumbers } from "../constants";

const Stats = () => {
  return (
    <section id="stats" className='bg-[#2B61F7] my-16 w-full mx-auto'>
      <div className="flex flex-col lg:flex-row md:justify-between mx-8 px-4 xxl:justify-between xxl:mx-48">
        {StatNumbers.map((stat, index) => (
          <div key={stat.id} className={`flex flex-col justify-center items-center mx-4 md:px-6 lg:px-6 xl:px-12 my-4 md:my-8 ${index !== StatNumbers.length -1 ? "border-b-2 pb-4 lg:border-r-2 lg:border-b-0" : ""} `}>
            <h2 className="text-white font-bold flex justify-center md:text-[48px] w-full">{stat.number}</h2>
            <p className="flex flex-col text-[#8FC2FF] text-base md:max-w-[90px] justify-center items-center">{stat.text}</p>
          </div>
        ))}
      </div>

      
    </section>
  )
}

export default Stats