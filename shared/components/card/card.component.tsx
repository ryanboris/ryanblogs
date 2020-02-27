import React, { FunctionComponent } from 'react';
import './card.component.css';
import Link from 'next/link';
import { getHref, getNavigationLink } from '../../helpers/helper';

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    publishedAt: Date;
    slug: string;
  };
};

const Card: FunctionComponent<Props> = ({ info }) => {
  const cardBGStyles = {
    backgroundImage: `url(${info.heroImage})`,
    background: `url(${info.heroImage}) no-repeat`
  };

  return (
    <Link href={getHref(info.slug)} as={getNavigationLink(info.slug)}>
      <div className="card">
        <div className="card__header" style={cardBGStyles} />
        <div className="card__body">
          <h3 className="card__title">{info.title}</h3>
          <p className="card__text">{info.description}</p>
        </div>

        <div className="card__footer"></div>
      </div>
    </Link>
  );
};

export default Card;
