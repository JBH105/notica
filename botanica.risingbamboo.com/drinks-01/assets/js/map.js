const locations = [
  {
    id: "loc-1",
    title: "Nagpur - Jaripatka Road",
    owner: "Dineshbhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.3203525382937!2d79.08836967526075!3d21.179429280507836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEwJzQ2LjAiTiA3OcKwMDUnMjcuNCJF!5e0!3m2!1sen!2sin!4v1746598119349!5m2!1sen!2sin"
  },
  {
    id: "loc-2",
    title: "Dastur Nagar Road, Kanwar Nagar, Amravati",
    owner: "Sachinbhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3726.938620239297!2d77.75970777525349!3d20.91478898070616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU0JzUzLjIiTiA3N8KwNDUnNDQuMiJF!5e0!3m2!1sen!2sin!4v1746597906285!5m2!1sen!2sin"
  },
  {
    id: "loc-3",
    title: "Palash Line Panchavati Flyover Gadge Nagar, Amravati",
    owner: "",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d931.5419567756628!2d77.7675386!3d20.9457744!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU2JzQ0LjUiTiA3N8KwNDYnMDMuNSJF!5e0!3m2!1sen!2sin!4v1746598920097!5m2!1sen!2sin"
  },
  {
    id: "loc-4",
    title: "Pune Naidu Ganapati Road",
    owner: "ShubhamBhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.2234959273887!2d73.8648972751916!3d18.51879978257443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMxJzA3LjciTiA3M8KwNTInMDIuOSJF!5e0!3m2!1sen!2sin!4v1747290332753!5m2!1sen!2sin"
  },
  {
    id: "loc-5",
    title: "Kokate Complex Daryapur",
    owner: "Vithalbhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3726.70368246641!2d77.32251467525376!3d20.92423798069914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU1JzI3LjMiTiA3N8KwMTknMzAuMyJF!5e0!3m2!1sen!2sin!4v1747911354286!5m2!1sen!2sin"
  },
  {
    id: "loc-6",
    title: "Devi Heaven B204, Vijay Colony, Kathora, Amravati",
    owner: "Sachinbhai Hande",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3725.4848687603517!2d77.75347327525509!3d20.97319238066225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU4JzIzLjUiTiA3N8KwNDUnMjEuOCJF!5e0!3m2!1sen!2sin!4v1747911589912!5m2!1sen!2sin"
  },
  {
    id: "loc-7",
    title: "Barshitakli Road Kaulkhed, Akola",
    owner: "Tusharbhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3732.5834924487694!2d77.00763747524728!3d20.68651748087852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQxJzExLjUiTiA3N8KwMDAnMzYuOCJF!5e0!3m2!1sen!2sin!4v1747911678659!5m2!1sen!2sin"
  },
  {
    id: "loc-8",
    title: "Date College Road, Shivaji Nagar, Yavatma",
    owner: "Abhi Jirapure",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3740.0486960497137!2d78.11895407523897!3d20.380881981111273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDIyJzUxLjIiTiA3OMKwMDcnMTcuNSJF!5e0!3m2!1sen!2sin!4v1748068144663!5m2!1sen!2sin"
  },
  {
    id: "loc-9",
    title: "Jawahar Nagar Road Sitala Mata Chowk, Akola",
    owner: "Rajubhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3732.0975993806924!2d77.01089907524778!3d20.706260980863508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQyJzIyLjUiTiA3N8KwMDAnNDguNSJF!5e0!3m2!1sen!2sin!4v1748068891561!5m2!1sen!2sin"
  },
  {
    id: "loc-10",
    title: "Shivaji Chowk Bus Stand Road, Arvi",
    owner: "Kiranbhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3731.4560453565837!2d77.35503807524853!3d20.732301980843896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQzJzU2LjMiTiA3N8KwMjEnMjcuNCJF!5e0!3m2!1sen!2sin!4v1748069332625!5m2!1sen!2sin"
  },
  {
    id: "loc-11",
    title: "Railway Station Road Near BT Mall, Murtizapur",
    owner: "Harshalbhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3737.6283336293577!2d77.47564307524175!3d20.480452981035285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI4JzQ5LjYiTiA3N8KwMjgnNDEuNiJF!5e0!3m2!1sen!2sin!4v1748069291770!5m2!1sen!2sin"
  },
  {
    id: "loc-12",
    title: "Jasi Rani Chowk Bypass Road, Shivaji Nagar, Karanja-Lad",
    owner: "Rupesh",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3740.0486960497137!2d78.11895407523897!3d20.380881981111273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDIyJzUxLjIiTiA3OMKwMDcnMTcuNSJF!5e0!3m2!1sen!2sin!4v1748069050479!5m2!1sen!2sin"
  },
  {
    id: "loc-13",
    title: "Main Road HP Petrol Pump, Paratwada",
    owner: "Aakash",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3717.3142931071884!2d77.51408007526406!3d21.298593980419028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE3JzU0LjkiTiA3N8KwMzAnNjAuMCJF!5e0!3m2!1sen!2sin!4v1748079894688!5m2!1sen!2sin"
  },
  {
    id: "loc-14",
    title: "Pathan Chowk, Amravati",
    owner: "Aaditya",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.4156113427657!2d77.7402668!3d20.9358184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6bd00786d7125%3A0x1cb9e9595eefcdd8!2sNotica%20Soda%20Shake!5e0!3m2!1sen!2sin!4v1748089696945!5m2!1sen!2sin"
  },
  {
    id: "loc-15",
    title: "Railway Station Road New Town, Badnera, Amravati",
    owner: "Parthamesh",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3728.4067186916936!2d77.72760247525183!3d20.855650680750806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDUxJzIwLjMiTiA3N8KwNDMnNDguNiJF!5e0!3m2!1sen!2sin!4v1748234063497!5m2!1sen!2sin"
  },
  {
    id: "loc-16",
    title: "Dattapur Dhamangaon Road Dhamangaon",
    owner: "Amolbhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3730.096555732247!2d78.13515447525!3d20.787381280802276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzE0LjYiTiA3OMKwMDgnMTUuOCJF!5e0!3m2!1sen!2sin!4v1748234258803!5m2!1sen!2sin"
  },
  {
    id: "loc-17",
    title: "Ambedkar Chowk Amravati Road, Ner",
    owner: "Sureshbhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3737.348911344561!2d77.86553337524204!3d20.49191828102643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI5JzMwLjkiTiA3N8KwNTInMDUuMiJF!5e0!3m2!1sen!2sin!4v1748234866312!5m2!1sen!2sin"
  },
  {
    id: "loc-18",
    title: "Chitra Chowk Jawahar Road Amravati",
    owner: "Savajibhai",
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3726.520062609058!2d77.74954087525389!3d20.931620180693535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU1JzUzLjgiTiA3N8KwNDUnMDcuNiJF!5e0!3m2!1sen!2sin!4v1748235087438!5m2!1sen!2sin"
  },
  {
    id: "loc-19",
    title: "Tukum Road Near Gurudwara Chandrapur",
    owner: "Narendra",
    iframeSrc: "https://www.google.com/maps/place/19%C2%B058'29.6%22N+79%C2%B018'18.0%22E/@19.9749007,79.3024301,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.9749007!4d79.305005?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "loc-20",
    title: "Ashti Road Morshi",
    owner: "Sachinbhai",
    iframeSrc: "https://www.google.com/maps?q=21.3260466,78.0061823&z=17&hl=en"
  },
  {
    id: "loc-21",
    title: "LIFESTYLE HOME S. D P Road To Akoli Road Amravati",
    owner: "Yashbhai",
    iframeSrc: "https://www.google.com/maps/place/20%C2%B054'36.0%22N+77%C2%B044'18.5%22E/@20.9100036,77.735889,17z/data=!3m1!4b1!4m4!3m3!8m2!3d20.9100036!4d77.7384639?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  }
];

const swiperWrapper = document.getElementById('swiper-wrapper');
locations.map(location => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.id = location.id;
  slide.innerHTML = `
        <div class="shop-map-card">
          <div class="shop-map-info">
            <h2>${location.title}</h2>
            <p>Owner: ${location.owner}</p>
          </div>
          <div class="shop-map-container">
            <iframe
              src="${location.iframeSrc}"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      `;
  swiperWrapper.appendChild(slide);
});