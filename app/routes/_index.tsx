import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  
  return (
<div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white text-center">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
    Welcome to Remix
  </h1>
  <div className="bg-white text-black p-6 rounded-lg mb-6">
    <h2 className="text-2xl font-bold mb-4">
      Congratulations to whitefire for mastering the Remix setup!
    </h2>
    <ul className="list-disc list-inside text-lg mb-4">
      <li className="mb-2">
        <a
          target="_blank"
          href="https://remix.run/tutorials/blog"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          15m Quickstart Blog Tutorial
        </a>
      </li>
      <li className="mb-2">
        <a
          target="_blank"
          href="https://remix.run/tutorials/jokes"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Deep Dive Jokes App Tutorial
        </a>
      </li>
      <li className="mb-2">
        <a
          target="_blank"
          href="https://remix.run/docs"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Remix Docs
        </a>
      </li>
    </ul>
  </div>
  <div className="bg-white text-black p-6 rounded-lg mb-6">
    <p className="text-2xl text-black mb-4">
      Embracing the Coding Odyssey: A Week of Triumphs and Transformations! 🚀💻
    </p>
    <div className="mb-4">
      <img
        src="https://previews.dropbox.com/p/thumb/ACG_4pPZNjE4qN0lpix1QV08KX8FyUodOoPDv1N3o_40bPc4_LMDP3MiK9Vkfl9C7oeF3qxs_QzTYL6-QnWAxyf8UkRHn9Q26hPkThdeUUcebJ0lpeBUQEcq4h84jTeVeoV9LNHPGVbBm2YQTupyyoSVFfD3xnf3giXtTJTuM3J5fpx0l9x0xZ8vd4Dayc42HC_RcbmqsvLucRagOm27NlEurErEO_R3MxhyQFYko7Oq0-GaNJsusEuCfXfJHW-1SEEFULTK4SUkavl5MluhXZgP-rNyCi3lo5fpKyg_yQkhYytt6u0V1U3v54HiOawlXkuaBYdREMy6QRJG9pUVDxnO/p.jpeg"
        alt="Jumping Avatar"
        className="w-20 h-20 rounded-full mx-auto mb-2"
      />
    </div>
  </div>
  
{[
  {
    text: "🚀 Excitement fills my heart as I embark on this web development journey, mastering Remix and delving into the intricacies of Next.js. Each line of code feels like a brushstroke, painting the canvas of my ambitions with vibrant colors of creativity and innovation.",
    image: "https://img.freepik.com/free-photo/view-3d-woman_23-2150709978.jpg"
  },
  {
    text: "🌟 The satisfaction of overcoming challenges fuels my passion for web development. Remix has become my trusted companion, and I'm thrilled to witness my projects evolve. As I navigate through its tutorials and documentation, I'm reminded that every hurdle is a stepping stone to greater heights.",
    image: "https://img.freepik.com/premium-photo/sun-sunglasses-smiling-generative-ai_384720-4590.jpg"
  },
  {
    text: "🚨 Stepping into the world of React with Remix, I've found a powerful tool to sculpt my vision. The flexibility of components empowers me to reshape my extensive interior decor website effortlessly. With React, the possibilities are endless, and I'm eager to breathe life into my digital creations.",
    image: "https://img.freepik.com/free-photo/close-up-burnt-paper_23-2150158726.jpg"
  },
  {
    text: "🌈 This week has been a whirlwind of learning and growth. The decision to adopt React for my projects, including a Weather App, was a game-changer. React's modular approach allows me to harmonize my code and enhance user experiences across various sections of my website.",
    image: "https://img.freepik.com/premium-photo/3d-pixar-character-potraits-ball-fire_825402-4708.jpg"
  },
  {
    text: "🌐 Reflecting on the challenges faced, I find solace in the community that surrounds web development. As I share my struggles and triumphs, I hope to inspire others navigating similar paths. Here's to conquering the complexities, embracing the journey, and reaching new horizons together! 🚀💻",
    image: "https://img.freepik.com/premium-photo/fiery-image-professional-basketball-player-jumping-with-ball-creative-collage-sports-flyer-basketball-concept-sport-game-healthy-lifestyle-copy-space-3d-illustration-3d-render_99433-6795.jpg"
  }
].map((item, index) => (
  <div key={index} className="bg-white text-black p-6 rounded-lg mb-6">
    <p className="text-lg mb-4">{item.text}</p>
    <img
      src={item.image}
      alt={`Avatar ${index + 1}`}
      className="w-20 h-20 object-cover rounded-full mx-auto mb-2"
    />
  </div>
))}


</div>
);
};




