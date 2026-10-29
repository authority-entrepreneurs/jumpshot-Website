import { LINKS, img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import Button from '../components/Button';

function SignUpButtons() {
  return (
    <div className="btn-row btn-row--center">
      <Button to={LINKS.futureAthletesSingle} size="lg">
        Single Class
      </Button>
      <Button to={LINKS.futureAthletesMonthly} size="lg">
        Monthly
      </Button>
    </div>
  );
}

// /landing-page/ — original Future Athletes flyer page.
export default function FutureAthletes() {
  usePageTitle('Landing Page');

  return (
    <div className="fa">
      <section className="fa-hero" style={{ backgroundImage: `url(${img('unnamed-1.png')})` }}>
        <div className="container">
          <h1 className="fa-hero__title">“Building a foundation for your Future Athlete!”</h1>
          <SignUpButtons />
        </div>
      </section>

      <section className="section section--tint fa-flyer">
        <div className="container fa-flyer__grid">
          <img className="fa-flyer__image" src={img('futureimage.png')} alt="Future Athletes flyer" loading="lazy" />
          <div className="card fa-flyer__text">
            <p>JumpShotz Presents:</p>
            <p>(Flyer (revised version coming soon))</p>
            <h2>What is the Future Athletes Program?</h2>
            <p>
              The Future Athletes program is the gateway to sports for your little ones. It’s their first experience
              learning the basics and attempting the fundamental skills for the future. It’s important stuff!
            </p>
            <p>
              Every kid’s first taste of sports should be fun! That’s why we’ve created this special curriculum to allow
              kids to learn while also having a blast of a time! We offer 4 Activities, 2 per class, each one allows the
              child to start acquiring the basics of a new skill set.
            </p>
            <p>
              The activities are Soccer, Track &amp; Field, Basketball, and Obstacle Courses. All of our coaches are
              trained to get the most out of your child while keeping a smile on their face!
            </p>
            <p>The schedule looks like this:</p>
            <p>Tuesday’s &amp; Thursday’s… except for holidays or School Breaks…</p>
            <p>10:00-10:45am Ages: 18m-30months (Parent Assistance Required)</p>
            <p>10:45-11:30am Ages: 24-36months (Parent Assistance Highly Recommended)</p>
            <p className="fa-flyer__note">
              (YES, we know! There is an overlap in our age brackets. We do that on purpose. For children that are
              between 24m-30months, we leave the option for the parent to move a child up or down. We don’t want to
              discourage any players and we don’t want players to get bored. This overlap in the age bracket helps us
              get kids into the right sections. For your first session, pick what you feel is best for your son/daughter
              and don’t think twice! Just go with your gut!)
            </p>
            <p>Location: Jump Shotz (120 Androvette Street)</p>
            <p>Price: $149 Unlimited OR $40 per class</p>
            <p>
              Our Unlimited Plan allows you to bring your little one to two (2) classes per week! That means if you can
              get to half of our classes in the month, our Unlimited Plan is beneficial to you.
            </p>
            <p>Here is the activity breakdown of our sessions:</p>
            <p>Tuesdays: Track &amp; Field and Soccer</p>
            <p>Thursday: Basketball and Obstacle Course</p>
            <p>
              To reserve your spot, email <a href="mailto:jumpshotzsi@gmail.com">jumpshotzsi@gmail.com</a> or call{' '}
              <a href="tel:3472327067">347-232-7067</a>
            </p>
            <p>We are excited to start working with your Future Athlete!</p>
            <p>See you in the gym soon!</p>
          </div>
        </div>
        <SignUpButtons />
      </section>

      <section className="section fa-gallery">
        <div className="container fa-gallery__grid">
          <img src={img('unnamed-1.png')} alt="Future Athletes class" loading="lazy" />
          <img src={img('unnamed-3.png')} alt="Future Athletes class" loading="lazy" />
          <img src={img('image.png')} alt="Future Athletes class" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
