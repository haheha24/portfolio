import { ReactNode, forwardRef } from "react";

//Component Props
interface ISection {
  setId?: string;
  setTitle?: string;
  children?: ReactNode;
  sectionClass?: string;
  sectionStyles?: { [attribute: string]: string | number };
  headingClass?: string;
  headingStyles?: { [attribute: string]: string | number };
}

const Section = forwardRef<HTMLElement, ISection>((props: ISection, ref?) => {
  const {
    setId,
    setTitle,
    children,
    sectionClass = undefined,
    sectionStyles = undefined,
    headingClass = undefined,
    headingStyles = undefined,
  } = props;

  return (
    <section
      id={setId}
      className={sectionClass}
      style={sectionStyles}
      ref={ref}
      data-testid="section-container"
    >
      <h2 className={headingClass} style={headingStyles} data-testid="section-h2" >
        {setTitle}
      </h2>
      {children}
    </section>
  );
});

export default Section;
