import React from "react";
import "./PeopleWishes.css";
const PeopleWishes = () => {
  const raymond = "imagesG/img-15.jpg";
  const daniel = "imagesG/img-16.jpg";
  return (
    <div className="big-container">
      <h3>childhood friends of Godwin best wishes to him</h3>
      <div className="container">
        <div className="holder">
          <h4>Raymond Adeniyi well know as RaySun</h4>

          <img className="img" src={raymond} alt="ray images" />
        </div>
        <aside className="information">
          <p>Today is a great day indeed you </p>
          <p>
            Count your life by smiles, not tears.
            <br /> Count your age by friends, not years. Happy birthday!” “Happy
            birthday! I hope all your birthday wishes and dreams come true. A
            wish for you on your birthday, whatever you ask may you receive,
            whatever you seek may you find, whatever you wish may it be
            fulfilled on your birthday and always. Happy birthday!” “ Another
            adventure filled year awaits you. Welcome it by celebrating your
            birthday with pomp and splendor. Wishing you a very happy and
            fun-filled birthday!” “May the joy that you have spread in the past
            come back to you on this day. Wishing you a very happy birthday!”
            “Happy birthday! Your life is just about to pick up speed and blast
            off into the stratosphere. Wear a seat belt and be sure to enjoy the
            journey. Happy birthday!” “This birthday, I wish you abundant
            happiness and love. May all your dreams turn into reality and may
            lady luck visit your home today. Happy birthday to one of the
            sweetest people I’ve ever known.” “May you be gifted with life’s
            biggest joys and never-ending bliss. After all, you yourself are a
            gift to earth, so you deserve the best. Happy birthday.” “Count not
            the candles…see the lights they give. Count not the years, but the
            life you live. Wishing you a wonderful time ahead. Happy birthday.”
            “Forget the past; look forward to the future, for the best things
            are yet to come.” “Birthdays are a new start, a fresh beginning and
            a time to pursue new endeavors with new goals. Move forward with
            confidence and courage. You are a very special person. May today and
            all of your days be amazing!” “Your birthday is the first day of
            another 365-day journey. Be the shining thread in the beautiful
            tapestry of the world to make this year the best ever. Enjoy the
            ride.” “Be happy! Today is the day you were brought into this world
            to be a blessing and inspiration to the people around you! You are a
            wonderful person! May you be given more birthdays to fulfill all of
            your dreams!”
          </p>
        </aside>
      </div>
      <div className="container">
        {/* danny part */}
        <div className="holder">
          <h4>Danel Okpara well know as Danny Young</h4>

          <img className="img" src={daniel} alt="danny young img" />
        </div>
        <aside className="information">
          <p>Today is a great day indeed </p>
          <p>
            “Happy birthday! May your Facebook wall be filled with messages from
            people you never talk to.” “You’re older today than yesterday but
            younger than tomorrow, happy birthday!” “Forget about the past, you
            can’t change it. Forget about the future, you can’t predict it. And
            forget about the present, I didn’t get you one. Happy birthday!”
            “Cheers on your birthday. One step closer to adult underpants.”
            “Happy birthday to one of the few people whose birthday I can
            remember without a Facebook reminder.” “Happy Birthday! You know,
            you don’t look that old. But then, you don’t look that young,
            either.” “Happy birthday to someone who is smart, gorgeous, funny
            and reminds me a lot of myself… from one fabulous chick to another!”
            “Don’t get all weird about getting older! Our age is merely the
            number of years the world has been enjoying us!” “As you get older
            three things happen. The first is your memory goes, and I can’t
            remember the other two. Happy birthday!” “To quote Shakespeare:
            ‘Party thine ass off!’” “You are only young once, but you can be
            immature for a lifetime. Happy birthday!” “On your birthday, I
            thought of giving you the cutest gift in the world. But then I
            realized that is not possible because you yourself are the cutest
            gift in the world.” “Happy birthday to someone who is forever
            young!” “It’s birthday time again, and wow! You’re a whole year
            older now! So clown around and have some fun to make this birthday
            your best one. Happy birthday!” “Just wanted to be the first one to
            wish you happy birthday so I can feel superior to your other
            well-wishers. So, happy birthday!” “Congratulations on being even
            more experienced. I’m not sure what you learned this year, but every
            experience transforms us into the people we are today. Happy
            birthday!” “When the little kids ask how old you are at your party,
            you should go ahead and tell them. While they’re distracted trying
            to count that high, you can steal a bite of their cake! Happy
            birthday!”
          </p>
        </aside>
      </div>
    </div>
  );
};

export default PeopleWishes;
