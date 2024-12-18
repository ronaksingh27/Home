import Card from "./Card/Card";

export default function Home() {
  return (

    <div className="flex justify-center items-center h-screen w-screen bg-gray-200"
    style={{
      backgroundImage: "url('/images/bg.jpg')", // Path to your image
      backgroundRepeat: 'repeat', // Repeats the image
      backgroundSize: '500px 500px' // Adjusts the size of the image to its original size
  }} >
      
      <Card/>

    </div>
  );
}
