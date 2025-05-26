const testimonials = [
      {
        id: "5585",
        rating: 5,
        text: "Absolutely love this place! The sodas are so refreshing and creative — I've never tasted anything like the Mango Mint Fizz before! Super friendly staff too. Highly recommend. It’s become my go-to spot every time I’m out with friends.",
        author: "Shubhambhai",
        location: "Pune - Naidu Ganapati Road"
      },
      {
        id: "5580_1",
        rating: 5,
        text: "Great vibe and even better drinks. The soda flavors are unique, and you can tell they use quality ingredients. Would love to see more seating inside, though. Still, the experience is worth every visit — can't wait to try new flavors!",
        author: "Dineshbhai",
        location: ""
      },
      {
        id: "5581_1",
        rating: 5,
        text: "Best soda in town! I keep coming back for the Blueberry Burst and their secret menu is a fun surprise. My kids love it too! Their rewards program is a nice touch and keeps me coming back.",
        author: "Sachinbhai",
        location: "Dastur Nagar road Kanwar nagar Amravati"
      },
      {
        id: "5580_2",
        rating: 5,
        text: "Every visit feels special. From the moment you walk in, you’re welcomed with a smile. The Strawberry Basil Sparkler was an absolute delight — fresh, unique, and super tasty. I love how the flavors aren’t artificial or overly sugary. Easily my favorite new hangout in the city!",
        author: "Vithalbhai",
        location: ""
      },
      {
        id: "5580_3",
        rating: 5,
        text: "Loved the ambience and the drinks! The Berry Citrus Chill was super refreshing, and the staff helped me pick the perfect one. Would love to see some snack options alongside the sodas.",
        author: "Sachinbhai Hande",
        location: ""
      },
      {
        id: "5580_4",
        rating: 5,
        text: "Super refreshing and full of flavor! The Passionfruit Pop was a hit — tangy, fizzy, and just the right amount of sweet. I was surprised by how creative the menu is. You won’t find these drinks anywhere else! Fast service and friendly smiles made the experience even better. Definitely coming back with friends soon!",
        author: "Tusharbhai",
        location: ""
      },
      {
        id: "5580_5",
        rating: 5,
        text: "Incredible variety and amazing taste! Tried the Spicy Guava and it blew my mind. Fast service and super clean place. Easily my favorite weekend spot. The staff even remembered my last order — such a personal touch!",
        author: "",
        location: "Palash Line Panchavati Flyover Gadge nagar Amravati"
      },
      {
        id: "5581_2",
        rating: 5,
        text: "Great variety and unique combinations. I had the Tamarind Twist and it totally exceeded my expectations. The balance of tanginess and fizz was just perfect. The place gets a bit crowded in the evenings, but that’s just a sign of how good it is. Definitely worth the wait!",
        author: "Abhi Jirapure",
        location: ""
      },
      {
        id: "5581_3",
        rating: 5,
        text: "This place is a gem! I randomly stopped by and ended up discovering my new favorite drink — the Chilli Lemon Spark. It’s bold, zesty, and super refreshing. Love how clean and organized everything is. I even got a loyalty card for discounts on future visits!",
        author: "Rajubhai",
        location: ""
      },
      {
        id: "5581_4",
        rating: 5,
        text: "Incredible flavors and a welcoming atmosphere. The drinks are made with care and creativity — I had the Pomegranate Punch and it was bursting with flavor. Everything from the menu design to the service was top-notch. Perfect place to relax with friends or grab a quick pick-me-up. Highly recommend this place to all soda lovers!",
        author: "Kiranbhai",
        location: ""
      },
      {
        id: "5581_5",
        rating: 5,
        text: "Great drinks and chill atmosphere. The Blackberry Mint Fizz was super refreshing after a hot day. I appreciate the attention to detail — even the ice had fruit inside! Only thing I’d improve is the waiting time during peak hours. Still, definitely worth the visit!",
        author: "Rupesh",
        location: ""
      },
      {
        id: "5581_6",
        rating: 5,
        text: "I’m hooked on these sodas! The Raspberry Rose Fizz is unlike anything I’ve ever tasted — sweet, floral, and perfectly carbonated. The staff was super helpful in helping me choose based on my taste. It’s not just a soda shop, it’s an experience. Love the cozy decor and upbeat music too!",
        author: "Harshalbhai",
        location: ""
      },
      {
        id: "5581_7",
        rating: 5,
        text: "Everything about this place screams quality. I tried the Lemon Basil Cooler and it was absolutely divine. You can really taste the natural ingredients and freshness in every sip. Friendly staff, great music, and quick service make it a perfect combo. Highly recommended for anyone who enjoys craft drinks.",
        author: "Akash",
        location: ""
      },
      {
        id: "5581_8",
        rating: 5,
        text: "My new favorite hangout spot! The Cherry Cola Blast was nostalgic but with a modern twist. The space is super clean and stylish — perfect for photos and relaxing. I love how they experiment with ingredients and seasonal flavors. Keep up the great work!",
        author: "Aaditya",
        location: ""
      }
    ];

      const slider = document.getElementById('testimonial-slider');
    testimonials.forEach(testimonial => {
      const item = document.createElement('div');
      item.className = `item item-${testimonial.id} text-left`;
      item.innerHTML = `
        <div class="testimonial_ratings flex justify-left text-base mb-6 text-[color:var(--rbb-general-primary-color)]">
          ${'<i class="fa-solid fa-star"></i>'.repeat(testimonial.rating)}
        </div>
        <div class="testimonial_text text-lg font-light mb-6 leading-[30px] relative">
          "${testimonial.text}"
        </div>
        <div class="testimonial_info flex items-center justify-left font-bold">
          ${testimonial.author ? `- ${testimonial.author}` : ''}
          ${testimonial.location ? `<div class="testimonial_excerpt pl-1">${testimonial.location}</div>` : ''}
        </div>
      `;
      slider.appendChild(item);
    });