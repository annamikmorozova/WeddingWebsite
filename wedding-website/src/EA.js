import React from 'react';
import './App.css';
import washingtonDC from "./washingtonDC.JPG";
import Virginia from "./Virginia.JPG";

function EA() {
  
  return (
    <div className="App">
      <div className="our-story">
        <h2>How We Met</h2>
        <p>Erik and I met in March 2019 at our friends’ (Aibika and Peter) house party. 
          Peter is actually Erik's boss while Aibika is my best friend. 
          He invited all of his team and my friend invited a couple of girlfriends.
          We hit it off right away playing Connect 4, exchanged numbers, and went to our first date 3 days later. 
          He took me to a nice cocktail bar and our first date lasted 6 hours. 
          We went to 2 more dates the same week, that’s how you know you just met someone really special. 
          It felt right from the very beginning. I knew I wanted to marry the guy from the first date.</p>

        <p>Erik quickly became my best friend. We told each other I love you on the field in Central Park. 
          We did everything you could imagine together from concerts and trips to rock climbing and 5k runs. 
          I think it is hard to meet someone who is very similar to you. Erik and I are like the same person, 
          but complete each other with the differences. We moved in together after 7 months of dating and every day has been the best so far.</p>
        
        <div className="images-row">
          <img src={washingtonDC} alt="washingtonDC" className="images"/>
          <img src={Virginia} alt="Virginia" className="images"/>
        </div>

        <h2>How He Asked</h2> 
        <p>We had a Quarantine proposal! My sister came to stay with us for a few days and I had no idea Erik already had the ring. 
          I always wanted my sister to see me getting engaged. 
          It was our third work-from-home week since NYC was shut down and I was sure he didn’t even think about it yet.</p>
        
        <p>Since the quarantine started, we tried going for runs and walks to stay healthy when the weather would allow. 
          It was 70 degrees that Friday and it seemed like a perfect day to go for a run. 
          When I asked Erik if he wants to go for a run, he offered to go for a walk instead. 
          My sister and I got excited since we could finally dress up (the quarantine generally prevents you from dressing up) and take some pictures. 
          Erik liked the idea and started getting ready as well.</p>

        <p>When Erik wore a button-down shirt I started feeling a little suspicious, but I thought I am just a crazy woman and told myself to calm down. 
          The plan was to grab some beers in the local brewery and hang out. 
          Here we were, all dressed up leaving the apartment to go for a walk in this amazing weather. 
          Instead of going downstairs, Erik offered to go to our rooftop first to see the view. 
          That’s when I started feeling suspicious again but told myself I must be really crazy to think Erik would propose right now. 
          After all, there is no way he had a ring!</p>

        <p>We go to the rooftop and look at the beautiful Manhattan skyline when Erik asked my sister to take a picture of us. 
          We take a couple of pictures, I turn to look at Erik and see the Tiffani box! “Right Now?! Really?!” 
          Not sure why I said that but my brain went completely blank. He told me to open the box. 
          I forgot my hands could move. Erik managed to open it and this was the most beautiful ring I did not even dream about! Wow!!! 
          He knew exactly the style I would like and even better! Another proof, Erik knows me the best.</p>

        <p>He got on one knee, told me he knew from the day we met this day would come and asked me to marry him. 
          Could I even say no? I knew from the first day too! Wait, do I have to say something? “Yes! Yes! Yes! 
          Wait, are we actually engaged now???”</p>

        <p>We went for a walk, after all, got some beers, and took a lot of pictures (Thank you, Alisa). 
          We also got champagne to return to our rooftop and celebrate with the sunset.</p>
      </div>
    </div>
  );
}

export default EA;