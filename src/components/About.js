export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Ravi Teja Mekala, nice to meet you. Please take a look
              around my portfolio.
            </p>
          </div>
          <div>
            <p>
              As I am a passionate software developer with experience creating
              exceptional software for individuals, small businesses, and large
              enterprise corporations. Specializes in tailoring software
              solutions to meet unique client needs. Committed to delivering
              user-friendly software that positively impacts people's lives.
              Available to offer insights, guidance, and solutions as a software
              expert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
