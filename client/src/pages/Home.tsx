export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-60px)] text-white flex items-center justify-center gap-3 flex-col select-none">
      <h1 className="  text-6xl font-bold  text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
        CodeHelper Compiler
      </h1>
      <p className="text-gray-500 items-center text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        Build Your WebPages With HTML,CSS and JavaScript and Share With Friends
      </p>
    </div>
  );
}
