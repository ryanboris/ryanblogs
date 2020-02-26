import React, { FunctionComponent } from 'react';
import './tag-filters.component.css';

type Props = {
  tags: { id: string; name: string }[];
  selectedTagId: string;
  updatePage: Function;
};

const TagFilters: FunctionComponent<Props> = ({
  tags,
  updatePage,
  selectedTagId
}) => {
  const handleTagChosen = tag => {
    updatePage(tag);
  };

  const renderTag = (tag, index) => (
    <div
      className={`tag ${
        selectedTagId === '' || selectedTagId === tag.id ? 'tag--selected' : ''
      }`}
      key={index}
      onClick={() => handleTagChosen(tag.id)}
    >
      {tag.name}
    </div>
  );

  return (
    <div className="filters">
      <div className="filters__tags">
        <div
          className={`tag ${selectedTagId === '' ? 'tag--selected' : ''}`}
          onClick={() => handleTagChosen('')}
        >
          All
        </div>
        {tags.map(renderTag)}
      </div>
    </div>
  );
};

export default TagFilters;
