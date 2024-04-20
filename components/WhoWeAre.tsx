
import FlexContainer from './FlexContainer';

const WhoWeAre = () => {
  return (
    <section className="bg-tt-cream/40">
      <FlexContainer
        title={"Who we are"}
        text={
          "Since 1999, Tender Talents Magnet School has cultivated a rich tradition of academic excellence and artistic exploration. "
        }
        dir={false}
        image={"/images/home-images/about-home-2.webp"}
        text2={
          "We provide a comprehensive education where students master the national curriculum while expressing their creativity through theater, music, dance, and more."
        }
        btntext='Learn more'
        path='/about'
      />
    </section>
  );
}

export default WhoWeAre