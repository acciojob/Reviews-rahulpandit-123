import React, { useState } from "react";

function Reviews() {
  let data = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  const [count, setCount] = useState(0);

  let review = data[count];

  function handlenext() {
    if (count == data.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function handleprev() {
    if (count == 0) {
      setCount(data.length - 1);
    } else {
      setCount(count - 1);
    }
  }

  function handlerandom() {
    let random = Math.floor(Math.random() * data.length);
    while (random === count) {
      random = Math.floor(Math.random() * data.length);
    }
    setCount(random);
  }
  return (
    <div>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review" key={review.id}>
        <img src={review.image} className="person-img" />
        <h3 className="author" id={`author-${review.id}`}>
          {review.name}
        </h3>
        <p className="job">{review.job}</p>
        <p className="info">{review.text}</p>
        <button className="prev-btn" onClick={handleprev}>
          Previous
        </button>
        <button className="random-btn" onClick={handlerandom}>
          Surprise me
        </button>
        <button className="next-btn" onClick={handlenext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Reviews;
