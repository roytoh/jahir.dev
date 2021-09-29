import styled from '@emotion/styled';
import { useState } from 'react';

import { ToolbarLinks } from '~/components/toolbar-links';
import { Component } from '~/elements/base/fc';
import {
  ToolbarButton,
  ToolbarMenuToggle,
} from '~/elements/complex/toolbar-button';
import { ToolbarLink } from '~/elements/complex/toolbar-link';
import { Logo } from '~/elements/simple/logo';
import { useTheme } from '~/providers/theme';
import { mediaQueries } from '~/types';

export const ToolbarLogo = styled(ToolbarLink)`
  max-height: calc(var(--toolbar-height) - 0.8rem);
  grid-row: 1;
  grid-column: 1;
  font-family: var(--manrope-font);
  font-weight: 600;
  font-size: 1.05rem;

  .logosvg {
    width: 24px;
    height: 24px;
    margin-right: 0.6rem;
    fill: var(--accent);
    color: var(--accent);
    --fill-color: var(--accent);
  }

  &:hover .logosvg,
  &:focus .logosvg,
  .logosvg:hover,
  .logosvg:focus {
    fill: var(--accent-dark);
    color: var(--accent-dark);
    --fill-color: var(--accent-dark);
  }
`;

const ToolbarActionButtons = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-height: calc(var(--toolbar-height) - 0.8rem);
  grid-row: 1;
  grid-column: 2;

  ${mediaQueries.tablet.lg} {
    grid-column: 3;
    justify-content: center;
    min-width: 48px;
    max-width: 48px;
  }
`;

const ToolbarContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: calc(var(--toolbar-height) - 0.4rem) 0;
  grid-auto-rows: minmax(min-content, max-content);
  grid-column-gap: 0.2rem;
  grid-row-gap: 0;
  padding: 0.4rem;
  min-height: var(--toolbar-height);
  max-height: var(--toolbar-height);
  max-width: calc(var(--max-site-width) + 2rem);
  margin: 0 auto;
  transition: all 0.3s ease-in-out;

  &.active {
    grid-row-gap: 0.1rem;
    grid-template-rows: calc(var(--toolbar-height) - 0.4rem) minmax(
        calc(calc(var(--toolbar-height) * 4) - 1.2rem),
        100%
      );
    max-height: unset;
  }

  ${mediaQueries.tablet.lg} {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;

    &.active {
      grid-template-rows: 1fr;
    }
  }
`;

const NavigationContainer = styled.nav`
  z-index: 4;
  width: 100%;
  background-color: var(--toolbar-color);
  -webkit-backdrop-filter: saturate(150%) blur(8px);
  backdrop-filter: saturate(150%) blur(8px);
  min-height: var(--toolbar-height);
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);
  -moz-box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);
  -o-box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);
  box-shadow: 0 0 4px 0 var(--toolbar-shadow-a),
    0 3px 4px 0 var(--toolbar-shadow-b), 0 1px 5px 0 var(--toolbar-shadow-c);

  &.active {
    max-height: unset;
  }
`;

const ThemeToggleButton = styled(ToolbarButton)`
  min-width: 48px;
  max-height: calc(var(--toolbar-height) - 0.6rem);
  font-size: calc(var(--base-font-size) * 1.1);
  justify-content: center;
  padding: 0;
  ${mediaQueries.tablet.lg} {
    padding: 0;
    max-width: 48px;
  }
`;

export const Toolbar: Component = () => {
  const { isDark, toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <NavigationContainer className={expanded ? 'active' : ''}>
      <ToolbarContainer className={expanded ? 'active' : ''}>
        <ToolbarLogo
          to={'/'}
          label={'Jahir Fiquitiva'}
          gradientColor={'brand-to-blue'}
        >
          <Logo className={'logosvg'} />
        </ToolbarLogo>
        <ToolbarLinks active={expanded} />
        <ToolbarActionButtons>
          <ThemeToggleButton onClick={toggleTheme}>
            {isDark ? '🌞' : '🌚'}
          </ThemeToggleButton>
          <ToolbarMenuToggle
            active={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
        </ToolbarActionButtons>
      </ToolbarContainer>
    </NavigationContainer>
  );
};