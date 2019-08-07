import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import { GROUPS } from '../../.storybook/groups';

import Themes from '../styles/themes';

function Spacing({ spacingName }) {
  return (
    <div
      css={theme => css`
        display: flex;
        align-items: center;
        margin-bottom: ${theme.spacings.giga};
      `}
    >
      <div
        css={theme => css`
          width: ${theme.spacings[spacingName]};
          height: ${theme.spacings[spacingName]};
          background-color: ${theme.colors.n700};
          margin-right: ${theme.spacings.mega};
        `}
      />

      <span>{spacingName}</span>
      <span
        css={theme => css`
          margin-left: ${theme.spacings.kilo};
          color: ${theme.colors.n500};
          font-size: ${theme.fontSizes.byte};
        `}
      >
        {Themes.standard().spacings[spacingName]}
      </span>
    </div>
  );
}

Spacing.propTypes = {
  spacingName: PropTypes.string.isRequired
};

function FontSize({ fontSizeName }) {
  return (
    <p>
      <span
        css={theme => css`
          font-size: ${theme.fontSizes[fontSizeName]};
          line-height: 1.5;
        `}
      >
        {fontSizeName}
      </span>
      <span
        css={theme => css`
          margin-left: ${theme.spacings.kilo};
          color: ${theme.colors.n500};
          font-size: ${theme.fontSizes.byte};
        `}
      >
        {Themes.standard().spacings[fontSizeName]}
      </span>
    </p>
  );
}

FontSize.propTypes = {
  fontSizeName: PropTypes.string.isRequired
};

storiesOf(`${GROUPS.DOCS}|Theme`, module)
  .add('Spacings', () =>
    Object.keys(Themes.standard().spacings).map(spacingName => (
      <Spacing key={spacingName} spacingName={spacingName} />
    ))
  )
  .add('Font sizes', () =>
    Object.keys(Themes.standard().fontSizes).map(fontSizeName => (
      <FontSize key={fontSizeName} fontSizeName={fontSizeName} />
    ))
  );
