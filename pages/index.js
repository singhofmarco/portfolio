import Head from 'next/head'

export default function Home() {
  return (
    <>
    <div className="bg-gray-100 py-8 md:py-32 font-sans font-light md:text-lg text-gray-900">
    <div className="px-8 mx-auto container">
  <div className="max-w-2xl w-full md:flex mx-auto bg-gray-200 shadow-xl mb-16 px-4 md:px-8 py-6 rounded-lg items-center">
    <picture>
      <source srcSet="/images/profile.webp" type="image/webp"/>
      <source srcSet="/images/profile.jpg" type="image/jpeg"/>
      <img className="md:flex-1 rounded-full shadow-lg w-20 h-20 md:w-40 md:h-40 mx-auto" src="/images/profile.jpg" alt="Marco" />
    </picture>
    <div className="md:flex-1 md:ml-8 mt-2 md:mt-0 text-center md:text-left md:text-lg">
      <h1 className="text-xl md:text-2xl font-semibold">Marco Singhof</h1>
      <div className="text-base text-blue-700">Full-stack developer</div>
      <div className="text-base text-gray-700">Munich, Germany</div>
      <hr className="my-2" />
      <p>I love to design as well as code engaging and beautiful web experiences.</p>
      <div>
        <a className="bg-blue-700 hover:bg-blue-800 hover:text-white text-white hover:shadow-inner shadow-lg p-2 px-4 rounded inline-block mt-2" href="mailto:coffee@singhof.dev">Let's chat <svg
            className="fill-current hover:text-white h-5 w-5 inline-block align-text-top pl-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M416 192.1H32c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96h192c53 0 96-43 96-96v-32h32c52.9 0 96-43 96-96s-43.1-95.9-96-95.9zM352 416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V224.1h320V416zm64-64h-32V224h32c35.3 0 64 28.7 64 64s-28.7 64-64 64zM191.3 78.5c17.3 17.2 30.4 40.7 32.2 73.4.2 4.3 3.7 7.8 8 7.8h16c4.5 0 8.2-3.7 8-8.2-2.1-42.1-19.3-73.3-41.6-95.5-18.4-18.7-21.1-38.2-21.9-48.9-.3-4.1-3.9-7.1-8-7.1l-16 .1c-4.7 0-8.2 4-7.9 8.7.9 14.9 5.2 43.6 31.2 69.7zm-95.6 0c17.3 17.2 30.4 40.7 32.2 73.4.2 4.3 3.7 7.8 8 7.8h16c4.5 0 8.2-3.7 8-8.2-2.1-42.1-19.3-73.3-41.6-95.5-18.3-18.7-21-38.2-21.8-48.9C96.2 3 92.6 0 88.4 0l-16 .1c-4.7 0-8.2 4-7.9 8.7 1 14.9 5.2 43.6 31.2 69.7z" />
          </svg></a>
      </div>
    </div>
  </div>
  <div className="max-w-2xl w-full mx-auto bg-gray-300 shadow-xl py-6 px-8 mb-16 rounded-lg">
    <h2 className="font-semibold text-xl md:text-2xl mb-3">The World-Wide-Web</h2>
    <p className="mb-4">I work as a freelancer designing websites, building e-commerce platforms and implementing content management systems using state of the art technology.</p>
    <p>My favorite toolset when coding websites comes down to developing the back-end with Laravel and using React or Vue.js for the front-end.</p>
  </div>
</div>
<div className="text-center text-gray-800 text-base">© 2020 Marco Singhof</div>
</div>
</>
)
}
