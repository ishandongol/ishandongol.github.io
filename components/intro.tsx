import Skills from "./skills"

const Intro = () => {
  return (
    <section className="h-calculated grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-1 h-auto lg:h-calculated flex flex-col-reverse">
      <Skills star containerClassName="mb-12 mt-1 lg:mt-0 text-center lg:text-left" iconClassName="hover:text-sajilo-yellow text-gray-700 lg:pl-0 lg:pr-4 pl-2 pr-2 pt-4 lg:pt-6 text-3xl lg:text-6xl text-center"/>
      <p className="text-center lg:text-left text-sm md:text-sm font-bold text-gray-700 tracking-tighter leading-tight pb-2 pt-2">
        <span className="text-sajilo-yellow mr-1 lg:mr-2">{'['}</span>Computer Engineer<span className="text-gray-500 mr-1 lg:mr-2">{','}</span>JavaScript Developer<span className="text-sajilo-yellow ml-1 md:ml-2">{']'}</span>
      </p>
    <h2 className="text-center lg:text-left text-2xl md:text-6xl font-bold text-gray-700 tracking-tighter leading-tight py-4 lg:py-6">
        <span className="text-sajilo-yellow mr-2 lg:mr-4">{'<'}</span>{'ईशान डंगोल'}<span className="text-sajilo-yellow ml-2 md:ml-4">{'/>'}</span>
      </h2>
      </div>
      <div className="lg:col-span-2 bg-hero bg-no-repeat lg:bg-right-bottom lg:h-calculated h-64 bg-bottom ">
      </div>
      
    </section>
  )
}

export default Intro
