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
        <Card.LinkCardRoot
          initial={{ opacity: 0 }}
          className="card"
          href="https://ysak.lukaslaudrain.fr"
          target="_blank"
        >
          <Card.Header>
            <Card.Title>Ysak</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            Organizes tasks, tracks time, and analyzes profitability within an intuitive, all-in-one platform,
            simplifying project management for teams.
          </Card.Content>
        </Card.LinkCardRoot>

        <Card.LinkRoot initial={{ opacity: 0 }} className="card" href="https://jobsparkle.nl" target="_blank">
          <Card.Header>
            <Card.Title>JobSparkle</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            Connects professionals with tailored job opportunities using advanced matching algorithms, boosting career
            growth across industries.
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
            Provides seamless access to schedules and grades, enhancing academic planning and user interaction with
            ESAIP’s platforms.
          </Card.Content>
        </Card.LinkRoot>

        <Card.LinkRoot initial={{ opacity: 0 }} className="card" href="https://design-color.fr" target="_blank">
          <Card.Header>
            <Card.Title>Design Color</Card.Title>
            <Card.ExternalIcon />
          </Card.Header>

          <Card.Content>
            Showcases craftsmanship through an elegant portfolio, designed to attract clients and elevate the company’s
            online presence.
          </Card.Content>
        </Card.LinkRoot>
      </div>
    </div>
  );
};

export default SelectedProjects;
