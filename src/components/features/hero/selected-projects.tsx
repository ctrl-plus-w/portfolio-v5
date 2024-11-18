'use client';

import { useLayoutEffect } from 'react';

import { stagger, useAnimate } from 'motion/react';

import * as Card from '@/element/card';
import Heading2 from '@/element/heading2';

import { slideDownAnimation } from '@/util/motion.util';

const SelectedProjects = () => {
  const [scope, animate] = useAnimate();

  useLayoutEffect(() => {
    animate('.card', { opacity: 1 }, { duration: 0.8, delay: stagger(0.1, { startDelay: 2.5 }), ease: 'linear' });
  }, []);

  return (
    <div className="col-start-1 row-start-3 flex flex-col gap-5 pb-16 md:pl-16">
      <Heading2 className="uppercase" {...slideDownAnimation(2)}>
        Selected Projects
      </Heading2>

      <div ref={scope} className="grid grid-cols-1 grid-rows-4 gap-8 md:grid-cols-2 md:grid-rows-2">
        <Card.LinkRoot initial={{ opacity: 0 }} className="card" href="https://jobsparkle.nl" target="_blank">
          <Card.Header>
            <Card.Title>JobSparkle</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            A job search platform connecting professionals in the Netherlands with tailored opportunities across various
            industries.
          </Card.Content>
        </Card.LinkRoot>

        <Card.LinkRoot
          initial={{ opacity: 0 }}
          className="card"
          href="https://alcuinv2.lukaslaudrain.fr"
          target="_blank"
        >
          <Card.Header>
            <Card.Title>Alcuin Open Calendar</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            A webapp that provides tools to interact with the ESAIP&apos;s platforms. Allowing students to check their
            schedule and grades easily.
          </Card.Content>
        </Card.LinkRoot>

        <Card.LinkRoot initial={{ opacity: 0 }} className="card" href="https://design-color.fr" target="_blank">
          <Card.Header>
            <Card.Title>Design Color</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            A showcase website for a decoration and painting company in France. The goal was to showcase the
            company&apos;s work.
          </Card.Content>
        </Card.LinkRoot>

        <Card.Root initial={{ opacity: 0 }} className="card">
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
