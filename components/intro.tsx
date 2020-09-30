import Skills from "./skills"

const Intro = () => {
  return (
    <section className="h-calculated md:grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-1 h-auto lg:h-calculated">
    <h2 className="text-center lg:text-left text-xl md:text-6xl font-bold text-gray-700 tracking-tighter leading-tight py-6">
        <span className="text-sajilo-yellow mr-2 lg:mr-4">{'{'}</span><span className="text-gray-500 mr-2 lg:mr-4">{'...'}</span>{'ईशान डंगोल'}<span className="text-sajilo-yellow ml-2 md:ml-4">{'}'}</span>
      </h2>
      <p className="text-center lg:text-left text-xs md:text-sm font-bold text-gray-700 tracking-tighter leading-tight pb-2 pt-2">
        <span className="text-sajilo-yellow mr-1 lg:mr-2">{'['}</span>Computer Engineer<span className="text-gray-500 mr-1 lg:mr-2">{','}</span>JavaScript Developer<span className="text-sajilo-yellow ml-2 md:ml-4">{']'}</span>
      </p>
      <Skills/>
      </div>
      <div className="lg:col-span-2 bg-hero bg-no-repeat lg:bg-right-bottom lg:h-calculated h-64 bg-center ">
      </div>
      
    </section>
  )
}

export default Intro
