'use client';

import * as Card from '@/element/card';
import Heading2 from '@/element/heading2';

const SelectedProjects = () => {
  return (
    <div className="col-start-1 row-start-3 flex flex-col gap-5 pb-16 pl-16">
      <Heading2 className="uppercase">Selected Projects</Heading2>

      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        <Card.LinkRoot href="https://jobsparkle.nl" target="_blank">
          <Card.Header>
            <Card.Title>JobSparkle</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            A job search platform connecting professionals in the Netherlands with tailored opportunities across various
            industries.
          </Card.Content>
        </Card.LinkRoot>

        <Card.LinkRoot href="https://alcuinv2.lukaslaudrain.fr">
          <Card.Header>
            <Card.Title>Alcuin Open Calendar</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            A webapp that provides tools to interact with the ESAIP&apos;s platforms. Allowing students to check their
            schedule and grades easily.
          </Card.Content>
        </Card.LinkRoot>

        <Card.LinkRoot href="https://design-color.fr" target="_blank">
          <Card.Header>
            <Card.Title>Design Color</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            A showcase website for a decoration and painting company in France. The goal was to showcase the
            company&apos;s work.
          </Card.Content>
        </Card.LinkRoot>

        <Card.Root>
          <Card.Header>
            <Card.Title>Little Wonder Captures</Card.Title>
            <Card.EyeNoneIcon />
          </Card.Header>

          <Card.Content>A web app designed to streamline and refactor Excel workflows for app testers.</Card.Content>
        </Card.Root>
      </div>
    </div>
  );
};

export default SelectedProjects;
