function Footer() {
    return (
        <footer className="flex flex-col items-center h-2/6 w-full ">
          <div className="w-2/3 h-full">
            <div className="flex flex-row  items-center justify-evenly border-t-2  h-3/4 space-x-5 space-between py-4">
                {/* add info here */}
                <button className="h-full">
                  <img src="/src/assets/react.svg" className="h-full" alt="Flowbite Logo" /> 
                </button>
                <div className="flex flex-wrap w-2/3">
                  Join us in celebrating the rich agricultural heritage of Majayjay and experience the joy of supporting local farmers while enjoying the freshest produce straight from the farm to your table. Together, let's cultivate a healthier, more susttainable future for generations to come.
                </div>
            </div>
            <div className="flex flex-row  h-1/4 px-8 justify-between">
                {/* add the icons here */}
                <ul className="flex flex-row items-center  space-x-2">
                  {
                    [
                      ['facebook', 'https://www.facebook.com/VillaSilvinaHotelBaguio'],
                      [
                        'instagram', 'https://www.instagram.com/sadie_beltran/?hl=en'
                      ],
                      ['linkedin', 'insert linkedin website here'],
                      ['twitter', 'twitter_site'],
                      ['youtube', 'youtube_channel']
                    ].map(([filename, link]) => (
                      <li key={filename}>
                        <button>
                      <img src={'/src/assets/'+filename+'.svg'} className="button-icon" alt={filename+'image'}/>
                      <a href={link}/>
                      </button>
                      </li>
                    ))
                  }
                </ul>
                <ul className="flex flex-row  items-center space-x-5 text-xs underline text-plant">
                <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
                </ul>
            </div>
            </div>
        </footer>
    );
}

export default Footer